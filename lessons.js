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
    "usages": [
      {
        "title": "특정 문자 개수 세기",
        "code": "문자열이름.count(\"문자\")",
        "meaning": "찾을 문자를 괄호에 넣으면 등장 횟수를 정수로 반환합니다. 해당 문자가 없으면 0입니다.",
        "application": "문자열에서 특정 문자가 몇 번 나오는지 확인할 때 사용합니다."
      }
    ]
  },
  {
    "id": "array-sort-descending",
    "title": "배열 내림차순 정렬",
    "category": "sort",
    "description": "sort(reverse=True)로 배열을 큰 값부터 작은 값순으로 정렬합니다.",
    "usages": [
      {
        "title": "리스트를 내림차순으로 정렬",
        "code": "arr.sort(reverse=True)",
        "meaning": "arr을 큰 값부터 작은 값순으로 직접 정렬합니다. 반환값은 None이므로 정렬한 뒤 arr을 그대로 사용합니다.",
        "application": "원본 리스트 자체의 순서를 내림차순으로 바꾸고 싶을 때 사용합니다."
      }
    ]
  },
  {
    "id": "array-index",
    "title": "특정 값의 인덱스 찾기",
    "category": "array",
    "description": "index()로 리스트에서 특정 값이 있는 위치를 찾습니다.",
    "usages": [
      {
        "title": "값이 있는 위치 찾기",
        "code": "arr.index(값)",
        "meaning": "0부터 시작하는 인덱스를 반환합니다. 같은 값이 여러 개면 처음 위치를 찾고, 값이 없으면 ValueError가 발생합니다.",
        "application": "특정 값이 리스트의 몇 번째 위치에 있는지 알아야 할 때 사용합니다."
      }
    ]
  },
  {
    "id": "string-ord-chr",
    "title": "문자와 아스키코드 변환",
    "category": "string",
    "description": "ord()로 문자를 숫자 코드로, chr()로 숫자 코드를 문자로 바꿉니다.",
    "usages": [
      {
        "title": "문자를 숫자 코드로 변환",
        "code": "ord(문자)",
        "meaning": "문자 하나의 유니코드 코드 포인트를 정수로 반환합니다. ASCII 범위에서 A는 65, a는 97, 0은 48입니다.",
        "application": "문자의 코드값으로 계산하거나 문자를 일정한 간격으로 이동시킬 때 사용합니다."
      },
      {
        "title": "숫자 코드를 문자로 변환",
        "code": "chr(코드)",
        "meaning": "정수 코드를 문자 하나로 바꿉니다. 65는 A, 97은 a, 48은 문자 0으로 변환됩니다.",
        "application": "문자 코드로 계산한 결과를 다시 문자열에 넣을 때 사용합니다."
      }
    ]
  },
  {
    "id": "array-remove-pop",
    "title": "배열 요소 제거: remove()와 pop()",
    "category": "array",
    "description": "remove()는 값으로, pop()은 인덱스로 요소를 제거합니다.",
    "usages": [
      {
        "title": "값으로 요소 제거",
        "code": "arr.remove(값)",
        "meaning": "처음 일치하는 값 하나를 원본 리스트에서 제거하고 None을 반환합니다. 값이 없으면 ValueError가 발생합니다.",
        "application": "삭제할 요소의 값은 알고 있지만 인덱스를 따로 찾을 필요가 없을 때 사용합니다."
      },
      {
        "title": "위치로 요소 꺼내기",
        "code": "arr.pop(인덱스)",
        "meaning": "지정한 위치의 요소를 제거하고 그 값을 반환합니다. 인덱스는 0부터 시작하며, 범위를 벗어나면 IndexError가 발생합니다.",
        "application": "특정 위치의 값을 꺼내서 사용하면서 리스트에서도 제거할 때 사용합니다."
      },
      {
        "title": "마지막 요소 꺼내기",
        "code": "arr.pop()",
        "meaning": "인덱스를 생략하면 마지막 요소를 제거하고 반환합니다. 빈 리스트에서는 IndexError가 발생합니다.",
        "application": "맨 뒤의 요소부터 하나씩 꺼내 처리할 때 사용합니다."
      }
    ]
  },
  {
    "id": "string-slice",
    "title": "문자열 슬라이싱 [0:2]",
    "category": "string",
    "description": "[0:2]로 인덱스 0과 1의 문자, 즉 앞의 두 글자를 가져옵니다.",
    "usages": [
      {
        "title": "문자열의 일부 가져오기",
        "code": "문자열이름[0:2]",
        "meaning": "[시작:끝]에서 시작은 포함하고 끝은 제외합니다. [0:2]는 인덱스 0과 1의 문자를 가져오며 원본은 바뀌지 않습니다.",
        "application": "문자열 앞부분이나 지정한 범위만 잘라서 사용할 때 활용합니다."
      }
    ]
  },
  {
    "id": "integer-floor-division",
    "title": "정수 나누기 //",
    "category": "math",
    "description": "//로 나눗셈 결과를 내림한 몫을 구합니다.",
    "usages": [
      {
        "title": "나눗셈 결과를 내림",
        "code": "a // b",
        "meaning": "정수끼리 계산하면 내림한 정수 몫을 반환합니다. 음수도 더 작은 정수 방향으로 내리며, b가 0이면 ZeroDivisionError가 발생합니다.",
        "application": "나눗셈의 몫을 정수로 구해야 할 때 사용합니다."
      }
    ]
  },
  {
    "id": "divisor-count-sqrt",
    "title": "제곱근으로 약수 개수 구하기",
    "category": "math",
    "description": "제곱근까지만 확인하고 약수를 두 개씩 셉니다.",
    "usages": [
      {
        "title": "검사 범위를 제곱근까지 제한",
        "code": "range(1, int(n ** 0.5) + 1)",
        "meaning": "양의 정수 n에서 1부터 제곱근의 정수 부분까지 검사하는 범위입니다. range의 끝값은 제외되므로 1을 더합니다.",
        "application": "약수를 1부터 n까지 전부 검사하는 대신, 약수 쌍을 이용해 확인할 범위를 줄일 때 사용합니다."
      },
      {
        "title": "약수를 쌍으로 세기",
        "code": "if n % j == 0:\n    count += 2",
        "meaning": "count를 0으로 준비한 뒤 사용합니다. j가 약수이면 n // j도 약수이므로 2개씩 셉니다.",
        "application": "제곱근 이하의 j를 검사하면서 전체 약수 개수를 누적할 때 사용합니다."
      },
      {
        "title": "완전제곱수의 중복 보정",
        "code": "if int(n ** 0.5) ** 2 == n:\n    count -= 1",
        "meaning": "약수 쌍 계산을 마친 뒤 사용합니다. 완전제곱수의 제곱근은 자기 자신과 짝을 이루므로 중복된 1개를 뺍니다.",
        "application": "약수 개수를 쌍으로 센 결과에서 같은 약수가 두 번 포함된 경우를 보정할 때 사용합니다."
      }
    ]
  },
  {
    "id": "string-sort-descending",
    "title": "문자열 내림차순 정렬",
    "category": "sort",
    "description": "sorted()로 문자를 내림차순 정렬하고 join()으로 문자열로 합칩니다.",
    "usages": [
      {
        "title": "문자 정렬 후 문자열로 합치기",
        "code": "''.join(sorted(s, reverse=True))",
        "meaning": "sorted()는 문자를 코드값 기준으로 내림차순 정렬한 새 리스트를 만들고, join()은 구분자 없이 합칩니다. 원본 s는 바뀌지 않습니다.",
        "application": "문자열의 문자들을 큰 순서대로 재배치한 새 문자열이 필요할 때 사용합니다."
      }
    ]
  },
  {
    "id": "array-last-element",
    "title": "배열의 마지막 요소 확인",
    "category": "array",
    "description": "[-1]로 리스트의 마지막 요소를 가져옵니다.",
    "usages": [
      {
        "title": "마지막 요소 읽기",
        "code": "배열이름[-1]",
        "meaning": "-1은 뒤에서 첫 번째 위치입니다. 마지막 값을 읽으며 원본은 바뀌지 않습니다. 빈 리스트에서는 IndexError가 발생합니다.",
        "application": "리스트의 길이를 따로 계산하지 않고 마지막 값을 확인할 때 사용합니다."
      }
    ]
  },
  {
    "id": "queue-index-priority",
    "title": "큐에서 인덱스 추적과 우선순위 비교",
    "category": "algorithm",
    "description": "정보를 함께 저장하고, 꺼내어 비교하고, 빈 큐를 확인하는 사용 구문을 모았습니다.",
    "usages": [
      {
        "title": "정보와 원래 위치를 함께 저장",
        "code": "Q.append((priority, idx))",
        "meaning": "우선순위와 원래 인덱스를 튜플로 묶어 저장합니다. 큐 안에서 순서가 바뀌어도 idx는 원래 위치를 유지합니다.",
        "application": "항목을 뒤로 보내거나 재배치한 뒤에도 원래 어떤 항목인지 구별해야 할 때 사용합니다."
      },
      {
        "title": "꺼낸 정보 나누어 받기",
        "code": "priority, idx = Q.pop(0)",
        "meaning": "맨 앞 튜플의 두 값을 각각 변수로 받는 언패킹입니다. pop() 자체의 동작은 관련 배열 노트에 정리했습니다.",
        "application": "하나로 묶어 저장한 여러 정보를 꺼내 각각의 이름으로 처리할 때 사용합니다."
      },
      {
        "title": "최대 우선순위 확인",
        "code": "max(Q)[0]",
        "meaning": "Q가 비어 있지 않을 때 사용합니다. max(Q)는 가장 큰 튜플을 찾고 [0]은 그 첫 값인 우선순위를 가져옵니다. 우선순위가 같으면 인덱스도 비교하지만 반환하는 우선순위는 같습니다.",
        "application": "남아 있는 항목 중 가장 높은 우선순위가 얼마인지 비교할 때 사용합니다."
      },
      {
        "title": "빈 큐 확인 후 조건 검사",
        "code": "if Q and 조건:\n    처리()",
        "meaning": "Q가 비어 있지 않을 때만 뒤의 조건을 검사합니다. Q가 비면 and가 뒤의 계산을 건너뛰므로, 인덱스 접근이나 max(Q)를 안전하게 적용할 수 있습니다. 조건과 처리()는 필요한 내용으로 바꿉니다.",
        "application": "if gotruck and gotruck[0][1] >= bridge_length처럼, 요소가 있는지 먼저 확인한 뒤 내부 값을 검사할 때 사용합니다."
      }
    ],
    "related": [
      "array-remove-pop",
      "nested-list-access-sum"
    ]
  },
  {
    "id": "nested-list-access-sum",
    "title": "2차원 리스트 접근과 값의 합계",
    "category": "array",
    "description": "중첩 인덱스로 값을 읽고 갱신하거나, 같은 위치의 값들을 합산하는 방법입니다.",
    "related": [
      "queue-index-priority"
    ],
    "usages": [
      {
        "title": "2차원 리스트의 값 읽기",
        "code": "items[행][열]",
        "meaning": "첫 인덱스로 항목을 고르고, 두 번째 인덱스로 그 안의 값을 고릅니다. [무게, 경과 시간]을 담은 gotruck에서 gotruck[0][1]은 첫 트럭의 경과 시간입니다.",
        "application": "각 항목에 여러 정보를 함께 저장한 중첩 리스트에서 원하는 속성을 읽을 때 사용합니다."
      },
      {
        "title": "항목 내부의 값 갱신",
        "code": "items[i][1] += 1",
        "meaning": "i번째 항목의 두 번째 값을 원본에서 1 증가시킵니다. 해당 항목이 있을 때 사용합니다.",
        "application": "트럭별 경과 시간처럼 저장된 상태를 항목마다 갱신할 때 사용합니다."
      },
      {
        "title": "같은 위치의 값들을 합산",
        "code": "sum([item[0] for item in items])",
        "meaning": "각 항목의 첫 번째 값만 모은 리스트를 만든 뒤 더합니다. items가 비어 있으면 합계는 0입니다.",
        "application": "[무게, 시간]에서 전체 무게처럼 중첩 리스트의 특정 속성을 모두 더할 때 사용합니다."
      }
    ]
  },
  {
    "id": "bridge-time-simulation",
    "title": "시간 단위 시뮬레이션과 큐",
    "category": "algorithm",
    "description": "시간 진행, 상태 갱신 순서, 종료 조건을 어떤 상황에서 활용하는지 정리합니다.",
    "related": [
      "nested-list-access-sum",
      "queue-index-priority"
    ],
    "usages": [
      {
        "title": "시간을 한 단계씩 진행",
        "code": "time += 1",
        "meaning": "현재 시간에 1을 더하고 그 시점의 상태를 갱신합니다. 트럭 문제에서는 한 단계가 1초입니다.",
        "application": "시간이 흐르면서 이동이나 대기 상태가 바뀌는 시뮬레이션에 활용합니다."
      },
      {
        "title": "상태 갱신 순서 정하기",
        "code": "",
        "meaning": "이동 → 완료된 항목 제거 → 남은 자원 확인 → 새 항목 진입 순서로 처리합니다. 트럭이 먼저 빠져야 그 무게만큼 다음 트럭이 들어갈 수 있습니다.",
        "application": "공간·무게 등의 제한 안에서 여러 항목이 들어오고 나가는 상황에 활용합니다."
      },
      {
        "title": "모든 항목의 완료를 종료 조건으로 삼기",
        "code": "",
        "meaning": "처음 전체 항목 수를 보관하고 완료 수가 같아질 때 종료합니다. 대기 목록이 비어도 진행 중인 항목이 있으면 상태 갱신을 계속합니다.",
        "application": "마지막 트럭이 다리를 빠져나오는 시점처럼, 대기와 진행 상태를 모두 고려해 종료해야 할 때 활용합니다."
      }
    ]
  },
  {
    "id": "heapq-min-heap",
    "title": "heapq로 최소 힙 사용하기",
    "category": "algorithm",
    "description": "가장 작은 값을 반복해서 확인하고 꺼낼 때 쓰는 최소 힙의 사용법입니다.",
    "usages": [
      {
        "title": "모듈 가져오기와 빈 힙 준비",
        "code": "import heapq\nheap = []",
        "meaning": "heapq는 파이썬 표준 라이브러리이므로 별도 설치 없이 가져옵니다. 빈 리스트를 만들고 heappush()로 값을 추가하며 사용할 수 있습니다.",
        "application": "아직 값이 없는 상태에서 최소 힙에 데이터를 하나씩 넣기 시작할 때 사용합니다."
      },
      {
        "title": "기존 리스트를 힙으로 바꾸기",
        "code": "heapq.heapify(heap)",
        "meaning": "값이 들어 있는 리스트 원본을 최소 힙으로 바꿉니다. 반환값은 None이며, 처리 시간은 원소 수 N에 대해 O(N)입니다.",
        "application": "scoville처럼 이미 주어진 숫자 리스트를 힙으로 사용하고 싶을 때 한 번 실행합니다."
      },
      {
        "title": "최소값 확인하기",
        "code": "heap[0]",
        "meaning": "비어 있지 않은 최소 힙의 최솟값을 제거하지 않고 O(1)에 확인합니다. 전체 원소가 정렬된 것은 아니므로 다른 인덱스를 정렬 순서로 해석하지 않습니다.",
        "application": "가장 작은 값이 목표값 K에 도달했는지 검사할 때 사용합니다. 빈 힙에서 접근하면 IndexError가 발생하므로 요소가 있는지 먼저 확인합니다."
      },
      {
        "title": "최소값 꺼내기",
        "code": "value = heapq.heappop(heap)",
        "meaning": "최솟값을 제거해 반환하고 나머지 원소의 힙 구조를 유지합니다. 처리 시간은 O(log N)이며, 빈 힙에서는 IndexError가 발생합니다.",
        "application": "가장 작은 값을 꺼내서 계산하거나 우선 처리할 때 사용합니다."
      },
      {
        "title": "새 값 추가하기",
        "code": "heapq.heappush(heap, value)",
        "meaning": "힙에 value를 넣고 최소 힙 구조를 유지합니다. 리스트 원본이 바뀌며 처리 시간은 O(log N)입니다.",
        "application": "작은 값들을 이용해 만든 새 값을 다시 넣고, 다음 최솟값을 구하는 작업을 반복할 때 사용합니다."
      },
      {
        "title": "가장 작은 두 값 꺼내기",
        "code": "if len(heap) >= 2:\n    a = heapq.heappop(heap)\n    b = heapq.heappop(heap)",
        "meaning": "원소가 두 개 이상인지 확인한 뒤 heappop()을 두 번 호출합니다. a는 가장 작은 값, b는 그다음 작은 값이며 같은 값일 수도 있습니다.",
        "application": "가장 작은 두 값으로 새 값을 만드는 연산에 활용합니다. 목표 미달인데 원소가 두 개보다 적으면 더 이상 결합할 수 없으므로 실패 처리가 필요합니다."
      }
    ],
    "related": [
      "queue-index-priority"
    ]
  }
]
};
