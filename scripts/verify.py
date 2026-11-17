"""Validate the five-category notebook data before publishing."""
from pathlib import Path
import json
import subprocess

ROOT = Path(__file__).resolve().parents[1]
result = subprocess.run(
    ['node', '-e', 'global.window={}; require("./lessons.js"); console.log(JSON.stringify(window.NOTEBOOK));'],
    cwd=ROOT, capture_output=True, text=True, check=True)
notebook = json.loads(result.stdout)
categories = notebook['categories']
assert [item['title'] for item in categories] == ['수학', '문자열', '배열', '정렬', '알고리즘']
assert [item['id'] for item in categories] == ['math', 'string', 'array', 'sort', 'algorithm']
notes = notebook['notes']
assert isinstance(notes, list)
assert len({note['id'] for note in notes}) == len(notes)
for note in notes:
    assert note['id'] and note['title']
    assert note['category'] in {item['id'] for item in categories}
    assert isinstance(note['usages'], list) and note['usages']
    for usage in note['usages']:
        assert usage['title'] and usage['meaning'] and usage['application']
        assert isinstance(usage.get('code', ''), str)
    related = note.get('related', [])
    assert isinstance(related, list) and len(related) == len(set(related))
    assert all(target != note['id'] and target in {item['id'] for item in notes} for target in related)
print(f'PASS: exactly five requested categories; {len(notes)} user notes')
