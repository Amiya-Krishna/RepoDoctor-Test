# RepoDoctor-Test

A minimal, deterministic ES Module (`"type": "module"`) Node.js repository designed to demonstrate **RepoDoctor's Autonomous Fix** workflow.

## Structure

- `package.json` — Configures `"type": "module"` and `"test": "node test.js"`
- `package-lock.json` — Lockfile (`lockfileVersion: 3`) for deterministic `npm ci` in Docker
- `src/utils.js` — Exports `add`, `subtract`, `multiply`, and `divide` using ES Module named exports (contains an intentional bug in `subtract` where `a + b` is returned instead of `a - b`)
- `src/index.js` — Sample ESM entry point
- `test.js` — Deterministic test suite using `node:assert/strict`

## Running Tests

```bash
npm test
```

Before repair, `npm test` fails on `subtract(5, 2)` returning `7` instead of `3`. After RepoDoctor repairs `src/utils.js` using ES Module syntax (`export function subtract(a, b) { return a - b; }`), all assertions pass.