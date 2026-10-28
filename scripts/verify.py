"""Verify the user-provided notes without adding public examples."""
from pathlib import Path
import json
import subprocess
ROOT = Path(__file__).resolve().parents[1]
result = subprocess.run(
    ['node', '-e', 'global.window={}; require("./lessons.js"); console.log(JSON.stringify(window.LESSONS));'],
    cwd=ROOT, capture_output=True, text=True, check=True)
lessons = json.loads(result.stdout)
assert [lesson['id'] for lesson in lessons] == ['interval-sum', 'string-to-int']
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

conversion = lessons[1]
assert conversion['category'] == '형 변환'
assert conversion['patterns'][0]['code'] == 'int(s)'
for text, expected in [('12', 12), ('+12', 12), ('-12', -12), ('+0', 0), ('-0', 0)]:
    actual = eval(conversion['patterns'][0]['code'], {'__builtins__': {}, 'int': int}, {'s': text})
    assert actual == expected
print('PASS: int(s) converts positive, negative and zero strings with optional signs')
