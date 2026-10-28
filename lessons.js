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
  }
];
