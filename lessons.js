// Each example is standalone Python 3, with its expected standard output.
window.LESSONS = [
{
  "id": "if",
  "title": "if문과 조건 분기",
  "en": "If Statements",
  "icon": "?",
  "color": "orange",
  "level": "입문",
  "minutes": 12,
  "summary": "조건에 따라 다른 코드를 실행하고, 프로그램의 흐름을 나눠요.",
  "tags": [
    "if문",
    "elif",
    "else",
    "조건문",
    "비교 연산자"
  ],
  "concept": "if 조건: 아래에 들여쓴 코드는 조건이 참일 때만 실행돼요. 다른 조건은 elif, 나머지 경우는 else로 처리합니다. if·elif·else는 위에서부터 확인해 처음 참인 분기 하나만 실행해요. 여러 조건을 각각 검사하려면 독립된 if문을 사용하세요. 비교에는 ==, !=, <, <=, >, >=를 쓰고, and·or·not으로 조건을 연결해요.",
  "when": "점수에 따라 등급을 정하거나, 좌표 범위를 검사하거나, 특정 조건을 만족하는 데이터만 처리할 때 사용해요.",
  "complexity": "예제의 고정된 개수의 비교 O(1) · 조건식 자체가 탐색이라면 비용이 달라져요.",
  "caution": "조건 뒤에 콜론(:)을 쓰고 본문은 공백 4칸으로 들여쓰세요. =는 대입, ==는 같은지 비교하는 연산자예요. if 90 <= score <= 100처럼 범위를 연결할 수도 있어요.",
  "patterns": [
    {
      "title": "01. if · elif · else로 등급 나누기",
      "description": "높은 점수부터 확인해야 낮은 점수 조건에 먼저 걸리지 않아요. else에는 조건을 쓰지 않습니다.",
      "code": "score = 85\n\nif score >= 90:\n    print(\"A등급\")\nelif score >= 80:\n    print(\"B등급\")\nelse:\n    print(\"더 연습해 봐요\")",
      "output": "B등급"
    },
    {
      "title": "02. and · or · not으로 조건 연결하기",
      "description": "and는 둘 다 참, or는 하나라도 참, not은 참과 거짓을 뒤집어요.",
      "code": "number = 8\n\nif number > 0 and number % 2 == 0:\n    print(\"양수이면서 짝수\")\n\nif number < 0 or number > 5:\n    print(\"음수이거나 5보다 큼\")\n\nif not number == 0:\n    print(\"0이 아님\")",
      "output": "양수이면서 짝수\n음수이거나 5보다 큼\n0이 아님"
    }
  ],
  "exercise": "number가 양수면 \"양수\", 0이면 \"0\", 음수면 \"음수\"를 출력하세요. number = -3으로 확인해 보세요.",
  "answer": "number = -3\nif number > 0:\n    print(\"양수\")\nelif number == 0:\n    print(\"0\")\nelse:\n    print(\"음수\")",
  "answerOutput": "음수"
},
{
  "id": "for",
  "title": "for문과 반복",
  "en": "For Loops",
  "icon": "↻",
  "color": "green",
  "level": "입문",
  "minutes": 15,
  "summary": "리스트나 숫자 범위의 원소를 하나씩 꺼내 같은 작업을 반복해요.",
  "tags": [
    "for문",
    "반복문",
    "range",
    "enumerate",
    "continue"
  ],
  "concept": "for 변수 in 반복할 대상: 형태로 작성해요. 리스트·문자열의 원소를 하나씩 꺼내 변수에 넣고, 들여쓴 본문을 실행합니다. range(stop)은 0부터 stop 직전까지, range(start, stop, step)은 시작·끝·간격을 지정해요. 끝값은 포함하지 않습니다. 인덱스와 값이 모두 필요하면 enumerate를 사용하세요.",
  "when": "모든 원소를 확인하거나, 정해진 횟수만큼 계산하거나, 합계와 개수를 누적할 때 사용해요.",
  "complexity": "본문이 O(1)이면 N회 반복 O(N) · N × M 중첩 반복 O(N × M)",
  "caution": "range(1, 6)은 1부터 5까지예요. continue는 이번 반복의 나머지를 건너뛰고 다음 원소로 이동합니다. break는 가장 안쪽 반복문을 종료해요. 반복 중인 리스트의 원소를 직접 삭제하는 방식은 피하세요.",
  "patterns": [
    {
      "title": "01. range로 1부터 5까지 합 구하기",
      "description": "total에 현재 숫자를 더해 누적해요. range(1, 6)의 끝값 6은 포함되지 않아요.",
      "code": "total = 0\nfor number in range(1, 6):\n    total += number\n\nprint(total)\nprint(list(range(5, 0, -1)))  # 음수 간격으로 역순 반복",
      "output": "15\n[5, 4, 3, 2, 1]"
    },
    {
      "title": "02. enumerate와 continue로 원소 걸러내기",
      "description": "인덱스와 값을 함께 꺼내고, 홀수는 건너뛴 뒤 짝수만 출력해요.",
      "code": "nums = [3, 8, 5, 2]\n\nfor index, value in enumerate(nums):\n    if value % 2 != 0:\n        continue\n    print(index, value)",
      "output": "1 8\n3 2"
    }
  ],
  "exercise": "for문과 range를 사용해 1부터 10까지의 숫자 중 짝수의 합을 출력해 보세요.",
  "answer": "total = 0\nfor number in range(1, 11):\n    if number % 2 == 0:\n        total += number\nprint(total)",
  "answerOutput": "30"
},
{
  "id": "while",
  "title": "while문과 반복 제어",
  "en": "While Loops",
  "icon": "⟳",
  "color": "blue",
  "level": "입문",
  "minutes": 15,
  "summary": "조건이 참인 동안 반복하고, 원하는 순간에 멈추는 방법을 익혀요.",
  "tags": [
    "while문",
    "반복문",
    "break",
    "무한 루프",
    "종료 조건"
  ],
  "concept": "while 조건:은 반복을 시작하기 전에 조건을 확인하고, 참인 동안 들여쓴 본문을 실행해요. 조건이 처음부터 거짓이면 한 번도 실행하지 않습니다. 횟수가 정해졌다면 for, 상태가 특정 조건에 도달할 때까지 반복하려면 while이 편리해요. 본문에서 상태를 갱신하거나 break로 종료해야 합니다.",
  "when": "목표값에 도달할 때까지 누적 계산하거나, 큐가 빌 때까지 처리하거나, 특정 종료 값을 만날 때 사용해요.",
  "complexity": "본문이 O(1)이면 K회 반복 O(K) · 반복 횟수를 종료 조건으로 분석해요.",
  "caution": "조건에 영향을 주는 변수를 갱신하지 않으면 무한 반복할 수 있어요. continue를 사용할 때도 갱신을 빠뜨리지 마세요. while True를 쓸 때는 반드시 도달 가능한 종료 조건을 두세요.",
  "patterns": [
    {
      "title": "01. 조건과 상태 갱신으로 카운트다운",
      "description": "매 반복마다 count를 줄여서 언젠가 조건이 거짓이 되도록 만들어요.",
      "code": "count = 3\n\nwhile count > 0:\n    print(count)\n    count -= 1\n\nprint(\"시작!\")",
      "output": "3\n2\n1\n시작!"
    },
    {
      "title": "02. break로 목표에 도달하면 멈추기",
      "description": "자연수를 차례로 더하다 합이 10 이상이면 가장 안쪽 반복문을 종료해요.",
      "code": "number = 1\ntotal = 0\n\nwhile True:\n    total += number\n    if total >= 10:\n        break\n    number += 1\n\nprint(number)\nprint(total)",
      "output": "4\n10"
    }
  ],
  "exercise": "while문을 사용해 1부터 자연수를 더하면서 합이 20 이상이 되는 첫 숫자와 그때의 합을 출력해 보세요.",
  "answer": "number = 0\ntotal = 0\nwhile total < 20:\n    number += 1\n    total += number\nprint(number, total)",
  "answerOutput": "6 21"
},
  {
    id: 'array', title: '배열과 리스트', en: 'Array & List', icon: '[ ]', color: 'green', level: '입문', minutes: 12,
    summary: '여러 데이터를 순서대로 담고, 원하는 값에 빠르게 접근해요.', tags: ['인덱싱', '슬라이싱', '누적 합'],
    concept: '파이썬에서는 list로 배열을 다룹니다. 인덱스는 0부터 시작하고, 음수 인덱스로 뒤에서부터 접근할 수 있어요. 리스트는 크기를 바꿀 수 있고 여러 타입을 담을 수 있지만, 코딩테스트에서는 같은 타입의 데이터를 담는 경우가 많아요.',
    when: '여러 값을 순서대로 저장하거나, 구간의 합을 여러 번 구할 때 사용해요.', complexity: '인덱스 접근 O(1) · 탐색 O(N) · 중간 삽입 O(N)', caution: '슬라이싱은 새로운 리스트를 만들어요. nums[a:b]의 시간·공간 비용은 잘라낸 길이에 비례합니다.',
    patterns: [
      { title: '01. 리스트의 기본 조작', description: '인덱싱, 슬라이싱, 추가와 정렬까지. 가장 자주 쓰는 기본기를 익혀요.', code: 'nums = [3, 1, 4, 1, 5]\n\nprint(nums[0])        # 첫 번째 원소\nprint(nums[-1])       # 마지막 원소\nprint(nums[1:4])      # 끝 인덱스는 포함하지 않아요\n\nnums.append(9)       # 맨 뒤에 추가: 평균 O(1)\nnums.sort()          # 원본을 정렬: O(N log N)\nprint(nums)', output: '3\n5\n[1, 4, 1]\n[1, 1, 3, 4, 5, 9]' },
      { title: '02. 누적 합으로 구간 합 구하기', description: '한 번 전처리하면 [left, right) 구간의 합을 O(1)에 구할 수 있어요.', code: 'nums = [2, 4, 1, 5, 3]\nprefix = [0]\nfor value in nums:\n    prefix.append(prefix[-1] + value)\n\nleft, right = 1, 4\nprint(prefix[right] - prefix[left])  # 4 + 1 + 5', output: '10' }
    ], exercise: '리스트 [5, 2, 8, 1, 9]에서 짝수만 골라 오름차순으로 출력해 보세요.', answer: 'nums = [5, 2, 8, 1, 9]\nprint(sorted(x for x in nums if x % 2 == 0))', answerOutput: '[2, 8]'
  },
  {
    id: 'matrix', title: '2차원 배열', en: '2D Array', icon: '▦', color: 'blue', level: '입문', minutes: 15,
    summary: '행과 열로 이루어진 격자를 탐색하며, 좌표 감각을 익혀요.', tags: ['행과 열', '방향 벡터', '격자 탐색'],
    concept: '2차원 리스트는 리스트 안에 리스트를 담은 구조예요. grid[row][col]로 접근하며, 행이 먼저이고 열이 나중입니다. 격자 문제에서는 좌표가 유효한지 확인한 뒤 접근하는 습관이 중요해요.', when: '지도, 게임 보드, 이미지처럼 행과 열이 있는 데이터를 다룰 때 사용해요.', complexity: '원소 접근 O(1) · 전체 순회 O(R × C)', caution: '[[0] * cols] * rows는 같은 행을 공유합니다. 독립적인 행을 만들려면 리스트 컴프리헨션을 사용하세요.',
    patterns: [
      {title: '01. 생성하고 행과 열 순회하기', description: '각 행을 독립적으로 만든 뒤, 좌표를 사용해 값을 채워요.', code: 'rows, cols = 2, 3\ngrid = [[0] * cols for _ in range(rows)]\n\nfor r in range(rows):\n    for c in range(cols):\n        grid[r][c] = r * cols + c + 1\n\nfor row in grid:\n    print(*row)', output: '1 2 3\n4 5 6'},
      {title: '02. 상하좌우 이웃 탐색', description: '방향 벡터와 범위 검사로 안전하게 이동해요.', code: 'grid = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]\nrows, cols = len(grid), len(grid[0])\nr, c = 1, 1\ndirections = [(-1, 0), (1, 0), (0, -1), (0, 1)]\n\nfor dr, dc in directions:\n    nr, nc = r + dr, c + dc\n    if 0 <= nr < rows and 0 <= nc < cols:\n        print(grid[nr][nc])', output: '2\n8\n4\n6'}
    ], exercise: '[[1, 2], [3, 4], [5, 6]]의 각 열의 합을 출력해 보세요.', answer: 'grid = [[1, 2], [3, 4], [5, 6]]\nprint([sum(row[c] for row in grid) for c in range(len(grid[0]))])', answerOutput: '[9, 12]'
  },
  {
    id: 'brute', title: '완전탐색', en: 'Brute Force', icon: '⌕', color: 'orange', level: '기초', minutes: 18,
    summary: '가능한 경우를 빠짐없이 살펴보고, 정답을 찾아가요.', tags: ['모든 경우', '순열과 조합', '백트래킹'],
    concept: '완전탐색은 가능한 모든 후보를 확인하는 방법이에요. 먼저 경우의 수를 계산해서 제한 시간 안에 가능한지 판단하세요. 순서가 중요하면 순열, 순서가 중요하지 않으면 조합을 사용해요.', when: '입력 크기가 작거나, 최적화하기 전에 확실한 정답 풀이를 만들 때 유용해요.', complexity: '두 원소 조합 O(N²) · 전체 순열 O(N! × N)', caution: '중첩 반복문의 수와 입력 크기를 함께 확인하세요. permutations는 길이가 조금만 커져도 경우의 수가 폭발합니다.',
    patterns: [
      {title: '01. 두 수의 합 찾기', description: 'i < j인 모든 쌍을 확인하면 중복 없이 탐색할 수 있어요.', code: 'nums = [2, 7, 11, 15]\ntarget = 9\n\nfor i in range(len(nums)):\n    for j in range(i + 1, len(nums)):\n        if nums[i] + nums[j] == target:\n            print(i, j)', output: '0 1'},
      {title: '02. itertools로 조합 만들기', description: '서로 다른 세 숫자를 고르는 모든 경우를 간결하게 표현해요.', code: 'from itertools import combinations\n\nnums = [1, 2, 3, 4]\nfor selected in combinations(nums, 3):\n    print(selected, sum(selected))', output: '(1, 2, 3) 6\n(1, 2, 4) 7\n(1, 3, 4) 8\n(2, 3, 4) 9'}
    ], exercise: '[1, 2, 3, 4, 5]에서 서로 다른 세 수를 골라 합이 9가 되는 조합을 출력하세요.', answer: 'from itertools import combinations\n\nfor group in combinations([1, 2, 3, 4, 5], 3):\n    if sum(group) == 9:\n        print(group)', answerOutput: '(1, 3, 5)\n(2, 3, 4)'
  },
  {
    id: 'dp', title: '다이나믹 프로그래밍', en: 'Dynamic Programming', icon: '↗', color: 'purple', level: '중급', minutes: 25,
    summary: '작은 문제의 답을 저장하고, 더 큰 문제를 해결해요.', tags: ['점화식', '메모이제이션', '바텀업'],
    concept: 'DP는 반복되는 부분 문제의 답을 저장해 중복 계산을 줄이는 방법이에요. 상태가 무엇을 의미하는지 먼저 정의하고, 이전 상태에서 현재 상태를 구하는 점화식과 초기값을 정하세요.', when: '부분 문제가 반복되고, 작은 문제의 답을 이용해 큰 문제의 답을 구성할 수 있을 때 사용해요.', complexity: '피보나치 O(N) · 동전 문제 O(금액 × 동전 수)', caution: '점화식보다 상태 정의가 먼저입니다. 도달할 수 없는 상태는 무한대 등으로 구분하고, 초기값을 꼭 확인하세요.',
    patterns: [
      {title: '01. 피보나치: 바텀업 DP', description: 'dp[i]를 i번째 피보나치 수로 정의하고 작은 값부터 채워요.', code: 'n = 10\ndp = [0] * (n + 1)\nif n >= 1:\n    dp[1] = 1\n\nfor i in range(2, n + 1):\n    dp[i] = dp[i - 1] + dp[i - 2]\n\nprint(dp[n])', output: '55'},
      {title: '02. 최소 동전 개수', description: '각 동전을 무제한 사용할 때, 금액을 만드는 최소 개수를 구해요.', code: 'coins = [1, 3, 4]\namount = 6\ndp = [float("inf")] * (amount + 1)\ndp[0] = 0\n\nfor total in range(1, amount + 1):\n    for coin in coins:\n        if total >= coin:\n            dp[total] = min(dp[total], dp[total - coin] + 1)\n\nprint(dp[amount] if dp[amount] != float("inf") else -1)', output: '2'}
    ], exercise: '한 번에 1칸 또는 2칸을 오를 수 있어요. 5칸 계단을 오르는 방법의 수를 구해 보세요.', answer: 'n = 5\ndp = [0] * (n + 1)\ndp[0] = 1\nfor i in range(1, n + 1):\n    dp[i] = dp[i - 1]\n    if i >= 2:\n        dp[i] += dp[i - 2]\nprint(dp[n])', answerOutput: '8'
  },
  {
    id: 'stack', title: '스택과 큐', en: 'Stack & Queue', icon: '≋', color: 'pink', level: '기초', minutes: 15,
    summary: '데이터가 들어오고 나가는 순서를 목적에 맞게 관리해요.', tags: ['LIFO', 'FIFO', 'deque'],
    concept: '스택은 나중에 들어간 값이 먼저 나오는 LIFO 구조예요. 리스트의 append와 pop으로 구현합니다. 큐는 먼저 들어간 값이 먼저 나오는 FIFO 구조이며 collections.deque를 사용하면 효율적이에요.', when: '괄호 검사나 되돌리기에는 스택을, 대기열이나 BFS에는 큐를 사용해요.', complexity: '스택 append/pop 평균 O(1) · deque 양 끝 삽입/삭제 O(1)', caution: '빈 스택에서 pop하면 오류가 납니다. 큐에 list.pop(0)을 쓰면 매번 O(N)이 걸리므로 deque.popleft()를 사용하세요.',
    patterns: [
      {title: '01. 스택으로 괄호 검사', description: '열린 괄호를 저장하고, 닫힌 괄호를 만나면 하나씩 꺼내요.', code: 'def is_balanced(text):\n    stack = []\n    for char in text:\n        if char == "(":\n            stack.append(char)\n        elif char == ")":\n            if not stack:\n                return False\n            stack.pop()\n    return not stack\n\nprint(is_balanced("(())()"))\nprint(is_balanced("(()"))', output: 'True\nFalse'},
      {title: '02. deque로 큐 다루기', description: 'append로 넣고 popleft로 먼저 들어간 값을 꺼내요.', code: 'from collections import deque\n\nqueue = deque(["A", "B"])\nqueue.append("C")\nwhile queue:\n    print(queue.popleft())', output: 'A\nB\nC'}
    ], exercise: '스택에 1, 2, 3을 차례로 넣고 모두 꺼내며 출력해 보세요.', answer: 'stack = []\nfor n in [1, 2, 3]:\n    stack.append(n)\nwhile stack:\n    print(stack.pop())', answerOutput: '3\n2\n1'
  },
  {
    id: 'search', title: '이진탐색', en: 'Binary Search', icon: '⋈', color: 'blue', level: '기초', minutes: 18,
    summary: '정렬된 데이터에서 탐색 범위를 절반씩 줄여나가요.', tags: ['정렬', 'bisect', '탐색 범위'],
    concept: '이진탐색은 정렬된 범위의 중간값을 확인하고, 정답이 있을 수 없는 절반을 제거해요. 직접 구현할 수도 있고 bisect 모듈로 삽입 위치나 값의 개수를 구할 수도 있어요.', when: '정렬된 데이터에서 값을 찾거나, 단조성을 가진 조건에서 경계값을 찾을 때 사용해요.', complexity: '탐색 O(log N) · 정렬이 필요하면 전처리 O(N log N)', caution: '입력이 정렬되어 있어야 해요. bisect_left는 실제 값의 존재 여부와 무관하게 삽입 위치를 반환합니다.',
    patterns: [
      {title: '01. 반복문으로 이진탐색', description: '양 끝을 포함하는 [left, right] 구간을 탐색해요.', code: 'def binary_search(nums, target):\n    left, right = 0, len(nums) - 1\n    while left <= right:\n        mid = (left + right) // 2\n        if nums[mid] == target:\n            return mid\n        if nums[mid] < target:\n            left = mid + 1\n        else:\n            right = mid - 1\n    return -1\n\nprint(binary_search([1, 3, 5, 7, 9], 7))', output: '3'},
      {title: '02. 중복된 값의 개수 세기', description: '오른쪽 삽입 위치에서 왼쪽 삽입 위치를 빼면 개수가 돼요.', code: 'from bisect import bisect_left, bisect_right\n\nnums = [1, 2, 2, 2, 3, 5]\ntarget = 2\nprint(bisect_left(nums, target))\nprint(bisect_right(nums, target) - bisect_left(nums, target))', output: '1\n3'}
    ], exercise: '[1, 3, 5, 7]에서 4가 들어갈 인덱스를 bisect로 찾아보세요.', answer: 'from bisect import bisect_left\nprint(bisect_left([1, 3, 5, 7], 4))', answerOutput: '2'
  },
  {
    id: 'graph', title: 'DFS와 BFS', en: 'Graph Traversal', icon: '⋮', color: 'green', level: '중급', minutes: 25,
    summary: '연결된 데이터를 깊이 또는 너비 방향으로 탐색해요.', tags: ['그래프', '방문 처리', '최단 거리'],
    concept: 'DFS는 한 경로를 깊이 따라가고, BFS는 가까운 정점부터 차례로 탐색해요. 인접 리스트로 연결 관계를 표현하고, 방문 기록으로 중복 탐색을 막습니다. 가중치가 없는 그래프의 최단 거리는 BFS로 구할 수 있어요.', when: '연결 요소, 경로의 존재 여부, 가중치 없는 최단 거리를 구할 때 사용해요.', complexity: '인접 리스트 기준 O(V + E) 시간 · O(V) 추가 공간', caution: 'BFS는 큐에 넣을 때 방문 처리하세요. 재귀 DFS는 깊이가 크면 재귀 한도에 도달하므로 반복문 구현도 익혀두세요.',
    patterns: [
      {title: '01. 스택으로 DFS', description: '명시적인 스택을 사용하면 재귀 깊이 제한을 피할 수 있어요.', code: 'graph = {1: [2, 3], 2: [1, 4], 3: [1], 4: [2]}\nstack = [1]\nvisited = set()\norder = []\nwhile stack:\n    node = stack.pop()\n    if node in visited:\n        continue\n    visited.add(node)\n    order.append(node)\n    for neighbor in reversed(graph[node]):\n        if neighbor not in visited:\n            stack.append(neighbor)\nprint(order)', output: '[1, 2, 4, 3]'},
      {title: '02. BFS로 최단 거리', description: '시작점부터의 거리로 방문 여부와 최단 거리를 함께 관리해요.', code: 'from collections import deque\n\ngraph = [[1, 2], [0, 3], [0], [1]]\ndistance = [-1] * len(graph)\ndistance[0] = 0\nqueue = deque([0])\nwhile queue:\n    node = queue.popleft()\n    for neighbor in graph[node]:\n        if distance[neighbor] == -1:\n            distance[neighbor] = distance[node] + 1\n            queue.append(neighbor)\nprint(distance)', output: '[0, 1, 1, 2]'}
    ], exercise: 'BFS 예제에서 시작점을 정점 2로 바꾸고 각 정점까지의 거리를 구해 보세요.', answer: 'from collections import deque\ngraph = [[1, 2], [0, 3], [0], [1]]\ndistance = [-1] * 4\ndistance[2] = 0\nqueue = deque([2])\nwhile queue:\n    node = queue.popleft()\n    for neighbor in graph[node]:\n        if distance[neighbor] == -1:\n            distance[neighbor] = distance[node] + 1\n            queue.append(neighbor)\nprint(distance)', answerOutput: '[1, 2, 0, 3]'
  },
  {
    id: 'greedy', title: '그리디', en: 'Greedy Algorithm', icon: '⚑', color: 'orange', level: '중급', minutes: 20,
    summary: '지금 가장 좋은 선택이 전체의 최선이 되는 조건을 찾아요.', tags: ['정렬', '최적 선택', '구간 선택'],
    concept: '그리디는 매 단계에서 가장 좋아 보이는 선택을 하는 방법이에요. 항상 정답이 되는 것은 아니므로, 그 선택을 해도 최적해를 잃지 않는다는 근거가 필요합니다. 정렬 기준을 정하는 것이 핵심인 경우가 많아요.', when: '현재의 최선 선택을 포함하는 최적해가 있음을 증명할 수 있을 때 사용해요.', complexity: '아래 정렬 기반 예제는 O(N log N)', caution: '동전 [1, 3, 4]로 6을 만들 때 큰 동전부터 고르면 3개지만 최적은 3 + 3의 2개예요. 그리디가 성립하지 않으면 DP 등을 고려하세요.',
    patterns: [
      {title: '01. 가장 많은 회의 선택하기', description: '끝나는 시간이 빠른 회의부터 선택해 다음 회의의 공간을 남겨요.', code: 'meetings = [(1, 4), (3, 5), (0, 6), (5, 7), (8, 9)]\nmeetings.sort(key=lambda meeting: (meeting[1], meeting[0]))\nend = float("-inf")\nselected = []\nfor start, finish in meetings:\n    if start >= end:\n        selected.append((start, finish))\n        end = finish\nprint(selected)', output: '[(1, 4), (5, 7), (8, 9)]'},
      {title: '02. 최소 총 대기 시간', description: '작업 시간을 오름차순으로 정렬하면 누적 대기 시간의 합이 최소가 돼요.', code: 'times = [3, 1, 4, 3, 2]\nwaiting = 0\ntotal = 0\nfor time in sorted(times):\n    waiting += time\n    total += waiting\nprint(total)', output: '32'}
    ], exercise: '작업 시간이 [5, 2, 1]일 때, 완료 시간의 합이 최소가 되는 값을 구해보세요.', answer: 'elapsed = 0\ntotal = 0\nfor time in sorted([5, 2, 1]):\n    elapsed += time\n    total += elapsed\nprint(total)', answerOutput: '12'
  }
];
