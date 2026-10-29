"""Verify the user-provided notes without adding public examples."""
from pathlib import Path
import json
import subprocess
ROOT = Path(__file__).resolve().parents[1]
result = subprocess.run(
    ['node', '-e', 'global.window={}; require("./lessons.js"); console.log(JSON.stringify(window.LESSONS));'],
    cwd=ROOT, capture_output=True, text=True, check=True)
lessons = json.loads(result.stdout)
assert [lesson['id'] for lesson in lessons] == ['interval-sum', 'string-to-int', 'list-insert-append', 'digits-descending', 'perfect-square', 'list-index', 'list-remove-empty', 'matrix-addition', 'string-isdigit', 'list-last-element', 'gcd-lcm', 'math-functions', 'dictionary-last-position']
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

removal = lessons[6]
assert removal['category'] == '배열'
namespace = {}
exec(removal['patterns'][0]['code'], namespace)
for values, expected in [([4, 3, 2, 1], [4, 3, 2]), ([10], [-1]), ([1, 1, 2], [1, 2])]:
    arr = values.copy()
    result = namespace['solution'](arr)
    assert result == expected
    assert result is arr
try:
    namespace['solution']([])
except ValueError:
    pass
else:
    raise AssertionError('Initially empty input must raise ValueError as documented')
print('PASS: minimum removal, first duplicate only, empty-result sentinel and original-list mutation')

matrix_note = lessons[7]
assert matrix_note['category'] == '2차원 배열'
namespace = {}
exec(matrix_note['patterns'][0]['code'], namespace)
from copy import deepcopy
for arr1, arr2, expected in [([[1,2,3],[4,5,6]], [[6,5,4],[3,2,1]], [[7,7,7],[7,7,7]]), ([[1],[2]], [[3],[4]], [[4],[6]]), ([[-1,0]], [[1,-2]], [[0,-2]]), ([], [], []), ([[]], [[]], [[]])]:
    before1, before2 = deepcopy(arr1), deepcopy(arr2)
    result = namespace['solution'](arr1, arr2)
    assert result == expected
    assert arr1 == before1 and arr2 == before2
    assert len({id(row) for row in result}) == len(result)
print('PASS: matrix addition, rectangular shapes, empty inputs, independent rows and unchanged input matrices')

digit_check = lessons[8]
assert digit_check['category'] == '문자열'
namespace = {}
exec(digit_check['patterns'][0]['code'], namespace)
for text, expected in [('1234', True), ('012345', True), ('123', False), ('12345', False), ('1234567', False), ('a234', False), ('+123', False), ('-123', False), ('1.23', False), ('12 3', False), ('', False), ('²²²²', True)]:
    assert namespace['solution'](text) is expected
assert ''.isdigit() is False
try:
    int('²²²²')
except ValueError:
    pass
else:
    raise AssertionError('isdigit does not guarantee int conversion')
print('PASS: isdigit solution checks lengths, non-digit characters, empty strings and Unicode digit semantics')

last_element = lessons[9]
assert last_element['category'] == '배열'
namespace = {}
exec(last_element['patterns'][0]['code'], namespace)
for values, expected in [([], []), ([1], [1]), ([1,1,3,3,0,1,1], [1,3,0,1]), ([0,0,0], [0]), ([-1,-1,2,-1], [-1,2,-1])]:
    arr = values.copy()
    assert namespace['solution'](arr) == expected
    assert arr == values
try:
    [][-1]
except IndexError:
    pass
else:
    raise AssertionError('Last-element access on an empty list must raise IndexError')
print('PASS: last-element comparison removes consecutive duplicates only and handles empty inputs')

import math
gcd_note = lessons[10]
namespace = {}
exec(gcd_note['patterns'][0]['code'], namespace)
for n, m, expected in [(12, 18, [6, 36]), (7, 5, [1, 35]), (0, 5, [5, 0]), (0, 0, [0, 0]), (-12, 18, [6, 36])]:
    assert namespace['solution'](n, m) == expected
reference = lessons[11]
functions = [item['name'] for group in reference['functionGroups'] for item in group['items']]
actual_functions = {name for name in dir(math) if not name.startswith('_') and callable(getattr(math, name))}
assert len(functions) == len(set(functions)) == 56
assert set(functions) == actual_functions
for expression, expected in [('math.isqrt(15)', 3), ('math.ceil(-1.5)', -1), ('math.floor(-1.5)', -2), ('math.trunc(-1.5)', -1), ('math.factorial(0)', 1), ('math.comb(5, 2)', 10), ('math.perm(5, 2)', 20), ('math.prod([2,3,4])', 24), ('math.sumprod([1,2],[3,4])', 11), ('math.fsum([1e16,1,-1e16])', 1.0), ('math.modf(-1.5)', (-0.5,-1.0)), ('math.dist([0,0],[3,4])', 5.0), ('math.isclose(0.1+0.2,0.3)', True)]:
    assert eval(expression, {'math': math}) == expected
assert type(math.pow(2, 3)) is float
assert math.isnan(math.nan) and math.isinf(math.inf)
print('PASS: gcd/lcm edge cases, complete Python 3.12 math reference (56 functions) and representative calculations')

dictionary_note = lessons[12]
assert dictionary_note['category'] == '딕셔너리'
namespace = {}
exec(dictionary_note['patterns'][0]['code'], namespace)
for text, expected in [('', []), ('a', [-1]), ('aaaa', [-1,1,1,1]), ('banana', [-1,-1,-1,2,2,2]), ('abcba', [-1,-1,-1,2,4]), ('가나다가', [-1,-1,-1,3])]:
    assert namespace['solution'](text) == expected
from itertools import product
for length in range(6):
    for chars in product('ab', repeat=length):
        text = ''.join(chars)
        expected = []
        for i, char in enumerate(text):
            previous = text[:i].rfind(char)
            expected.append(-1 if previous == -1 else i-previous)
        assert namespace['solution'](text) == expected
print('PASS: dictionary solution tracks the most recent position, including index zero, repeated characters and empty input')
