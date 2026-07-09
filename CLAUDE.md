# Claude / Cursor Instructions — Solux Doc Hub

Operate inside the Solux **documentation hub** only. This repo is static HTML docs deployed on Vercel. The live product/app is a separate repo (`github.com/mzouaisolux/solux`) — do not mix its context in here. Do not mix any other project.

## Before working
Read, in order:
1. `PROJECT_CONTEXT.md`, `CURRENT_STATE.md`, `DECISIONS.md`, `TASKS.md` (project brain — high-level state).
2. `docs/ai/00_AI_INDEX.md` -> the `/docs/ai/` files (implementation truth: architecture, structure, build/deploy).

## What this repo is
- HTML document hub for Solux: CRM / ERP / tender workflows, Study Lab, AI initiatives.
- Deployed on Vercel; Hypothesis annotation injected on every build via `inject-hypothesis.js`.
- Phase structure P01 / P02 / P03.

## Rules
- HTML-first. No JS frameworks without an explicit request.
- Keep HTML consistent with `Style_Guide.html`.
- Preserve the phase structure (P01, P02, P03); ask before changing it.
- Keep `inject-hypothesis.js` scoped and minimal.
- `/docs/ai/` (implementation truth): may be updated after meaningful changes.
- Brain files (`CURRENT_STATE.md`, `DECISIONS.md`, `TASKS.md`): confirm first, then write.
- State missing context before proceeding; keep changes minimal and scoped; do not rewrite unrelated files.
