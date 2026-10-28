"""Build a dependency-free static website."""
from pathlib import Path
import shutil
ROOT = Path(__file__).resolve().parents[1]
DIST = ROOT / 'dist'
DIST.mkdir(exist_ok=True)
for name in ('index.html', 'styles.css', 'lessons.js', 'app.js', 'favicon.svg'):
    shutil.copy2(ROOT / name, DIST / name)
(DIST / '.nojekyll').touch()
print(f'Static site built: {DIST}')
