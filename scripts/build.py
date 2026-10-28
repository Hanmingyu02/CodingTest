"""Build a dependency-free static website."""
from pathlib import Path
import hashlib
import shutil
ROOT = Path(__file__).resolve().parents[1]
DIST = ROOT / 'dist'
DIST.mkdir(exist_ok=True)
for name in ('index.html', 'styles.css', 'lessons.js', 'app.js', 'favicon.svg'):
    shutil.copy2(ROOT / name, DIST / name)
# Change asset URLs whenever their contents change, so browsers do not reuse
# the previous lesson list after a deployment.
html = (ROOT / 'index.html').read_text(encoding='utf-8')
for name in ('styles.css', 'lessons.js', 'app.js', 'favicon.svg'):
    version = hashlib.sha256((ROOT / name).read_bytes()).hexdigest()[:12]
    html = html.replace(f'"./{name}"', f'"./{name}?v={version}"')
(DIST / 'index.html').write_text(html, encoding='utf-8')
(DIST / '.nojekyll').touch()
print(f'Static site built: {DIST}')
