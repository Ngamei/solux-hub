# Technical Debt — Solux Doc Hub

## Malformed CLAUDE.md (fixed in this bootstrap)
- Where: `CLAUDE.md`
- What: broken markdown list nesting (stray/duplicated dashes, progressively indented list), hard to read.
- Why it exists: accreted edits.
- Risk: AI misreads its own instructions.
- Fix: rewritten as a clean short entry point (this bootstrap).
- Added: 2026-07-09

## Malformed heading bytes in root brain files
- Where: `CURRENT_STATE.md` (leading `—#`), `DECISIONS.md` (leading `—————#`), `TASKS.md` (every line prefixed `- [ ]`).
- What: stray em-dashes / list markers before headings break the markdown rendering.
- Why it exists: accreted edits.
- Risk: low; brain files are still human-readable but render poorly. These are brain-layer files -> confirm-first before fixing.
- Fix: propose clean rewrites to Klairs (do not silently edit).
- Added: 2026-07-09

## Empty repo description
- Where: GitHub repo metadata.
- What: description is blank.
- Risk: low; discoverability only.
- Fix: set a one-line description.
- Added: 2026-07-09

## Unfilled PROJECT_CONTEXT.md placeholders
- Where: `PROJECT_CONTEXT.md` (Stakeholders, Business Context sections).
- What: "[Fill in: ...]" placeholders remain.
- Risk: new sessions lack stakeholder/business grounding.
- Fix: fill in with confirmation from Klairs (brain layer -> confirm-first).
- Added: 2026-07-09

## Stale / unverified gap-audit items
- Where: `Solux_Business_Analysis.html` §4 and `CURRENT_STATE.md` notes.
- What: original §4 gap table ("Quotation: Absent", "Study Request: Absent") is known stale; several items (Reporting/Dashboards, AI/Automation, After-Sales, Partner/Distributor, Tender Pipeline) are unverified against the live app repo.
- Risk: readers may treat stale ratings as current.
- Fix: verify against mzouaisolux/solux; keep original as dated historical record with update notes (existing convention).
- Added: 2026-07-09
