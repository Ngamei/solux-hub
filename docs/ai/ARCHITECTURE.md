# Architecture — Solux Doc Hub

## Type
Static site: hand-authored HTML documents, no framework, no build framework. Served as-is by Vercel.

## Deploy (vercel.json)
- `cleanUrls: true` (so `/Solux` serves `Solux.html`)
- `trailingSlash: false`
- redirect: `/` -> `/Solux` (landing page)
- `buildCommand: node inject-hypothesis.js`
- `outputDirectory: "."` (the repo root is the site root)

## Build step (inject-hypothesis.js)
Runs on every Vercel deploy. Walks the repo from `__dirname` (skips `node_modules` and any dotdir), and for each `.html`:
- if `hypothes.is/embed.js` is already present -> skip
- if there is no `</body>` -> skip
- otherwise inject `<script src="https://hypothes.is/embed.js" async></script>` before `</body>`

The check-before-inject logic keeps the script idempotent, so the Hypothesis annotation layer is present on every page even if a doc is regenerated without it.

## Annotation layer
Hypothesis (hypothes.is) provides collaborative highlighting/annotation on the deployed docs.

## Content model
Each business topic is its own top-level `.html` file (see FOLDER_STRUCTURE.md). Cross-navigation is via in-page links (e.g. `Solux.html` links into `Solux_AI_Initiatives.html#t-p01` and `Solux_Business_Analysis.html#w3`). Style is centralised in `Style_Guide.html`.

## No app concerns here
No auth, no database, no server routes. RBAC / data-model details discussed in the *content* (e.g. Business Analysis §4 / §4b) refer to the separate app repo (mzouaisolux/solux), not to this site.
