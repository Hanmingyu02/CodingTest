"""Verify the user-provided interval-sum formula, including edge cases."""
from pathlib import Path
import json
import subprocess
ROOT = Path(__file__).resolve().parents[1]
result = subprocess.run(
    ['node', '-e', 'global.window={}; require("./lessons.js"); console.log(JSON.stringify(window.LESSONS));'],
    cwd=ROOT, capture_output=True, text=True, check=True)
lessons = json.loads(result.stdout)
assert [lesson['id'] for lesson in lessons] == ['interval-sum']
assert lessons[0]['category'] == '수학'
formula = lessons[0]['patterns'][0]['code']
assert formula == '(a + b) * (abs(a - b) + 1) // 2'
count = 0
for a in range(-10, 11):
    for b in range(-10, 11):
        actual = eval(formula, {'__builtins__': {}, 'abs': abs}, {'a': a, 'b': b})
        expected = sum(range(min(a, b), max(a, b) + 1))
        assert actual == expected, (a, b, actual, expected)
        count += 1
print(f'PASS: interval sum formula matches direct summation in {count} cases')
