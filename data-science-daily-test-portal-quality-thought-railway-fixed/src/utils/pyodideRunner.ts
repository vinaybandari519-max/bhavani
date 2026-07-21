// Real, in-browser Python execution via Pyodide (WebAssembly CPython build).
// This replaces the previous "fake" checker that only looked for keyword substrings
// anywhere in the student's code (which meant typing the right words with zero real
// logic could still be marked as passing). Here we actually RUN the student's code
// against each test case's real input and compare the REAL output to the expected one.

declare global {
  interface Window {
    loadPyodide?: (opts?: any) => Promise<any>;
  }
}

let pyodideInstance: any = null;
let pyodideLoadingPromise: Promise<any> | null = null;
let loadedPackages = new Set<string>();

const PYODIDE_CDN = "https://cdn.jsdelivr.net/pyodide/v0.26.2/full/pyodide.js";

function loadScriptOnce(src: string): Promise<void> {
  return new Promise((resolve, reject) => {
    if (document.querySelector(`script[src="${src}"]`)) {
      resolve();
      return;
    }
    const script = document.createElement("script");
    script.src = src;
    script.onload = () => resolve();
    script.onerror = () => reject(new Error("Failed to load Pyodide runtime script."));
    document.head.appendChild(script);
  });
}

export async function getPyodide(): Promise<any> {
  if (pyodideInstance) return pyodideInstance;
  if (pyodideLoadingPromise) return pyodideLoadingPromise;

  pyodideLoadingPromise = (async () => {
    await loadScriptOnce(PYODIDE_CDN);
    if (!window.loadPyodide) {
      throw new Error("Pyodide failed to attach to window after script load.");
    }
    const pyodide = await window.loadPyodide({
      indexURL: "https://cdn.jsdelivr.net/pyodide/v0.26.2/full/",
    });
    pyodideInstance = pyodide;
    return pyodide;
  })();

  return pyodideLoadingPromise;
}

// Loads numpy/pandas on demand only when a test actually needs them, to keep the
// common case (plain Python problems) fast.
async function ensurePackages(pyodide: any, packages: string[]) {
  const toLoad = packages.filter((p) => !loadedPackages.has(p));
  if (toLoad.length === 0) return;
  await pyodide.loadPackage(toLoad);
  toLoad.forEach((p) => loadedPackages.add(p));
}

// Splits a test-case input string like `s1 = "listen", s2 = "silent"` into separate
// valid Python assignment statements, since that comma-joined form isn't itself valid
// Python (it would be parsed as tuple unpacking).
function splitAssignments(inputLine: string): string[] {
  const parts: string[] = [];
  let depth = 0;
  let current = "";
  for (let i = 0; i < inputLine.length; i++) {
    const ch = inputLine[i];
    if (ch === "(" || ch === "[" || ch === "{") depth++;
    if (ch === ")" || ch === "]" || ch === "}") depth--;
    if (ch === "," && depth === 0) {
      // only split on commas that precede a new "identifier =" assignment
      const rest = inputLine.slice(i + 1);
      if (/^\s*\w+\s*=/.test(rest)) {
        parts.push(current.trim());
        current = "";
        continue;
      }
    }
    current += ch;
  }
  if (current.trim()) parts.push(current.trim());
  return parts;
}

function extractVarNames(assignments: string[]): string[] {
  return assignments
    .map((a) => a.split("=")[0]?.trim())
    .filter((v): v is string => !!v && /^[a-zA-Z_]\w*$/.test(v));
}

export interface RealTestResult {
  status: "Passed" | "Failed" | "Error" | "Unverified";
  actual: string;
  errorMessage?: string;
}

/**
 * Actually executes the student's submitted code against one real test case input
 * inside a sandboxed Pyodide (WASM) interpreter, and compares the real output against
 * the expected output. No keyword matching involved — the code must actually run and
 * actually produce the right result.
 */
export async function runRealTestCase(params: {
  userCode: string;
  functionName: string;
  inputLine: string;
  expectedOutput: string;
  needsNumpyPandas?: boolean;
}): Promise<RealTestResult> {
  const { userCode, functionName, inputLine, expectedOutput, needsNumpyPandas } = params;

  try {
    const pyodide = await getPyodide();
    if (needsNumpyPandas) {
      await ensurePackages(pyodide, ["numpy", "pandas"]);
    }

    const assignments = splitAssignments(inputLine);
    const argNames = extractVarNames(assignments);

    if (argNames.length === 0) {
      // Can't determine call arguments from this test case's input format
      // (e.g. natural-language descriptions like "X_train, y_train" for ML objects).
      return { status: "Unverified", actual: "N/A — this test case's input isn't a runnable literal (requires manual review)." };
    }

    const setupLines = [
      needsNumpyPandas ? "import numpy as np" : "",
      needsNumpyPandas ? "import pandas as pd" : "",
      ...assignments,
      userCode,
      `import json as __json__`,
      `def __safe_repr__(v):\n    try:\n        return repr(v)\n    except Exception:\n        return str(v)`,
      `__result__ = ${functionName}(${argNames.join(", ")})`,
      `__result_str__ = __safe_repr__(__result__)`,
    ].filter(Boolean).join("\n");

    await pyodide.runPythonAsync(setupLines);
    const actual = pyodide.globals.get("__result_str__");

    const normalize = (s: string) => String(s).replace(/\s+/g, "").toLowerCase();
    const passed = normalize(actual) === normalize(expectedOutput);

    return {
      status: passed ? "Passed" : "Failed",
      actual: String(actual),
    };
  } catch (err: any) {
    const message = err?.message || String(err);
    return {
      status: "Error",
      actual: "None (Runtime Exception)",
      errorMessage: message.split("\n").slice(-3).join("\n"), // last few lines of the Python traceback
    };
  }
}
