"""Run every displayed Python example and compare actual output."""
from pathlib import Path
import json
import subprocess
import sys
ROOT = Path(__file__).resolve().parents[1]
result = subprocess.run(
    ['node', '-e', 'global.window={}; require("./lessons.js"); console.log(JSON.stringify(window.LESSONS));'],
    cwd=ROOT, capture_output=True, text=True, check=True)
lessons = json.loads(result.stdout)
assert len(lessons) == 11
assert len({lesson['id'] for lesson in lessons}) == 11
count = 0
for lesson in lessons:
    examples = [(p['code'], p['output']) for p in lesson['patterns']]
    examples.append((lesson['answer'], lesson['answerOutput']))
    for index, (code, expected) in enumerate(examples, 1):
        actual = subprocess.run([sys.executable, '-I', '-c', code],
                                capture_output=True, text=True, timeout=5, check=True)
        assert actual.stdout.rstrip('\n') == expected, (
            f'{lesson["id"]} example {index}: {actual.stdout!r} != {expected!r}')
        count += 1
print(f'PASS: {count} Python examples across {len(lessons)} lessons')
