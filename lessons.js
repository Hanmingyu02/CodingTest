// Learning content supplied by the user, organized by category.
window.LESSONS = [
  {
    "id": "interval-sum",
    "title": "두 정수 사이의 합",
    "en": "Sum of Integers",
    "category": "수학",
    "icon": "∑",
    "color": "green",
    "summary": "두 정수 a, b를 포함한 구간의 모든 정수의 합을 구하는 공식.",
    "tags": [
      "등차수열",
      "구간 합",
      "절댓값"
    ],
    "concept": "두 끝값의 합에 정수의 개수를 곱한 뒤 2로 나누면, 두 정수 사이의 합을 구할 수 있어요. a와 b가 모두 포함되며, 어느 쪽이 더 커도 같은 공식을 사용합니다.",
    "terms": [
      {
        "code": "a + b",
        "description": "두 끝값의 합"
      },
      {
        "code": "abs(a - b) + 1",
        "description": "a와 b를 포함한 정수의 개수"
      },
      {
        "code": "// 2",
        "description": "2로 나눈 정수 결과. 앞의 곱이 항상 짝수이므로 정확히 나누어집니다."
      }
    ],
    "patterns": [
      {
        "title": "파이썬 공식",
        "description": "a와 b에 두 정수를 넣어 사용하세요.",
        "code": "(a + b) * (abs(a - b) + 1) // 2"
      }
    ]
  },
  {
    "id": "string-to-int",
    "title": "문자열 → 숫자 변환",
    "en": "String to Integer",
    "category": "형 변환",
    "icon": "⇄",
    "color": "blue",
    "summary": "int()는 숫자 문자열 앞의 +, - 부호를 자동으로 처리해요.",
    "tags": [
      "int()",
      "문자열",
      "정수 변환",
      "부호"
    ],
    "concept": "파이썬의 int()는 숫자 문자열을 정수로 변환할 때, 앞에 있는 +, - 부호까지 자동으로 처리합니다. 부호를 확인하거나 따로 처리하는 조건문을 작성할 필요가 없어요.",
    "conceptTitle": "핵심 정리",
    "termsTitle": "사용법",
    "terms": [
      {
        "code": "int(s)",
        "description": "정수로 바꿀 숫자 문자열 s를 전달합니다."
      },
      {
        "code": "+, -",
        "description": "문자열 앞의 부호는 int()가 자동으로 처리합니다."
      }
    ],
    "patterns": [
      {
        "title": "int()로 변환하기",
        "description": "s는 변환할 숫자 문자열입니다.",
        "code": "int(s)"
      }
    ]
  },
  {
    "id": "list-insert-append",
    "title": "배열 앞뒤에 원소 추가",
    "en": "Insert & Append",
    "category": "배열",
    "icon": "[ ]",
    "color": "green",
    "summary": "맨 앞에는 insert(0, 값), 맨 뒤에는 append(값)을 사용해요.",
    "tags": [
      "배열",
      "리스트",
      "insert",
      "append",
      "원소 추가"
    ],
    "concept": "파이썬 리스트(배열)의 맨 앞에 값을 추가하려면 배열이름.insert(0, 값)을 사용합니다. 맨 뒤에 값을 추가하려면 배열이름.append(값)을 사용해요.",
    "conceptTitle": "핵심 정리",
    "termsTitle": "사용법",
    "terms": [
      {
        "code": "insert(0, 값)",
        "description": "인덱스 0, 즉 배열의 맨 앞에 값을 추가합니다."
      },
      {
        "code": "append(값)",
        "description": "배열의 맨 뒤에 값을 추가합니다."
      }
    ],
    "patterns": [
      {
        "title": "맨 앞에 추가",
        "description": "배열이름은 값을 추가할 리스트입니다.",
        "code": "배열이름.insert(0, 값)"
      },
      {
        "title": "맨 뒤에 추가",
        "description": "append에 추가할 값을 전달합니다.",
        "code": "배열이름.append(값)"
      }
    ]
  },
  {
    "id": "digits-descending",
    "title": "정수의 자릿수 내림차순 정렬",
    "en": "Sort Digits in Descending Order",
    "category": "정렬",
    "icon": "↓",
    "color": "purple",
    "summary": "정수를 자릿수별로 나눈 뒤 큰 숫자부터 정렬하고, 다시 정수로 합쳐요.",
    "tags": [
      "정렬",
      "내림차순",
      "sort",
      "reverse=True",
      "join",
      "문자열",
      "정수"
    ],
    "concept": "0 이상의 정수 n을 문자열로 바꾸고, 각 자릿수를 리스트로 나눕니다. 자릿수를 내림차순으로 정렬한 뒤 하나의 문자열로 합치고, 정수로 변환해 반환하는 코드예요.",
    "conceptTitle": "핵심 정리",
    "termsTitle": "코드 처리 순서",
    "terms": [
      {
        "code": "strnum = list(str(n))",
        "description": "n을 문자열로 바꾼 뒤, 각 자릿수를 문자 원소로 갖는 리스트를 만듭니다."
      },
      {
        "code": "strnum.sort(reverse=True)",
        "description": "reverse=True로 리스트의 자릿수를 큰 숫자부터 내림차순으로 정렬합니다. sort()는 strnum 자체를 정렬합니다."
      },
      {
        "code": "answer = int(''.join(strnum))",
        "description": "''.join(strnum)으로 문자들을 빈 구분자로 이어 붙이고, int()로 정수로 변환합니다."
      },
      {
        "code": "return answer",
        "description": "정렬한 자릿수로 만든 정수를 반환합니다."
      }
    ],
    "patterns": [
      {
        "title": "작성한 풀이",
        "description": "0 이상의 정수 n의 각 자릿수를 내림차순으로 정렬합니다.",
        "code": "def solution(n):\n    strnum = list(str(n))\n    strnum.sort(reverse=True)\n    answer = int(''.join(strnum))\n    return answer"
      }
    ]
  },
  {
    "id": "perfect-square",
    "title": "정수 제곱근 판별",
    "en": "Perfect Square Check",
    "category": "수학",
    "icon": "√",
    "color": "blue",
    "summary": "n이 완전제곱수이면 다음 정수의 제곱을, 아니면 -1을 반환해요.",
    "tags": [
      "제곱근",
      "완전제곱수",
      "isqrt",
      "math",
      "n**0.5"
    ],
    "concept": "0 이상의 정수 n이 어떤 정수의 제곱인지 확인하는 두 풀이입니다. 완전제곱수이면 그 제곱근에 1을 더한 수의 제곱을 반환하고, 아니면 -1을 반환합니다.",
    "conceptTitle": "핵심 정리",
    "termsTitle": "두 풀이의 핵심과 차이",
    "terms": [
      {
        "code": "n**0.5",
        "description": "n의 제곱근을 부동소수점 수로 계산합니다."
      },
      {
        "code": "int(n**0.5) == n**0.5",
        "description": "제곱근을 정수로 변환한 값과 비교해 정수인지 확인합니다. 매우 큰 정수에서는 부동소수점 정밀도 때문에 잘못 판별할 수 있습니다."
      },
      {
        "code": "((n**0.5)+1) ** 2",
        "description": "제곱근에 1을 더한 뒤 제곱합니다. 첫 번째 풀이의 이 반환값은 float이며, 제곱수가 아니면 정수 -1을 반환합니다."
      },
      {
        "code": "x = isqrt(n)",
        "description": "math.isqrt()는 제곱근의 소수 부분을 버린 값을 정수로 정확하게 구합니다. 정수 연산을 사용하므로 부동소수점 정밀도 문제를 피합니다."
      },
      {
        "code": "x * x == n",
        "description": "구한 정수 x를 다시 제곱해 n과 같으면 완전제곱수입니다. 두 번째 풀이는 (x + 1) ** 2 또는 -1을 모두 int로 반환합니다."
      }
    ],
    "patterns": [
      {
        "title": "풀이 1. n**0.5로 제곱근 계산",
        "description": "제곱근이 정수인지 비교하는 방식입니다. 주신 코드를 그대로 정리했습니다.",
        "code": "def solution(n):\n    answer = 0\n    if(int(n**0.5) == n**0.5):\n        answer =((n**0.5)+1) ** 2\n    else:\n        answer = -1\n    return answer"
      },
      {
        "title": "풀이 2. math.isqrt()로 정수 제곱근 계산",
        "description": "정수 제곱근을 구하고, 다시 제곱해 완전제곱수인지 확인하는 방식입니다.",
        "code": "from math import isqrt\n\ndef solution(n):\n    x = isqrt(n)\n\n    if x * x == n:\n        return (x + 1) ** 2\n    return -1"
      }
    ]
  },
  {
    "id": "list-index",
    "title": "배열에서 요소의 위치 찾기",
    "en": "Find an Element Index",
    "category": "배열",
    "icon": "⌕",
    "color": "green",
    "summary": "index(값)으로 배열에서 원하는 요소의 위치를 찾아요.",
    "tags": [
      "배열",
      "리스트",
      "index",
      "인덱스",
      "위치 찾기",
      "Kim"
    ],
    "concept": "파이썬 리스트에서 배열이름.index(값)을 사용하면 해당 값이 처음 나타나는 위치를 정수로 반환합니다. 인덱스는 0부터 시작해요. 주신 코드는 seoul에서 'Kim'의 위치를 찾아 문장으로 반환합니다.",
    "conceptTitle": "핵심 정리",
    "termsTitle": "코드 처리 순서와 사용법",
    "terms": [
      {
        "code": "answer = '김서방은 '",
        "description": "반환할 문장의 시작 부분을 저장합니다."
      },
      {
        "code": "seoul.index('Kim')",
        "description": "seoul에서 'Kim'이 처음 나타나는 인덱스를 찾습니다. 인덱스는 0부터 시작하며, 값이 없으면 ValueError가 발생합니다."
      },
      {
        "code": "str(seoul.index('Kim'))",
        "description": "찾은 위치는 정수이므로, 문장에 이어 붙이기 위해 str()로 문자열로 바꿉니다."
      },
      {
        "code": "answer += str(seoul.index('Kim')) +'에 있다'",
        "description": "기존 문장 뒤에 위치와 '에 있다'를 이어 붙입니다."
      },
      {
        "code": "return answer",
        "description": "완성된 문장을 반환합니다."
      }
    ],
    "patterns": [
      {
        "title": "작성한 풀이",
        "description": "seoul 리스트에 'Kim'이 들어 있을 때 사용하는 코드입니다.",
        "code": "def solution(seoul):\n    answer = '김서방은 '\n    answer += str(seoul.index('Kim')) +'에 있다'\n    return answer"
      }
    ]
  },
  {
    "id": "list-remove-empty",
    "title": "배열 요소 제거와 빈 배열 확인",
    "en": "Remove Elements & Check Empty Lists",
    "category": "배열",
    "icon": "−",
    "color": "orange",
    "summary": "remove()로 값을 제거하고, if not arr로 배열이 비어 있는지 확인해요.",
    "tags": [
      "배열",
      "리스트",
      "remove",
      "min",
      "빈 배열",
      "if not arr"
    ],
    "concept": "주신 코드는 배열에서 가장 작은 값을 하나 제거합니다. 제거한 뒤 배열이 비어 있으면 -1을 추가하고, 결과 배열을 반환해요. remove(값)은 해당 값이 처음 나타나는 요소 하나를 제거하며, if not arr는 배열이 비어 있을 때 참이 됩니다.",
    "conceptTitle": "핵심 정리",
    "termsTitle": "코드 처리 순서와 사용법",
    "terms": [
      {
        "code": "answer = []",
        "description": "빈 리스트로 answer를 초기화합니다. 이후 answer = arr에서 arr를 가리키도록 바뀝니다."
      },
      {
        "code": "arr.remove(min(arr))",
        "description": "min(arr)로 최솟값을 구한 뒤, remove()로 그 값이 처음 나타나는 요소 하나를 제거합니다. 원본 arr가 직접 바뀝니다."
      },
      {
        "code": "answer = arr",
        "description": "리스트를 복사하는 것이 아니라, answer와 arr가 같은 리스트를 가리키게 합니다."
      },
      {
        "code": "if not arr:",
        "description": "arr가 빈 리스트 []이면 참, 요소가 있으면 거짓입니다. 이 코드에서는 최솟값을 제거한 뒤 비었는지 확인합니다."
      },
      {
        "code": "answer.append(-1)",
        "description": "제거 후 배열이 비어 있으면 -1을 추가합니다. answer와 arr는 같은 리스트이므로 arr에도 반영됩니다."
      },
      {
        "code": "min(arr)",
        "description": "처음부터 arr가 비어 있으면 min(arr)에서 ValueError가 발생합니다. 주신 코드는 원소가 하나 이상인 입력을 전제로 합니다."
      },
      {
        "code": "return answer",
        "description": "최솟값을 제거한 배열을 반환하며, 제거 후 비어 있던 경우에는 [-1]을 반환합니다."
      }
    ],
    "patterns": [
      {
        "title": "작성한 풀이",
        "description": "원소가 하나 이상인 배열에서 최솟값을 하나 제거한 뒤, 빈 배열이면 -1을 넣습니다.",
        "code": "def solution(arr):\n    answer = []\n    arr.remove(min(arr))\n    answer = arr\n    if not arr:\n        answer.append(-1)\n    return answer"
      }
    ]
  },
  {
    "id": "matrix-addition",
    "title": "행렬의 덧셈",
    "en": "Matrix Addition",
    "category": "2차원 배열",
    "icon": "▦",
    "color": "blue",
    "summary": "행과 열을 순회하며 두 2차원 배열의 같은 위치에 있는 값을 더해요.",
    "tags": [
      "2차원 배열",
      "행렬",
      "덧셈",
      "중첩 반복문",
      "행",
      "열"
    ],
    "concept": "같은 크기의 두 2차원 배열 arr1, arr2에서 같은 행·열에 있는 값끼리 더해 새 배열을 만드는 코드입니다. 바깥 반복문은 행 i를, 안쪽 반복문은 열 j를 순회합니다. 각 행의 결과를 row에 모은 뒤 answer에 추가해요.",
    "conceptTitle": "핵심 정리",
    "termsTitle": "코드 처리 순서",
    "terms": [
      {
        "code": "answer = []",
        "description": "덧셈 결과를 담을 새 2차원 배열을 준비합니다."
      },
      {
        "code": "for i in range(0,len(arr1)):",
        "description": "arr1의 행 개수만큼 반복합니다. i는 현재 행의 인덱스입니다."
      },
      {
        "code": "row = []",
        "description": "행을 처리할 때마다 새로운 리스트를 만들어 현재 행의 결과를 담습니다."
      },
      {
        "code": "for j in range(0,len(arr1[i])):",
        "description": "현재 행의 열 개수만큼 반복합니다. j는 현재 열의 인덱스입니다."
      },
      {
        "code": "row.append(arr1[i][j] + arr2[i][j])",
        "description": "두 배열의 i행 j열 값을 더하고, 현재 결과 행의 맨 뒤에 추가합니다."
      },
      {
        "code": "answer.append(row)",
        "description": "안쪽 반복문이 끝나 한 행이 완성되면 answer에 추가합니다. 이 줄은 열 반복문 밖, 행 반복문 안에 있습니다."
      },
      {
        "code": "return answer",
        "description": "완성된 2차원 배열을 반환합니다. 입력 배열은 수정하지 않으며, 두 배열의 행 수와 각 행의 열 수가 같은 경우를 전제로 합니다."
      }
    ],
    "patterns": [
      {
        "title": "작성한 풀이",
        "description": "같은 크기의 두 2차원 배열에서 같은 위치의 원소끼리 더합니다.",
        "code": "def solution(arr1, arr2):\n    answer = []\n    for i in range(0,len(arr1)):\n        row = []\n        for j in range(0,len(arr1[i])):\n            row.append(arr1[i][j] + arr2[i][j])\n        answer.append(row)\n    return answer"
      }
    ]
  },
  {
    "id": "string-isdigit",
    "title": "isdigit()으로 숫자 확인",
    "en": "Check Digit Characters",
    "category": "문자열",
    "icon": "Aa",
    "color": "blue",
    "summary": "isdigit()으로 숫자 문자인지 확인하고, 길이가 4 또는 6인 문자열을 검사해요.",
    "tags": [
      "문자열",
      "isdigit",
      "숫자 확인",
      "len",
      "True",
      "False"
    ],
    "concept": "문자열.isdigit()은 문자열이 비어 있지 않고 모든 문자가 숫자 문자일 때 True를 반환합니다. 주신 코드는 길이가 4 또는 6인지 먼저 검사하고, 각 문자가 숫자인지 하나씩 확인해요. 조건을 만족하지 않으면 바로 False를 반환하고, 끝까지 통과하면 True를 반환합니다.",
    "conceptTitle": "핵심 정리",
    "termsTitle": "isdigit() 사용법과 코드 흐름",
    "terms": [
      {
        "code": "문자열.isdigit()",
        "description": "문자열의 모든 문자가 숫자 문자이면 True, 아니면 False를 반환합니다. 빈 문자열도 False입니다. 부호, 소수점, 공백은 숫자 문자로 판정하지 않습니다."
      },
      {
        "code": "if len(s) != 4 and len(s) != 6:",
        "description": "길이가 4도 아니고 6도 아니면 False를 반환합니다. 즉, 길이가 4 또는 6인 경우에만 다음 검사로 넘어갑니다."
      },
      {
        "code": "for i in range(0, len(s)):",
        "description": "문자열의 처음부터 끝까지 인덱스 i로 순회합니다."
      },
      {
        "code": "if not s[i].isdigit():",
        "description": "s[i] 한 문자가 숫자가 아니면 not에 의해 조건이 참이 되어 바로 False를 반환합니다."
      },
      {
        "code": "return True",
        "description": "길이 조건을 만족하고, 모든 문자가 숫자일 때 True를 반환합니다."
      },
      {
        "code": "isdigit()의 판정 범위",
        "description": "ASCII 숫자 0~9 외에 일부 유니코드 숫자 문자도 True로 판정합니다. 따라서 True라고 해서 모두 int()로 변환할 수 있는 것은 아닙니다."
      }
    ],
    "patterns": [
      {
        "title": "작성한 풀이",
        "description": "길이가 4 또는 6이고, 모든 문자가 숫자인 문자열인지 확인합니다.",
        "code": "def solution(s):\n    if len(s) != 4 and len(s) != 6:\n        return False\n\n    for i in range(0, len(s)):\n        if not s[i].isdigit():\n            return False\n\n    return True"
      }
    ]
  },
  {
    "id": "list-last-element",
    "title": "[-1]로 마지막 요소 접근",
    "en": "Access the Last List Element",
    "category": "배열",
    "icon": "[ ]",
    "color": "green",
    "summary": "answer[-1]로 마지막 요소를 확인해 연속으로 같은 값이 추가되는 것을 막아요.",
    "tags": [
      "배열",
      "리스트",
      "[-1]",
      "음수 인덱스",
      "마지막 요소",
      "연속 중복 제거"
    ],
    "concept": "리스트에서 [-1]은 뒤에서 첫 번째, 즉 마지막 요소에 접근하는 인덱스입니다. 주신 코드는 answer의 마지막 값과 현재 값 arr[i]를 비교해서, 서로 다를 때만 추가합니다. 따라서 순서를 유지하면서 연속으로 반복되는 값만 하나씩 남깁니다.",
    "conceptTitle": "핵심 정리",
    "termsTitle": "[-1]의 의미와 코드 흐름",
    "terms": [
      {
        "code": "answer[-1]",
        "description": "answer의 마지막 요소를 가져옵니다. 여기서 -1은 저장된 값이 아니라 뒤에서부터 세는 인덱스입니다."
      },
      {
        "code": "answer = []",
        "description": "결과를 담을 새 리스트를 준비합니다."
      },
      {
        "code": "for i in range(0,len(arr)):",
        "description": "입력 배열을 처음부터 끝까지 순서대로 확인합니다."
      },
      {
        "code": "if i == 0:",
        "description": "첫 번째 요소는 먼저 answer에 추가합니다. 덕분에 아래에서 answer[-1]에 접근할 때 answer가 비어 있지 않습니다."
      },
      {
        "code": "if answer[-1] != arr[i]:",
        "description": "마지막으로 추가한 값과 현재 값이 다를 때만 현재 값을 추가합니다. 첫 번째 반복에서도 이 조건을 검사하지만, 방금 넣은 값과 같으므로 두 번 추가하지 않습니다."
      },
      {
        "code": "return answer",
        "description": "연속된 중복만 제거한 리스트를 반환합니다. 사이에 다른 값이 있는 중복은 그대로 남으며, 입력이 빈 배열이면 반복 없이 빈 리스트를 반환합니다."
      },
      {
        "code": "빈 리스트에서의 [-1]",
        "description": "빈 리스트에 직접 [-1]로 접근하면 IndexError가 발생합니다. 주신 코드는 첫 요소를 먼저 넣고, 빈 입력에서는 반복문을 실행하지 않아 이 접근을 피합니다."
      }
    ],
    "patterns": [
      {
        "title": "작성한 풀이",
        "description": "마지막으로 추가한 값과 비교해 연속으로 같은 값이 들어가는 것을 막습니다.",
        "code": "def solution(arr):\n    answer = []\n    for i in range(0,len(arr)):\n        if i == 0:\n            answer.append(arr[i])\n        if answer[-1] != arr[i]:\n            answer.append(arr[i])\n    return answer"
      }
    ]
  },
  {
    "id": "gcd-lcm",
    "title": "최대공약수와 최소공배수",
    "en": "Greatest Common Divisor & Least Common Multiple",
    "category": "수학",
    "icon": "∩",
    "color": "green",
    "summary": "math.gcd()로 최대공약수를, math.lcm()으로 최소공배수를 구해요.",
    "tags": [
      "math",
      "gcd",
      "lcm",
      "최대공약수",
      "최소공배수"
    ],
    "concept": "math.gcd(n, m)은 두 정수를 공통으로 나누는 가장 큰 양의 정수인 최대공약수를 구합니다. math.lcm(n, m)은 두 정수의 공통된 양의 배수 중 가장 작은 값인 최소공배수를 구해요. 주신 코드는 두 결과를 순서대로 리스트에 담아 반환합니다.",
    "conceptTitle": "핵심 정리",
    "termsTitle": "함수 사용법과 코드 흐름",
    "terms": [
      {
        "code": "import math",
        "description": "파이썬 표준 라이브러리인 math 모듈을 불러옵니다. 별도 설치는 필요하지 않습니다."
      },
      {
        "code": "math.gcd(n,m)",
        "description": "정수 n, m의 최대공약수를 정수로 반환합니다. 음수를 넣어도 결과는 0 이상이며, 두 값이 모두 0이면 0입니다."
      },
      {
        "code": "math.lcm(n,m)",
        "description": "정수 n, m의 최소공배수를 정수로 반환합니다. 음수를 넣어도 결과는 0 이상이며, 둘 중 하나가 0이면 0입니다. Python 3.9 이상에서 사용할 수 있습니다."
      },
      {
        "code": "return [math.gcd(n,m), math.lcm(n,m)]",
        "description": "[최대공약수, 최소공배수] 순서의 리스트를 반환합니다."
      }
    ],
    "patterns": [
      {
        "title": "작성한 풀이",
        "description": "두 정수의 최대공약수와 최소공배수를 한 번에 반환합니다.",
        "code": "import math\ndef solution(n, m):\n    return [math.gcd(n,m), math.lcm(n,m)]"
      }
    ]
  },
  {
    "id": "math-functions",
    "title": "math 함수 모음",
    "en": "Python Math Reference",
    "category": "수학",
    "icon": "ƒ",
    "color": "purple",
    "summary": "Python 3.12의 math 함수 56개를 용도별로 찾아보는 정리 노트.",
    "tags": [
      "math",
      "함수 모음",
      "gcd",
      "lcm",
      "sqrt",
      "isqrt",
      "cbrt",
      "pow",
      "ceil",
      "floor",
      "trunc",
      "fabs",
      "factorial",
      "comb",
      "perm",
      "prod",
      "fsum",
      "sumprod",
      "exp",
      "exp2",
      "expm1",
      "log",
      "log2",
      "log10",
      "log1p",
      "dist",
      "hypot",
      "radians",
      "degrees",
      "sin",
      "cos",
      "tan",
      "asin",
      "acos",
      "atan",
      "atan2",
      "isclose",
      "isfinite",
      "isinf",
      "isnan",
      "fmod",
      "remainder",
      "copysign",
      "modf",
      "frexp",
      "ldexp",
      "nextafter",
      "ulp",
      "sinh",
      "cosh",
      "tanh",
      "asinh",
      "acosh",
      "atanh",
      "erf",
      "erfc",
      "gamma",
      "lgamma",
      "pi",
      "e",
      "tau",
      "inf",
      "nan"
    ],
    "concept": "math는 파이썬 표준 수학 모듈로 별도 설치 없이 사용할 수 있습니다. 아래 목록은 사이트 실행 환경인 Python 3.12 기준이며, 실수·정수 계산 함수를 용도별로 묶었습니다. 범주 제목을 눌러 펼치거나 접을 수 있어요.",
    "conceptTitle": "핵심 정리",
    "termsTitle": "사용 전에 확인하기",
    "terms": [
      {
        "code": "import math",
        "description": "모듈을 불러온 다음 math.함수이름(...) 형태로 호출합니다."
      },
      {
        "code": "from math import 함수이름",
        "description": "필요한 함수만 불러오면 math.를 붙이지 않고 사용할 수 있습니다."
      },
      {
        "code": "abs(), round(), sum(), min(), max()",
        "description": "이 함수들은 math 소속이 아닌 파이썬 내장 함수입니다."
      },
      {
        "code": "반환 타입과 입력 범위",
        "description": "sqrt(), log() 등 실수 계산 함수는 보통 float를 사용합니다. 큰 정수의 정확한 계산에는 isqrt(), gcd(), lcm() 등의 정수 함수를 사용하세요. 정의역을 벗어나면 ValueError, 결과가 실수 표현 범위를 넘으면 OverflowError가 발생할 수 있습니다."
      }
    ],
    "patterns": [
      {
        "title": "모듈 불러오기",
        "description": "아래 함수들은 math.함수이름(...) 형태로 사용합니다.",
        "code": "import math"
      }
    ],
    "functionGroups": [
      {
        "title": "약수와 배수",
        "open": true,
        "items": [
          {
            "name": "gcd",
            "usage": "math.gcd(*integers)",
            "description": "여러 정수의 최대공약수. 결과는 0 이상이며, 모든 입력이 0이면 0입니다."
          },
          {
            "name": "lcm",
            "usage": "math.lcm(*integers)",
            "description": "여러 정수의 최소공배수. 입력 중 하나라도 0이면 0입니다. Python 3.9 이상."
          }
        ]
      },
      {
        "title": "제곱근과 거듭제곱",
        "open": true,
        "items": [
          {
            "name": "sqrt",
            "usage": "math.sqrt(x)",
            "description": "x의 제곱근을 float로 반환합니다. 실수 입력은 x ≥ 0이어야 합니다."
          },
          {
            "name": "isqrt",
            "usage": "math.isqrt(n)",
            "description": "0 이상 정수 n의 제곱근을 내림한 정수를 정확하게 반환합니다. 완전제곱수 여부는 x = isqrt(n) 후 x*x == n으로 확인합니다."
          },
          {
            "name": "cbrt",
            "usage": "math.cbrt(x)",
            "description": "x의 세제곱근을 반환합니다. 음수도 처리합니다. Python 3.11 이상."
          },
          {
            "name": "pow",
            "usage": "math.pow(x, y)",
            "description": "x의 y제곱을 float로 반환합니다. 정수의 정확한 거듭제곱이 필요하면 ** 또는 내장 pow()를 사용하세요."
          }
        ]
      },
      {
        "title": "올림·내림·절댓값",
        "open": true,
        "items": [
          {
            "name": "ceil",
            "usage": "math.ceil(x)",
            "description": "x 이상인 가장 작은 정수로 올림합니다. 음수에서도 수직선의 큰 값 쪽으로 이동합니다."
          },
          {
            "name": "floor",
            "usage": "math.floor(x)",
            "description": "x 이하인 가장 큰 정수로 내림합니다. 음수에서는 0에서 멀어질 수 있습니다."
          },
          {
            "name": "trunc",
            "usage": "math.trunc(x)",
            "description": "소수 부분을 버려 0 방향의 정수로 만듭니다. 음수에서는 floor()와 결과가 다를 수 있습니다."
          },
          {
            "name": "fabs",
            "usage": "math.fabs(x)",
            "description": "절댓값을 float로 반환합니다. 내장 abs()는 정수 입력의 정수 타입을 유지할 수 있습니다."
          }
        ]
      },
      {
        "title": "팩토리얼·순열·조합·합과 곱",
        "open": true,
        "items": [
          {
            "name": "factorial",
            "usage": "math.factorial(n)",
            "description": "0 이상 정수 n의 팩토리얼 n!을 반환합니다. 0!은 1입니다."
          },
          {
            "name": "comb",
            "usage": "math.comb(n, k)",
            "description": "중복 없이 k개를 고르는 조합 수. 순서는 구별하지 않습니다. n, k는 0 이상 정수이며, k > n이면 0입니다."
          },
          {
            "name": "perm",
            "usage": "math.perm(n, k=None)",
            "description": "중복 없이 k개를 순서 있게 고르는 순열 수. k 생략 시 n!입니다. n, k는 0 이상 정수이며, k > n이면 0입니다."
          },
          {
            "name": "prod",
            "usage": "math.prod(iterable, start=1)",
            "description": "반복 가능한 값들의 곱을 구합니다. 비어 있으면 start를 반환합니다."
          },
          {
            "name": "fsum",
            "usage": "math.fsum(iterable)",
            "description": "부동소수점 값들의 합을 정밀도 손실을 줄여 계산합니다. 정수 합을 정확히 유지하려면 내장 sum()이 알맞습니다."
          },
          {
            "name": "sumprod",
            "usage": "math.sumprod(p, q)",
            "description": "두 반복 가능한 객체에서 같은 위치끼리 곱한 값들의 합을 구합니다. 길이가 같아야 합니다. Python 3.12 이상."
          }
        ]
      },
      {
        "title": "지수와 로그",
        "open": false,
        "items": [
          {
            "name": "exp",
            "usage": "math.exp(x)",
            "description": "e의 x제곱을 구합니다."
          },
          {
            "name": "exp2",
            "usage": "math.exp2(x)",
            "description": "2의 x제곱을 구합니다. Python 3.11 이상."
          },
          {
            "name": "expm1",
            "usage": "math.expm1(x)",
            "description": "e의 x제곱에서 1을 뺀 값. x가 0에 가까울 때 exp(x)-1보다 정밀도에 유리합니다."
          },
          {
            "name": "log",
            "usage": "math.log(x, base=math.e)",
            "description": "로그를 계산합니다. 밑을 생략하면 자연로그입니다. x > 0이고, 밑은 양수이며 1이 아니어야 합니다."
          },
          {
            "name": "log2",
            "usage": "math.log2(x)",
            "description": "밑이 2인 로그. x > 0이어야 합니다."
          },
          {
            "name": "log10",
            "usage": "math.log10(x)",
            "description": "밑이 10인 로그. x > 0이어야 합니다."
          },
          {
            "name": "log1p",
            "usage": "math.log1p(x)",
            "description": "1+x의 자연로그. x > -1이며, x가 0에 가까울 때 정밀도에 유리합니다."
          }
        ]
      },
      {
        "title": "거리·각도·삼각함수",
        "open": false,
        "items": [
          {
            "name": "dist",
            "usage": "math.dist(p, q)",
            "description": "차원이 같은 두 점 사이의 유클리드 거리를 구합니다."
          },
          {
            "name": "hypot",
            "usage": "math.hypot(*coordinates)",
            "description": "좌표 제곱의 합의 제곱근, 즉 원점에서 그 점까지의 거리를 구합니다."
          },
          {
            "name": "radians",
            "usage": "math.radians(x)",
            "description": "도(degree)를 라디안으로 변환합니다."
          },
          {
            "name": "degrees",
            "usage": "math.degrees(x)",
            "description": "라디안을 도(degree)로 변환합니다."
          },
          {
            "name": "sin",
            "usage": "math.sin(x)",
            "description": "라디안 각도 x의 사인."
          },
          {
            "name": "cos",
            "usage": "math.cos(x)",
            "description": "라디안 각도 x의 코사인."
          },
          {
            "name": "tan",
            "usage": "math.tan(x)",
            "description": "라디안 각도 x의 탄젠트."
          },
          {
            "name": "asin",
            "usage": "math.asin(x)",
            "description": "아크사인을 라디안으로 반환합니다. -1 ≤ x ≤ 1."
          },
          {
            "name": "acos",
            "usage": "math.acos(x)",
            "description": "아크코사인을 라디안으로 반환합니다. -1 ≤ x ≤ 1."
          },
          {
            "name": "atan",
            "usage": "math.atan(x)",
            "description": "아크탄젠트를 라디안으로 반환합니다."
          },
          {
            "name": "atan2",
            "usage": "math.atan2(y, x)",
            "description": "점 (x, y)의 방향 각도를 라디안으로 반환하며 사분면을 구별합니다. 인수 순서는 y, x입니다."
          }
        ]
      },
      {
        "title": "실수 비교와 상태 확인",
        "open": false,
        "items": [
          {
            "name": "isclose",
            "usage": "math.isclose(a, b, rel_tol=1e-9, abs_tol=0.0)",
            "description": "두 값이 허용 오차 안에서 가까운지 판정합니다. 0 근처를 비교할 때는 적절한 abs_tol을 지정하세요."
          },
          {
            "name": "isfinite",
            "usage": "math.isfinite(x)",
            "description": "무한대와 NaN이 아닌 유한한 값인지 확인합니다."
          },
          {
            "name": "isinf",
            "usage": "math.isinf(x)",
            "description": "양수 또는 음수 무한대인지 확인합니다."
          },
          {
            "name": "isnan",
            "usage": "math.isnan(x)",
            "description": "숫자가 아님을 나타내는 NaN인지 확인합니다."
          }
        ]
      },
      {
        "title": "나머지·부호·실수 표현",
        "open": false,
        "items": [
          {
            "name": "fmod",
            "usage": "math.fmod(x, y)",
            "description": "실수 나머지로, 결과 부호는 x를 따릅니다. % 연산의 부호 규칙과 다릅니다. y는 0이 아니어야 합니다."
          },
          {
            "name": "remainder",
            "usage": "math.remainder(x, y)",
            "description": "x - n*y를 반환하며 n은 x/y에 가장 가까운 정수입니다. 정확히 중간이면 짝수 정수를 선택합니다. y는 0이 아니어야 합니다."
          },
          {
            "name": "copysign",
            "usage": "math.copysign(x, y)",
            "description": "x의 절댓값에 y의 부호를 붙인 float를 반환합니다."
          },
          {
            "name": "modf",
            "usage": "math.modf(x)",
            "description": "(소수 부분, 정수 부분) 튜플을 반환합니다. 둘 다 float이고 x의 부호를 따릅니다."
          },
          {
            "name": "frexp",
            "usage": "math.frexp(x)",
            "description": "x = m * 2**e가 되는 (m, e)를 반환합니다. x가 0이 아니면 0.5 ≤ abs(m) < 1입니다."
          },
          {
            "name": "ldexp",
            "usage": "math.ldexp(x, i)",
            "description": "x * 2**i를 계산합니다."
          },
          {
            "name": "nextafter",
            "usage": "math.nextafter(x, y, steps=1)",
            "description": "x에서 y 방향으로 steps번 이동한 다음 표현 가능한 부동소수점 값을 반환합니다. steps 인수는 Python 3.12 이상."
          },
          {
            "name": "ulp",
            "usage": "math.ulp(x)",
            "description": "x의 마지막 유효 비트에 해당하는 간격을 반환합니다. 부동소수점 정밀도를 다룰 때 사용합니다."
          }
        ]
      },
      {
        "title": "쌍곡선 함수",
        "open": false,
        "items": [
          {
            "name": "sinh",
            "usage": "math.sinh(x)",
            "description": "쌍곡사인."
          },
          {
            "name": "cosh",
            "usage": "math.cosh(x)",
            "description": "쌍곡코사인."
          },
          {
            "name": "tanh",
            "usage": "math.tanh(x)",
            "description": "쌍곡탄젠트."
          },
          {
            "name": "asinh",
            "usage": "math.asinh(x)",
            "description": "역쌍곡사인."
          },
          {
            "name": "acosh",
            "usage": "math.acosh(x)",
            "description": "역쌍곡코사인. x ≥ 1."
          },
          {
            "name": "atanh",
            "usage": "math.atanh(x)",
            "description": "역쌍곡탄젠트. -1 < x < 1."
          }
        ]
      },
      {
        "title": "특수 함수",
        "open": false,
        "items": [
          {
            "name": "erf",
            "usage": "math.erf(x)",
            "description": "오차 함수로, 정규분포 등의 계산에 사용합니다."
          },
          {
            "name": "erfc",
            "usage": "math.erfc(x)",
            "description": "상보 오차 함수로 1-erf(x)에 해당하며, 큰 x에서 뺄셈에 따른 정밀도 손실을 줄입니다."
          },
          {
            "name": "gamma",
            "usage": "math.gamma(x)",
            "description": "감마 함수. 양의 정수 n에서 (n-1)!과 같습니다. 0과 음의 정수는 정의역에 포함되지 않습니다."
          },
          {
            "name": "lgamma",
            "usage": "math.lgamma(x)",
            "description": "감마 함수 절댓값의 자연로그. 0과 음의 정수는 정의역에 포함되지 않습니다."
          }
        ]
      }
    ],
    "constants": [
      {
        "usage": "math.pi",
        "description": "원주율 π"
      },
      {
        "usage": "math.e",
        "description": "자연상수 e"
      },
      {
        "usage": "math.tau",
        "description": "2π"
      },
      {
        "usage": "math.inf",
        "description": "양의 무한대"
      },
      {
        "usage": "math.nan",
        "description": "숫자가 아님을 나타내는 NaN. 자기 자신과 ==로 비교해도 False이므로 math.isnan()으로 확인합니다."
      }
    ]
  },
  {
    "id": "dictionary-last-position",
    "title": "딕셔너리로 문자별 최근 위치 기록",
    "en": "Track Last Positions with a Dictionary",
    "category": "딕셔너리",
    "icon": "{ }",
    "color": "purple",
    "summary": "문자를 키, 가장 최근 인덱스를 값으로 저장해 같은 문자가 앞에 나온 위치와의 거리를 구해요.",
    "tags": [
      "딕셔너리",
      "dict",
      "키",
      "값",
      "in",
      "not in",
      "최근 위치",
      "문자열"
    ],
    "concept": "딕셔너리(dict)는 키(key)와 값(value)을 한 쌍으로 저장하는 자료구조입니다. 리스트가 숫자 인덱스로 값을 찾는다면, 딕셔너리는 키로 값을 찾습니다. 이 코드에서는 문자를 키로, 그 문자가 가장 최근에 등장한 인덱스를 값으로 저장해요. 처음 나온 문자에는 -1을, 다시 나온 문자에는 현재 위치와 가장 가까운 이전 위치의 차이를 결과에 담습니다.",
    "conceptTitle": "딕셔너리 개념",
    "termsTitle": "키·값의 의미와 코드 흐름",
    "terms": [
      {
        "code": "check ={}",
        "description": "빈 딕셔너리를 만듭니다. check에는 문자와 그 문자의 최근 위치를 짝지어 저장합니다."
      },
      {
        "code": "키와 값",
        "description": "이 코드에서 키는 s[i]라는 문자, 값은 그 문자의 최근 인덱스입니다. 키는 중복되지 않으며, 같은 키에 다시 값을 넣으면 기존 값을 덮어씁니다. 문자열은 딕셔너리의 키로 사용할 수 있습니다."
      },
      {
        "code": "for i in range(len(s)):",
        "description": "문자열을 왼쪽부터 순서대로 순회합니다. i는 현재 위치, s[i]는 현재 문자입니다."
      },
      {
        "code": "if s[i] not in check:",
        "description": "현재 문자가 딕셔너리의 키로 없는지 확인합니다. in과 not in은 값이 아닌 키의 존재 여부를 검사합니다."
      },
      {
        "code": "answer.append(-1)",
        "description": "키가 없다면 지금까지 등장하지 않은 문자이므로 결과에 -1을 추가합니다."
      },
      {
        "code": "check[s[i]]",
        "description": "현재 문자를 키로 사용해 저장된 최근 인덱스를 조회합니다. 없는 키를 직접 조회하면 KeyError가 나지만, 이 코드에서는 키가 있는 else에서만 조회합니다. 저장된 인덱스가 0이어도 정상적으로 처리됩니다."
      },
      {
        "code": "answer.append(i - check[s[i]])",
        "description": "현재 위치에서 가장 최근에 등장한 위치를 빼, 앞에 있는 같은 문자와의 거리를 결과에 추가합니다."
      },
      {
        "code": "check[s[i]] = i",
        "description": "처음 본 키면 새로 저장하고, 이미 있는 키면 최근 위치를 현재 인덱스로 갱신합니다. 거리 계산이 끝난 뒤 갱신해야 이전 위치와 비교할 수 있습니다. if와 else 바깥에 있으므로 모든 문자에서 실행됩니다."
      },
      {
        "code": "return answer",
        "description": "문자마다 처음 등장했다면 -1, 다시 등장했다면 최근 같은 문자까지의 거리를 담은 리스트를 반환합니다. 빈 문자열이면 빈 리스트를 반환합니다."
      },
      {
        "code": "조회·저장 비용",
        "description": "딕셔너리의 키 확인·조회·갱신은 평균 O(1)입니다. 문자열 길이를 N, 서로 다른 문자 수를 U라고 하면 전체 시간은 평균 O(N), check의 공간은 O(U)이며 결과 리스트는 O(N) 공간을 사용합니다."
      }
    ],
    "patterns": [
      {
        "title": "작성한 풀이",
        "description": "딕셔너리에 문자별 최근 위치를 기록하며 이전에 나온 같은 문자와의 거리를 구합니다.",
        "code": "def solution(s):\n    answer = []\n    check ={}\n\n    for i in range(len(s)):\n        if s[i] not in check:\n            answer.append(-1)\n        else:\n            answer.append(i - check[s[i]])\n\n        check[s[i]] = i\n\n    return answer"
      }
    ]
  },
  {
    "id": "character-code",
    "title": "ord()·chr()로 문자 코드 변환",
    "en": "Character Codes with ord & chr",
    "category": "문자열",
    "icon": "Aa",
    "color": "blue",
    "summary": "ord()로 문자를 숫자로, chr()로 숫자를 문자로 바꾸고 알파벳을 순환시켜요.",
    "tags": [
      "문자열",
      "ord",
      "chr",
      "아스키",
      "ASCII",
      "유니코드",
      "시저 암호",
      "% 26"
    ],
    "concept": "ord()는 한 문자를 정수 코드로, chr()는 정수 코드를 문자로 바꿉니다. 주신 코드는 이 변환을 이용해 영문 알파벳을 n칸 뒤로 이동하고, Z 또는 z를 넘으면 같은 대소문자의 처음으로 돌아갑니다. 입력은 영문 대소문자와 공백, n은 0 이상의 정수를 전제로 하며 공백은 유지합니다.",
    "conceptTitle": "문자 코드 변환 개념",
    "termsTitle": "아스키 코드와 처리 순서",
    "terms": [
      {
        "code": "ord(i)",
        "description": "길이가 1인 문자열 i의 유니코드 코드 포인트를 정수로 반환합니다. 영문 알파벳은 ASCII와 같은 코드값을 사용합니다. ord()는 이미 정수를 반환하므로 코드의 int(ord(i))에서 int()는 생략해도 같은 값입니다."
      },
      {
        "code": "chr(정수 코드)",
        "description": "정수 코드에 해당하는 문자 하나를 반환합니다. ord()와 반대 방향의 변환입니다."
      },
      {
        "code": "'A' = 65, 'Z' = 90 / 'a' = 97, 'z' = 122",
        "description": "영문 대문자와 소문자는 각각 코드가 연속으로 배치되어 있습니다. 65와 97은 각 범위의 시작, 90과 122는 끝입니다."
      },
      {
        "code": "lists = list(s)",
        "description": "문자열을 한 글자씩 담은 리스트로 바꿉니다. for문의 i는 숫자 인덱스가 아니라 문자 하나입니다."
      },
      {
        "code": "if i == ' ':",
        "description": "공백이면 그대로 결과에 추가합니다. 알파벳 이동 계산을 적용하지 않습니다."
      },
      {
        "code": "(int(ord(i)) -65 + n) % 26 + 65",
        "description": "대문자 코드를 A 기준의 0~25로 바꾸고 n을 더합니다. % 26으로 26글자 범위 안을 순환시킨 뒤 65를 더해 대문자 코드로 복원하고, chr()로 문자로 만듭니다."
      },
      {
        "code": "(int(ord(i)) -97 + n) % 26 + 97",
        "description": "소문자는 a의 코드 97을 기준으로 같은 계산을 합니다. z를 넘으면 a부터 다시 이어집니다."
      },
      {
        "code": "answer += chr(int(ord(i)) + n)",
        "description": "알파벳 범위를 넘어가지 않는 경우에는 문자 코드에 n을 더한 뒤 chr()로 바꿔 결과 문자열에 붙입니다."
      },
      {
        "code": "return answer",
        "description": "대소문자와 공백을 유지하며 알파벳을 이동한 결과를 반환합니다. 이 코드는 임의의 유니코드 문자 전체를 암호화하는 방식이 아니라 영문 알파벳과 공백을 위한 풀이입니다."
      }
    ],
    "patterns": [
      {
        "title": "작성한 풀이",
        "description": "주신 코드를 그대로 수록했습니다. 영문 알파벳을 n칸 이동하고 범위를 넘으면 순환합니다.",
        "code": "def solution(s, n):\n    answer = ''\n    lists = list(s)\n    for i in lists:\n        if i == ' ':\n            answer += ' '\n        elif int(ord(i)) <= 90 and int(ord(i)) + n > 90:\n            answer += chr((int(ord(i)) -65 + n) % 26 + 65)\n        elif int(ord(i)) <= 122 and int(ord(i)) + n > 122:\n            answer += chr((int(ord(i)) -97 + n) % 26 + 97)\n        else:\n            answer += chr(int(ord(i)) + n)\n    return answer"
      }
    ]
  }
];
