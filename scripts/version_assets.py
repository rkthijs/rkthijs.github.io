"""Refresh the cache versions of shared assets in the site's HTML pages."""

from hashlib import sha256
from pathlib import Path
import re


root = Path(__file__).resolve().parent.parent
versions = {
    asset: sha256((root / asset).read_bytes()).hexdigest()[:12]
    for asset in ("style.css", "theme.js")
}
reference = re.compile(
    r'''(?P<quote>["'])(?P<asset>style\.css|theme\.js)(?:\?v=[^"']*)?(?P=quote)'''
)


def versioned_reference(match):
    quote, asset = match.group("quote", "asset")
    return f"{quote}{asset}?v={versions[asset]}{quote}"


for page in sorted(root.glob("*.html")):
    original = page.read_text()
    updated = reference.sub(versioned_reference, original)
    if updated != original:
        page.write_text(updated)
        print(f"Updated {page.name}")
