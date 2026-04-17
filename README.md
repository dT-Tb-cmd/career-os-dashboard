# Career OS Dashboard

An interactive career-path dashboard built for the **WGU BS Data Analytics** program — tracking the full arc from **Data Analyst → AI Engineer → AI Architect.**

![Career OS Dashboard](https://img.shields.io/badge/Stage-Phase%201%20%C2%B7%20Public%20Demo-22d3ee)

## What it does

- **Degree progress** — all 43 WGU BSDA courses with CU counts, terms, assessment types (OA / PA), competencies, exam details, and prerequisites
- **Career phase switcher** — flip between Phase 1 (Data Analyst, current), Phase 2 (AI Engineer, next), Phase 3 (AI Architect, destination) and an **Overview** that zooms out to the full career arc
- **Interactive course catalog** — click any course for detailed assessment info, topics, and career-phase fit
- **Velocity forecast** — projects your degree completion date based on current pace
- **Portfolio section** — shipped work, active projects, and proposed future builds, each tagged with the career phase it best fits
- **Roadmap detail panels** — click any target job title, skill, portfolio project, or milestone for pay ranges, estimated learning hours, hyperlinked starter resources, and how-to-measure criteria
- **Certification filter** — surfaces the 4 industry credentials the BSDA program earns (AWS CCP, CompTIA Data+, CompTIA Project+, Udacity Data Analyst Nanodegree)
- **Progress persistence** — milestones you check off save to browser `localStorage`

## Stack

Pure HTML + CSS + vanilla JS + [Chart.js](https://www.chartjs.org/). No build step. No backend. No accounts. Runs on GitHub Pages.

## Structure

```
career-os-dashboard/
├── index.html          # dashboard shell + styles + app logic
├── data.js             # all course / career-phase / portfolio data
├── build-public.py     # regenerates data.js from the private source
└── README.md
```

Editing `data.js` directly is the easiest way to customize the dashboard with your own data.

## Running locally

Clone the repo and open `index.html` in a browser. That's it.

```bash
git clone https://github.com/dT-Tb-cmd/career-os-dashboard.git
cd career-os-dashboard
start index.html   # Windows
open index.html    # macOS
xdg-open index.html # Linux
```

## Roadmap

This is **Phase 1 — public demo** with generic data.

**Phase 2 (planned):** user uploads their own WGU degree plan PDF → dashboard auto-populates client-side, all data stays in their browser, no accounts, no backend, no credential handling.

**Phase 3 (if it gets traction):** proper SaaS with accounts, cross-device sync, real-time progress tracking.

## Context

Built as the career-tracking layer of a larger "second brain" vault system — [see the vault project](https://github.com/dT-Tb-cmd) for the surrounding context. The dashboard itself is a demonstration of architecting a system that spans data analysis, interactive UI, and career-roadmap logic in a single artifact.

## License

MIT
