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
  }
];
