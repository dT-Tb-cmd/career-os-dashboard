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

(DST / "index.html").write_text(html_text, encoding="utf-8")
print(f"Wrote index.html ({len(html_text):,} chars, {html_text.count(chr(10))+1:,} lines)")

print("\nDone. Files:")
for f in sorted(DST.glob("*")):
    print(f"  {f.name:20s} {f.stat().st_size:>8,} bytes")
