# 코테준비

수학·문자열·배열·정렬·알고리즘의 다섯 카테고리로 구성한 개인 코딩테스트 노트입니다. 이전 학습 내용은 초기화했으며 새로 요청받은 내용만 추가합니다. 요청하지 않은 학습 내용은 추가하지 않습니다.

- 카테고리별 탐색, 노트 검색, 모바일 메뉴
- 카테고리는 노트가 없어도 항상 표시합니다.
- 이전 노트의 진도·북마크 기록은 제거하며, 다른 사이트 저장 데이터는 건드리지 않습니다.
- 서버, 데이터베이스, npm 패키지 및 외부 글꼴 없이 정적 프론트엔드만 배포합니다.

## 실행과 검증

```bash
cd /workspace/CodingTest
python3 scripts/verify.py
python3 scripts/build.py
python3 -m http.server 8000 --directory dist --bind 0.0.0.0
```

Python 3와 Node.js가 필요합니다. 기존 체크아웃을 사용하며 별도 Git worktree는 만들지 않습니다. `dist/`는 Git에서 제외한 빌드 결과입니다. 빌드 시 파일 내용에 따른 버전을 자산 URL에 붙여 브라우저가 이전 학습 파일을 재사용하지 않도록 합니다.

## 현재 학습 내용

- 수학 → 정수 나누기: `a // b`
- 수학 → 제곱근으로 약수 개수 구하기: 약수 쌍을 세고 완전제곱수의 중복을 빼는 핵심 코드
- 문자열 → 특정 문자 개수 세기: `문자열이름.count("문자")`
- 문자열 → 문자열 슬라이싱 [0:2]: `문자열이름[0:2]`
- 정렬 → 배열 내림차순 정렬: `arr.sort(reverse=True)`
- 정렬 → 문자열 내림차순 정렬: `sorted()`와 `join()`의 핵심 구문
- 정렬 → map() 문자열 변환과 lambda 정렬: `map(str, numbers)`, `key=lambda x: x * 3`
- 배열 → 특정 값의 인덱스 찾기: `arr.index(값)`
- 배열 → 배열의 마지막 요소 확인: `배열이름[-1]`
- 문자열 → 문자와 아스키코드 변환: `ord()`, `chr()`
- 배열 → 배열 요소 제거: `remove()`, `pop()`
- 알고리즘 → 큐에서 인덱스 추적과 우선순위 비교: 튜플, `pop(0)`, `if Q`, `max(Q)[0]`
- 배열 → 2차원 리스트 접근과 값의 합계: `[행][열]`, 리스트 컴프리헨션, `sum()`
- 알고리즘 → 시간 단위 시뮬레이션과 큐: 시간 진행·상태 갱신·종료 조건의 활용 상황
- 알고리즘 → heapq로 최소 힙 사용하기: import, heapify, 최소값 확인, heappop, heappush

## 내용 관리

`lessons.js`의 `window.NOTEBOOK.categories`에 요청한 5개 카테고리가 있습니다. `notes`에는 사용자가 제공하거나 명시적으로 요청한 내용만 추가합니다. 노트는 `id`, `title`, `category`(카테고리 ID), `description`, `usages`로 구성합니다. `usages`의 각 항목은 `title`(기능), `code`(짧은 사용 구문), `meaning`(사용법), `application`(활용 상황)을 담습니다. 풀이 전체를 이어 쓰지 않고 기능별로 정리합니다. 같은 카테고리의 노트는 목록에서 함께 표시됩니다. `related`에는 관련 노트 ID를 넣어 설명의 중복 없이 연결합니다. 화면 동작은 `app.js`, 디자인은 `styles.css`에서 관리합니다.

## 배포

GitHub Pages의 Source는 **GitHub Actions**를 사용합니다. `main`에 푸시하면 `.github/workflows/pages.yml`이 데이터 검증·빌드 후 정적 파일만 배포합니다. 수동 배포는 같은 워크플로의 **Run workflow**로 실행합니다.

게시 주소: https://hanmingyu02.github.io/CodingTest/
