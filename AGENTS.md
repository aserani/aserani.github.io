# AGENTS.md

## Repository purpose

This repository contains the personal academic website of Andrea Serani.

It is a personal scientific website, not the website of the MAO Research Group.

The site should communicate Andrea Serani's individual:
- scientific identity;
- research programme;
- methodological contributions;
- leadership;
- selected research outputs;
- teaching and mentoring;
- talks and professional activities.

The separate MAO Research Group website is:
https://cnr-inm-mao.github.io/

Do not modify the MAO repository from this project.

---

## Scientific positioning

Andrea Serani is:

- Research Scientist at CNR-INM;
- Adjunct Professor at the University of Bologna;
- Visiting Scholar at the University of Michigan.

Main research areas:

- computational engineering design;
- simulation-based design optimization;
- design-space learning and dimensionality reduction;
- physics-aware machine learning;
- surrogate and multi-fidelity modelling;
- optimization under uncertainty;
- computational fluid dynamics;
- multidisciplinary engineering design.

Andrea Serani is the lead developer of Parametric Model Embedding (PME).

The methodological trajectory is:

PME
→ physics-informed PME
→ physics-driven PME
→ nonlinear PME
→ nonlinear design-space / design-manifold research

Do not invent scientific claims, affiliations, roles, awards, publications,
metrics, collaborators, funding relationships, or student supervision.

When information is uncertain, preserve existing verified content rather than
guessing.

---

## Relationship with MAO

Treat the two websites differently.

### Personal website
Use for:
- Andrea's research vision;
- intellectual and methodological trajectory;
- PME research lineage;
- selected publications;
- invited talks;
- teaching;
- mentoring;
- awards and service;
- personal academic profile.

### MAO website
Use for:
- group people;
- institutional projects;
- group software;
- datasets;
- collective publications;
- job and research opportunities.

Cross-link to MAO when useful instead of duplicating large amounts of
group-level content.

---

## Design principles

The site should feel like the academic website of an emerging international PI
in computational engineering.

Prefer:
- academic and contemporary design;
- strong typography;
- generous whitespace;
- clear hierarchy;
- research-first presentation;
- restrained visual language;
- responsive and accessible layouts;
- maintainable implementation;
- fast loading.

Avoid:
- startup/marketing aesthetics;
- generic AI imagery;
- excessive animations;
- visual clutter;
- unnecessary framework migrations;
- rewriting working components merely for novelty.

Preserve useful elements of the existing visual identity where possible.

---

## Technical principles

This is a GitHub Pages / Jekyll website.

Prefer improving the existing architecture instead of migrating frameworks
unless there is a compelling technical reason.

Before making structural changes:
1. inspect existing layouts, includes and styles;
2. preserve working URLs where reasonably possible;
3. preserve useful existing content and assets;
4. check whether content is reused elsewhere.

Keep shared components in `_includes` / `_layouts` where appropriate.

Prefer simple HTML, Liquid and CSS over unnecessary JavaScript.

Avoid introducing large dependencies for small UI features.

---

## Local development

Determine and maintain a reliable local preview workflow for macOS.

Prefer repository-local dependency configuration.

Do not make unnecessary system-wide changes.

Before considering a substantial task complete:
- build the Jekyll site;
- check for build errors;
- check internal links where practical;
- inspect responsive behavior;
- inspect obvious accessibility issues.

Document the local preview command in README.md.

---

## Git workflow

Development branch:

`redesign-2026`

Do not:
- push without explicit user instruction;
- merge into `gh-pages`;
- force-push;
- rewrite remote history.

Local commits are allowed.

Use small coherent commits with descriptive messages.

Examples:

- `chore: document site architecture`
- `refactor: simplify shared layout`
- `feat: redesign research homepage`
- `feat: add PME research page`
- `docs: update local development workflow`

Keep the working tree understandable after each milestone.

---

## Content preservation

Do not permanently discard substantive existing content merely because it does
not belong on the homepage.

Long autobiographical or personal content may be moved to an About or
Beyond Research section.

Preserve:
- publication data;
- professional links;
- photographs;
- institutional affiliations;
- research history;
- talks;
- mentoring information;
- useful inbound URLs.

---

## Writing style

Use concise international academic English.

Prefer concrete scientific language over promotional claims.

Avoid:
- hype;
- vague AI terminology;
- exaggerated leadership claims;
- marketing language.

When describing PME, use:

"lead developer of Parametric Model Embedding (PME)"

unless a more specific verified formulation is available in the repository.

Use "modelling" or "modeling" consistently within a page; preserve established
site conventions where possible.

---

## Working autonomy

Work autonomously on routine implementation decisions.

Do not ask for confirmation for:
- routine refactoring;
- CSS/layout choices;
- accessibility fixes;
- build fixes;
- obvious cleanup;
- moving content to a more appropriate page;
- local commits.

Ask only when:
- data may be destroyed;
- credentials are needed;
- a scientific/factual statement is genuinely ambiguous;
- a change would materially alter the intended scientific positioning.
