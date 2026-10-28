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
  }
];
