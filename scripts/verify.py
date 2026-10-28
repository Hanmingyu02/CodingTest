"""Verify the user-provided notes without adding public examples."""
from pathlib import Path
import json
import subprocess
ROOT = Path(__file__).resolve().parents[1]
result = subprocess.run(
    ['node', '-e', 'global.window={}; require("./lessons.js"); console.log(JSON.stringify(window.LESSONS));'],
    cwd=ROOT, capture_output=True, text=True, check=True)
lessons = json.loads(result.stdout)
assert [lesson['id'] for lesson in lessons] == ['interval-sum', 'string-to-int', 'list-insert-append', 'digits-descending', 'perfect-square', 'list-index']
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

addition = lessons[2]
assert addition['category'] == '배열'
for values in ([], [2, 3]):
    front = {'배열이름': values.copy(), '값': 1}
    exec(addition['patterns'][0]['code'], {'__builtins__': {}}, front)
    assert front['배열이름'] == [1] + values
    back = {'배열이름': values.copy(), '값': 1}
    exec(addition['patterns'][1]['code'], {'__builtins__': {}}, back)
    assert back['배열이름'] == values + [1]
print('PASS: insert(0, 값) prepends and append(값) appends to empty and nonempty lists')

digits = lessons[3]
assert digits['category'] == '정렬'
namespace = {}
exec(digits['patterns'][0]['code'], namespace)
for number, expected in [(118372, 873211), (0, 0), (1020, 2100), (333, 333), (7, 7)]:
    assert namespace['solution'](number) == expected
print('PASS: user digit-sorting solution handles zero, repeated digits and embedded zeros')

square = lessons[4]
assert square['category'] == '수학'
assert len(square['patterns']) == 2
solutions = []
for pattern in square['patterns']:
    namespace = {}
    exec(pattern['code'], namespace)
    solutions.append(namespace['solution'])
for number, expected in [(0, 1), (1, 4), (2, -1), (9, 16), (15, -1), (16, 25), (121, 144)]:
    for solution in solutions:
        assert solution(number) == expected
assert type(solutions[0](9)) is float
assert type(solutions[1](9)) is int
root = 10 ** 100
assert solutions[1](root * root) == (root + 1) ** 2
assert solutions[1](root * root - 1) == -1
assert solutions[1](root * root + 1) == -1
print('PASS: both square-root solutions; return types and exact isqrt checks for large integers')

index_note = lessons[5]
assert index_note['category'] == '배열'
namespace = {}
exec(index_note['patterns'][0]['code'], namespace)
for seoul, expected in [(['Kim'], '김서방은 0에 있다'), (['Jane', 'Kim'], '김서방은 1에 있다'), (['Kim', 'Kim'], '김서방은 0에 있다')]:
    assert namespace['solution'](seoul) == expected
try:
    namespace['solution'](['Jane'])
except ValueError:
    pass
else:
    raise AssertionError('Missing value must raise ValueError as documented')
print('PASS: list.index solution uses zero-based first-match position and raises ValueError when missing')
