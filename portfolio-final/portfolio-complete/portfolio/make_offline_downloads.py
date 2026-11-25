"""
Run this once (and again whenever you add or replace a PDF in docs/):

    python make_offline_downloads.py

Why: when you open index.html by double-clicking it, Chrome will not save local PDFs
(it opens them in the tab instead). This script packs your PDFs into docs/offline-downloads.js
so the Download buttons can still save them right on the page.
The live website never loads this file, so it costs visitors nothing.
"""
import base64, json, pathlib

root = pathlib.Path(__file__).resolve().parent
files = {}
for pdf in sorted((root / "docs").rglob("*.pdf")):
    files[pdf.relative_to(root).as_posix()] = base64.b64encode(pdf.read_bytes()).decode("ascii")

out = root / "docs" / "offline-downloads.js"
out.write_text("window.OFFLINE_PDFS = " + json.dumps(files) + ";\n", encoding="utf-8")
print(f"Packed {len(files)} PDF(s) into {out.relative_to(root)} ({out.stat().st_size // 1024} KB)")
