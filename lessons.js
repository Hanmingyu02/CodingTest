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
  },
  {
    "id": "array-sort-descending",
    "title": "배열 내림차순 정렬",
    "category": "sort",
    "description": "sort(reverse=True)로 배열을 큰 값부터 작은 값순으로 정렬합니다.",
    "code": "arr.sort(reverse=True)",
    "text": "arr은 정렬할 리스트입니다. reverse=True는 내림차순 정렬을 뜻합니다.\n원본 arr를 직접 바꾸고 반환값은 None이므로, 정렬 후 arr를 그대로 사용합니다."
  },
  {
    "id": "array-index",
    "title": "특정 값의 인덱스 찾기",
    "category": "array",
    "description": "index()로 리스트에서 특정 값이 있는 위치를 찾습니다.",
    "code": "arr.index(값)",
    "text": "arr은 검색할 리스트이며, 인덱스는 0부터 시작합니다.\n같은 값이 여러 개 있으면 처음 나오는 위치를 반환합니다.\n찾는 값이 없으면 ValueError가 발생합니다."
  }
]
};
