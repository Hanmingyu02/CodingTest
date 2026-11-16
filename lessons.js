// Add only learning content requested by the user.
window.NOTEBOOK = {
  categories: [
    { id: 'math', title: '수학', english: 'Mathematics', icon: '∑', color: 'blue' },
    { id: 'string', title: '문자열', english: 'Strings', icon: 'Aa', color: 'pink' },
    { id: 'array', title: '배열', english: 'Arrays', icon: '[ ]', color: 'teal' },
    { id: 'sort', title: '정렬', english: 'Sorting', icon: '↕', color: 'purple' },
    { id: 'algorithm', title: '알고리즘', english: 'Algorithms', icon: '◇', color: 'orange' }
  ],
  notes: [
  {
    "id": "string-count",
    "title": "특정 문자 개수 세기",
    "category": "string",
    "description": "count()로 문자열 안에 특정 문자가 몇 번 나오는지 셉니다.",
    "code": "문자열이름.count(\"문자\")",
    "text": "문자열이름에는 대상 문자열을, 큰따옴표 안에는 찾을 문자를 넣습니다.\n등장 횟수를 정수로 반환하며, 찾는 문자가 없으면 0을 반환합니다."
  }
]
};
