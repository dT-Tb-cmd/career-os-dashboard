"""Build the public version of Career OS Dashboard from the private source.

Extracts data constants from the private HTML into a separate data.js,
applies scrubbing patches to remove personal progress details, and
writes a clean index.html that loads data.js as an external script.
"""
import re
from pathlib import Path

SRC = Path("C:/Users/terre/OneDrive/Desktop/wgu-dashboard-designs/4-dark-analyst-hybrid.html")
DST = Path("C:/Users/terre/dev/career-os-dashboard")
DST.mkdir(parents=True, exist_ok=True)

src_text = SRC.read_text(encoding="utf-8")
lines = src_text.split("\n")

# Line ranges (1-indexed inclusive) of data const blocks to extract
RANGES = [
    ("DEGREE_MIN_CU",    649, 649),
    ("courses",          651, 894),
    ("jobDetails",       1156, 1167),
    ("skillDetails",     1169, 1276),
    ("milestoneDetails", 1277, 1289),
    ("careerPhases",     1291, 1374),
    ("portfolio",        1440, 1603),
    ("phaseFitLabels",   1605, 1609),
]

# Extract blocks
blocks = {}
for name, start, end in RANGES:
    blocks[name] = "\n".join(lines[start-1:end])

# -------- Scrubbing: strip personal progress details --------
# Each patch is (pattern, replacement) applied with re.sub
SCRUB = [
    # Strip D426 past attempts entirely (personal exam history)
    (
        re.compile(r",\s*pastAttempts:\[[^\]]*\]", re.DOTALL),
        "",
    ),
    # D426 retake note
    (
        re.compile(r'notes:"Retake rescheduled to Term 4 after Term 2 attempt\.[^"]*",\s*'),
        "",
    ),
    # D269 task submission note
    (
        re.compile(r'Submitted 2026-04-17\. Expecting kickback[^"]*'),
        "Submission in progress",
    ),
    # D199 task notes — genericize
    (
        re.compile(r"\(Nicaragua case study\)"),
        "(case study selection)",
    ),
    (
        re.compile(r"\(Bayview \+ Miami\)"),
        "(scenario + real-world analysis)",
    ),
    (
        re.compile(r'Draft complete, pending Grammarly \+ submit'),
        "Work-in-progress on selected case study",
    ),
    # C963 task draft completion notes — reset to queued
    (
        re.compile(r'status:"done", notes:"Draft complete: [^"]*"'),
        'status:"queued"',
    ),
    # NJ Real Estate — remove the "actual 2026 move" personal detail
    (
        re.compile(r"used to inform the actual 2026 move"),
        "to inform a real relocation decision",
    ),
    # Generic "Portfolio piece with a real audience" — keep, it's fine
]

# Apply scrubbing to each block
for name in blocks:
    text = blocks[name]
    for pattern, replacement in SCRUB:
        text = pattern.sub(replacement, text)
    blocks[name] = text

# -------- Reset all course statuses to not-started (public demo mode) --------
# Public version shows the template, not anyone's actual progress.
courses_text = blocks["courses"]
# Force every course's status to "not_started" regardless of what it was
courses_text = re.sub(r'status:"completed"', 'status:"not_started"', courses_text)
courses_text = re.sub(r'status:"in_progress"', 'status:"not_started"', courses_text)
# Strip all completion dates — those were personal
courses_text = re.sub(r',\s*date:"[0-9-]+"', '', courses_text)
# Task status "done" → "queued" so portfolio tasks read as planned, not done
courses_text = re.sub(r'status:"done"', 'status:"queued"', courses_text)
# Strip completionNote fields — those describe what a student learned, not applicable to not-started
courses_text = re.sub(
    r',\s*\n?\s*completionNote:"[^"]*"',
    '',
    courses_text,
)
blocks["courses"] = courses_text

# -------- Strip Phase 2 + Phase 3 from public demo --------
# Public version focuses on the WGU BSDA program only. Phase 2 (AI/ML Engineer)
# and Phase 3 (AI Architect) are this author's personal career arc — not a
# universal template.

# Trim career-phase fit arrays on portfolio items
portfolio_text = blocks["portfolio"]
# Any combination containing only 2 and/or 3 becomes empty
portfolio_text = re.sub(r"fit:\[2,3\]", "fit:[]", portfolio_text)
portfolio_text = re.sub(r"fit:\[2\]", "fit:[]", portfolio_text)
portfolio_text = re.sub(r"fit:\[3\]", "fit:[]", portfolio_text)
# Combinations with Phase 1 keep only Phase 1
portfolio_text = re.sub(r"fit:\[1,2\]", "fit:[1]", portfolio_text)
portfolio_text = re.sub(r"fit:\[1,3\]", "fit:[1]", portfolio_text)
portfolio_text = re.sub(r"fit:\[1,2,3\]", "fit:[1]", portfolio_text)
blocks["portfolio"] = portfolio_text

# Reduce phaseFitLabels to Phase 1 only
blocks["phaseFitLabels"] = (
    "const phaseFitLabels = {\n"
    '  1: "Data Analyst"\n'
    "};"
)

# Empty out the Phase 2 / Phase 3 career roadmap data — they're never rendered
# in public mode since the buttons are stripped, but empty the data for cleanliness
blocks["careerPhases"] = "const careerPhases = {};"
blocks["jobDetails"] = "const jobDetails = {};"
blocks["skillDetails"] = "const skillDetails = {};"
blocks["milestoneDetails"] = "const milestoneDetails = {};"

# -------- Build data.js --------
data_js = (
    "// data.js — public/demo data for Career OS Dashboard\n"
    "// Edit course catalog, career-phase roadmaps, and portfolio here.\n"
    "// All data below is generic / demo. Personal progress notes stripped.\n\n"
    + blocks["DEGREE_MIN_CU"]
    + "\n\n"
    + blocks["courses"]
    + "\n\n"
    + blocks["jobDetails"]
    + "\n\n"
    + blocks["skillDetails"]
    + "\n\n"
    + blocks["milestoneDetails"]
    + "\n\n"
    + blocks["careerPhases"]
    + "\n\n"
    + blocks["portfolio"]
    + "\n\n"
    + blocks["phaseFitLabels"]
    + "\n"
)

(DST / "data.js").write_text(data_js, encoding="utf-8")
print(f"Wrote data.js ({len(data_js):,} chars)")

# -------- Build index.html with data blocks removed --------
# Collect line indices to remove (all 1-indexed inclusive ranges)
remove_set = set()
for name, start, end in RANGES:
    for line_num in range(start, end + 1):
        remove_set.add(line_num)

# Build filtered HTML
output_lines = []
for i, line in enumerate(lines, start=1):
    if i in remove_set:
        continue
    # Insert data.js script tag right before the inline <script> at line 648
    if i == 648 and line.strip() == "<script>":
        output_lines.append('<script src="data.js"></script>')
    output_lines.append(line)

# Also update the student display for demo mode
html_text = "\n".join(output_lines)
html_text = html_text.replace(
    "<div>STUDENT: <b>Student A</b></div>",
    '<div>STUDENT: <b>Demo Student</b></div>',
)
html_text = html_text.replace(
    "<div>SYNCED: <b>2026-04-17</b></div>",
    '<div>SYNCED: <b>Live Demo</b></div>',
)

# -------- Strip Phase 2 + Phase 3 UI from HTML --------
# Remove the phase buttons for AI/ML Engineer and AI Architect
html_text = re.sub(
    r'\s*<button class="phase-btn" data-phase="2">.*?</button>',
    "",
    html_text,
    flags=re.DOTALL,
)
html_text = re.sub(
    r'\s*<button class="phase-btn" data-phase="3">.*?</button>',
    "",
    html_text,
    flags=re.DOTALL,
)
# Remove the phase content containers
html_text = html_text.replace('<div class="roadmap" id="phase2-content"></div>', "")
html_text = html_text.replace('<div class="roadmap" id="phase3-content"></div>', "")

# Simplify the Overview page — strip the career-arc framing
# Hero: narrow to WGU program focus
html_text = html_text.replace(
    "The Career Arc · Army NCO → AI Architect",
    "WGU Bachelor of Science · Data Analytics",
)
html_text = html_text.replace(
    'Army NCO → Data Analyst → AI Engineer → AI Architect',
    'Interactive degree progress dashboard',
)
html_text = re.sub(
    r"<p>Three phases, roughly six years.*?destination\.</p>",
    "<p>Interactive dashboard for tracking progress through the 43-course Bachelor of Science in Data Analytics program at Western Governors University. Drill into any course for competencies, exam details, and prerequisites.</p>",
    html_text,
    flags=re.DOTALL,
)
html_text = html_text.replace(
    "2026 Data Analyst (current) → ~2032 AI Architect (destination)",
    "WGU Bachelor of Science · Data Analytics · 120 CU required",
)

# Simplify the rollup stats row for public demo
html_text = re.sub(
    r"<div>Three phases, roughly six years.*?destination.</div>",
    "",
    html_text,
    flags=re.DOTALL,
)

# -------- Guard forecast chart against empty timeline --------
# With zero completed courses, timeline[0] is undefined and new Date(undefined)
# would produce NaN everywhere downstream. Wrap the forecast block in a guard.
html_text = html_text.replace(
    "const firstDate = new Date(timeline[0].x);",
    "const hasHistory = timeline.length >= 2;\n"
    "const firstDate = hasHistory ? new Date(timeline[0].x) : new Date();",
)
html_text = html_text.replace(
    "// Build forecast dataset: starts from last actual point, extends to 120 CU",
    "// Build forecast dataset: starts from last actual point, extends to 120 CU\n"
    "// (public demo: if no completed courses, forecast is hidden)",
)
html_text = html_text.replace(
    "const forecastPoints = [",
    "const forecastPoints = hasHistory ? [",
)
html_text = html_text.replace(
    '{x: forecastStr, y: DEGREE_CU}\n];',
    '{x: forecastStr, y: DEGREE_CU}\n] : [];',
)
# Gate the forecast note text on hasHistory
html_text = html_text.replace(
    "forecastNote.innerHTML = `At current pace",
    "forecastNote.innerHTML = hasHistory ? `At current pace"
)
html_text = html_text.replace(
    "months from last completed course.`;\n      forecastNote.style.display = 'block';",
    "months from last completed course.` : `Complete a few courses to unlock a forecast.`;\n      forecastNote.style.display = 'block';"
)

# Strip the entire phase-cards section from Overview (all 3 phase cards + container)
# With Phase 2/3 gone, showing a single Phase 1 card alone is awkward; drop the whole row
html_text = re.sub(
    r'<div class="phase-cards">.*?</div>\s*</div>\s*</div>',
    "",
    html_text,
    count=1,
    flags=re.DOTALL,
)

# Strip the Through-Line and Destination cards (they reference Army → AI Architect arc)
html_text = re.sub(
    r'<div class="card">\s*<div class="roadmap-section">\s*<div class="roadmap-section-title">The Through-Line</div>.*?</div>\s*</div>\s*</div>',
    "",
    html_text,
    flags=re.DOTALL,
)
html_text = re.sub(
    r'<div class="card" style="background:linear-gradient.*?roadmap-section-title">Destination</div>.*?</div>\s*</div>\s*</div>',
    "",
    html_text,
    flags=re.DOTALL,
)

# Replace rollup-stats labels with BSDA-program focused stats
html_text = html_text.replace(
    "<div class=\"arc-stat-num\">3</div>\n        <div class=\"arc-stat-label\">Career Phases</div>",
    "<div class=\"arc-stat-num\">43</div>\n        <div class=\"arc-stat-label\">Courses</div>",
)
html_text = re.sub(
    r'<div class="arc-stat-num">~\$\{totalSkills\}</div>\s*<div class="arc-stat-label">Skills to Master</div>',
    '<div class="arc-stat-num">${DEGREE_MIN_CU}</div>\n        <div class="arc-stat-label">CU to Graduate</div>',
    html_text,
)
html_text = re.sub(
    r'<div class="arc-stat-num">\$\{totalCerts\}</div>\s*<div class="arc-stat-label">Industry Certs</div>',
    '<div class="arc-stat-num">4</div>\n        <div class="arc-stat-label">Industry Certs</div>',
    html_text,
)
html_text = re.sub(
    r'<div class="arc-stat-num">\$\{totalMilestones\}</div>\s*<div class="arc-stat-label">Milestones</div>',
    '<div class="arc-stat-num">6</div>\n        <div class="arc-stat-label">Terms (plan)</div>',
    html_text,
)

# Replace the "Army NCO → AI Architect" hero text in Overview (appears once more in hero h2)
html_text = html_text.replace(
    '<h2>The Career Arc · Army NCO → AI Architect</h2>',
    '<h2>WGU Bachelor of Science · Data Analytics</h2>',
)

# Generalize the portfolio intro text
html_text = html_text.replace(
    'Real shipped work across three eras: active WGU portfolio pieces, Army systems-integration and leadership track, and the infrastructure that runs this dashboard.',
    'Example portfolio pieces for a WGU BS Data Analytics student — active builds, shipped work, and proposed next projects. Click any card for detail.',
)

# Strip Phase 2/3 titleMap entries (dead code after buttons removed)
html_text = re.sub(
    r"'2': \['Career Roadmap · Phase 2',[^\]]+\],\s*",
    "",
    html_text,
)
html_text = re.sub(
    r"'3': \['Career Roadmap · Phase 3',[^\]]+\],?\s*",
    "",
    html_text,
)

# Also strip lingering "Army NCO → AI Architect" in the page-title swap mapping
html_text = html_text.replace(
    "'Army NCO → Data Analyst → AI Engineer → AI Architect'",
    "'Interactive degree progress dashboard'",
)

(DST / "index.html").write_text(html_text, encoding="utf-8")
print(f"Wrote index.html ({len(html_text):,} chars, {html_text.count(chr(10))+1:,} lines)")

print("\nDone. Files:")
for f in sorted(DST.glob("*")):
    print(f"  {f.name:20s} {f.stat().st_size:>8,} bytes")
