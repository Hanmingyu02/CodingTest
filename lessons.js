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
  },
  {
    "id": "string-ord-chr",
    "title": "문자와 아스키코드 변환",
    "category": "string",
    "description": "ord()로 문자를 숫자 코드로, chr()로 숫자 코드를 문자로 바꿉니다.",
    "code": "# 문자 → 아스키코드\nprint(ord('A'))  # 65\nprint(ord('a'))  # 97\nprint(ord('0'))  # 48\n\n# 아스키코드 → 문자\nprint(chr(65))  # A\nprint(chr(97))  # a\nprint(chr(48))  # 0",
    "text": "ord()에는 문자 하나를, chr()에는 정수 코드를 넣습니다.\n파이썬에서는 유니코드 코드 포인트를 사용하며, 위 영문자·숫자의 코드는 아스키코드와 같습니다."
  },
  {
    "id": "array-remove-pop",
    "title": "배열 요소 제거: remove()와 pop()",
    "category": "array",
    "description": "remove()는 값으로, pop()은 인덱스로 요소를 제거합니다.",
    "code": "arr.remove(값)\narr.pop(인덱스)\narr.pop()",
    "text": "remove(값): 처음 일치하는 값 하나를 제거합니다. 반환값은 None이며, 값이 없으면 ValueError가 발생합니다.\npop(인덱스): 해당 위치의 요소를 제거하고 그 값을 반환합니다. 인덱스는 0부터 시작합니다.\npop(): 인덱스를 생략하면 마지막 요소를 꺼냅니다.\n두 메서드 모두 원본 리스트를 바꿉니다. 빈 리스트나 범위를 벗어난 인덱스에 pop()을 사용하면 IndexError가 발생합니다."
  },
  {
    "id": "string-slice",
    "title": "문자열 슬라이싱 [0:2]",
    "category": "string",
    "description": "[0:2]로 인덱스 0과 1의 문자, 즉 앞의 두 글자를 가져옵니다.",
    "code": "문자열이름[0:2]",
    "text": "문자열이름[시작:끝] 형태로 원하는 부분을 가져옵니다.\n시작 인덱스는 포함하고 끝 인덱스는 포함하지 않습니다. 따라서 [0:2]에는 인덱스 2의 문자가 들어가지 않습니다.\n원본 문자열은 바뀌지 않습니다."
  },
  {
    "id": "integer-floor-division",
    "title": "정수 나누기 //",
    "category": "math",
    "description": "//로 나눗셈 결과를 내림한 몫을 구합니다.",
    "code": "a // b",
    "text": "a를 b로 나눈 결과를 내림합니다. 정수끼리 계산하면 정수(int)를 반환합니다.\n음수인 경우에도 더 작은 정수 방향으로 내립니다.\nb가 0이면 ZeroDivisionError가 발생합니다."
  },
  {
    "id": "divisor-count-sqrt",
    "title": "제곱근으로 약수 개수 구하기",
    "category": "math",
    "description": "제곱근까지만 확인하고 약수를 두 개씩 셉니다.",
    "code": "count = 0\nfor j in range(1, int(n ** 0.5) + 1):\n    if n % j == 0:\n        count += 2\n\nif int(n ** 0.5) ** 2 == n:\n    count -= 1",
    "text": "n은 양의 정수입니다. j가 약수이면 n // j도 약수이므로, 제곱근까지만 검사하며 2개씩 셉니다.\n완전제곱수는 제곱근이 자기 자신과 짝을 이루므로 중복된 1개를 빼줍니다.\n계산이 끝난 count가 n의 약수 개수입니다."
  },
  {
    "id": "string-sort-descending",
    "title": "문자열 내림차순 정렬",
    "category": "sort",
    "description": "sorted()로 문자를 내림차순 정렬하고 join()으로 문자열로 합칩니다.",
    "code": "''.join(sorted(s, reverse=True))",
    "text": "s는 정렬할 문자열입니다. sorted(s, reverse=True)는 문자를 내림차순으로 정렬한 새 리스트를 만듭니다.\n''.join(...)은 정렬된 문자들을 구분자 없이 이어 붙여 문자열로 만듭니다.\n원본 문자열은 바뀌지 않으며, 문자 코드 기준으로 정렬됩니다."
  },
  {
    "id": "array-last-element",
    "title": "배열의 마지막 요소 확인",
    "category": "array",
    "description": "[-1]로 리스트의 마지막 요소를 가져옵니다.",
    "code": "배열이름[-1]",
    "text": "-1은 뒤에서 첫 번째, 즉 마지막 요소의 인덱스입니다.\n마지막 값을 읽기만 하며 원본 리스트는 바뀌지 않습니다.\n빈 리스트에서 사용하면 IndexError가 발생합니다."
  },
  {
    "id": "queue-index-priority",
    "title": "큐에서 인덱스 추적과 우선순위 비교",
    "category": "algorithm",
    "description": "(우선순위, 원래 인덱스)를 큐에 저장하고 if Q와 max(Q)[0]으로 남은 항목을 확인합니다.",
    "code": "Q = []\nfor i in range(len(priorities)):\n    Q.append((priorities[i], i))\n\nwhile Q:\n    priority, idx = Q.pop(0)\n    if Q and priority < max(Q)[0]:\n        Q.append((priority, idx))",
    "text": "큐 사용: 먼저 들어온 항목을 먼저 꺼내는 구조입니다. 이 코드는 리스트를 큐처럼 사용하며, append()로 맨 뒤에 넣고 pop(0)으로 맨 앞 항목을 꺼냅니다. 다시 넣지 않은 항목은 큐에서 빠진 상태로 처리됩니다.\n\n인덱스 추적: (priorities[i], i)는 (우선순위, 원래 인덱스) 튜플입니다. priority, idx = Q.pop(0)은 꺼낸 튜플을 두 변수에 나누어 담습니다. 큐의 순서가 바뀌어도 idx는 원래 위치이므로 idx == location으로 목표 항목인지 확인할 수 있습니다.\n\nif Q / while Q: Q에 요소가 있으면 참, 빈 리스트이면 거짓입니다. while Q는 큐가 빌 때까지 반복합니다.\n같은 방식으로 gotruck and gotruck[0][1] >= bridge_length는 gotruck이 비어 있지 않을 때만 맨 앞 트럭의 경과 시간을 비교합니다. 빈 리스트이면 뒤의 인덱스 접근을 건너뛰어 IndexError를 피합니다.\n\nmax(Q)[0]: max(Q)는 우선순위가 가장 큰 튜플을 찾고, [0]은 그 튜플의 첫 번째 값인 우선순위를 가져옵니다. 우선순위가 같으면 두 번째 값인 인덱스도 비교하지만, 가져오는 우선순위는 같습니다. Q의 첫 항목을 의미하는 것은 아닙니다.\n\nif Q and priority < max(Q)[0]: 방금 꺼낸 항목보다 높은 우선순위가 남아 있는지 검사합니다. and는 앞 조건이 거짓이면 뒤를 계산하지 않으므로, 빈 큐에서 max(Q)를 호출해 생기는 ValueError를 피합니다.\n\nQ.append((priority, idx)): 더 높은 우선순위가 남아 있으면 원래 인덱스를 그대로 유지한 채 맨 뒤로 보냅니다. 같은 우선순위만 남아 있으면 뒤로 보내지 않습니다."
  },
  {
    "id": "nested-list-access-sum",
    "title": "2차원 리스트 접근과 값의 합계",
    "category": "array",
    "description": "[행][열]로 저장된 값에 접근하고, 각 행의 특정 값을 모아 합계를 구합니다.",
    "code": "gotruck[0][0]  # 첫 번째 트럭의 무게\ngotruck[0][1]  # 첫 번째 트럭의 경과 시간\ngotruck[i][1] += 1  # i번째 트럭의 경과 시간 증가\n\nsumnum = sum([truck[0] for truck in gotruck])",
    "text": "자료 구조: gotruck에는 트럭별로 [무게, 경과 시간] 리스트를 저장합니다. 바깥 인덱스는 트럭을, 안쪽 인덱스는 그 트럭의 정보를 고릅니다.\n\ngotruck[0][1]: 먼저 gotruck[0]으로 맨 앞 트럭을 선택하고, 그 안의 [1]로 두 번째 값인 경과 시간을 가져옵니다. gotruck[i][1] += 1은 해당 트럭의 경과 시간을 1 늘립니다.\n\n리스트 컴프리헨션: [truck[0] for truck in gotruck]은 각 트럭의 첫 번째 값인 무게를 모은 새 리스트입니다. 여기에 sum()을 적용하면 다리 위 전체 무게가 됩니다. gotruck이 비었으면 합계는 0입니다.\n\n인덱스 접근은 해당 트럭이 있을 때 사용합니다. 빈 리스트를 먼저 확인하는 gotruck and ...의 동작은 아래 기존 큐 노트에서 함께 설명합니다.",
    "related": [
      "queue-index-priority"
    ]
  },
  {
    "id": "bridge-time-simulation",
    "title": "시간 단위 시뮬레이션과 큐",
    "category": "algorithm",
    "description": "시간을 한 단계씩 진행하며 이동·퇴장·진입 순서로 상태를 갱신합니다.",
    "code": "time += 1\nfor truck in gotruck:\n    truck[1] += 1\n\nif gotruck and gotruck[0][1] >= bridge_length:\n    struck.append(gotruck.pop(0))\n\nsumnum = sum([truck[0] for truck in gotruck])\nif truck_weights and sumnum + truck_weights[0] <= weight:\n    gotruck.append([truck_weights.pop(0), 0])",
    "text": "알고리즘: 시간을 1씩 늘리며 실제 상황의 상태 변화를 그대로 구현하는 시뮬레이션입니다. 트럭은 입력 순서를 유지하며 큐 방식으로 이동합니다. 코드는 한 초 동안의 상태 갱신 부분만 정리했습니다.\n\n상태 구분: truck_weights는 대기 중인 트럭, gotruck은 다리 위 트럭과 각 경과 시간, struck은 통과한 트럭을 저장합니다.\n\n한 초의 처리 순서: ① 다리 위 트럭의 시간 증가 → ② 맨 앞 트럭의 퇴장 확인 → ③ 남은 무게 합산 → ④ 다음 트럭의 진입 확인. 퇴장을 먼저 반영해야 빠진 무게만큼 새 트럭을 올릴 수 있습니다.\n\n경과 시간: 진입할 때 0으로 저장하고 다음 초부터 증가시킵니다. 맨 앞 트럭의 경과 시간이 bridge_length 이상이면 다리에서 내립니다. 매초 새 트럭은 최대 한 대만 진입합니다.\n\n종료 조건: 처음 트럭 수를 저장해 두고, 통과한 트럭 수가 그 수와 같아질 때까지 반복합니다. 대기 트럭이 없어도 다리 위 트럭이 모두 나갈 때까지 시간을 진행해야 합니다.\n\n이미 정리한 큐의 삽입·꺼내기와 빈 큐 검사, 새로 정리한 중첩 인덱스와 합계는 아래 관련 노트로 연결했습니다.",
    "related": [
      "nested-list-access-sum",
      "queue-index-priority"
    ]
  }
]
};
