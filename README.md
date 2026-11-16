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

- 문자열 → 특정 문자 개수 세기: `문자열이름.count("문자")`
- 정렬 → 배열 내림차순 정렬: `arr.sort(reverse=True)`
- 배열 → 특정 값의 인덱스 찾기: `arr.index(값)`

## 내용 관리

`lessons.js`의 `window.NOTEBOOK.categories`에 요청한 5개 카테고리가 있습니다. `notes`에는 사용자가 제공하거나 명시적으로 요청한 내용만 추가합니다. 노트는 `id`, `title`, `category`(카테고리 ID), `description`, `code`, `text`로 구성합니다. 같은 카테고리의 노트는 목록에서 함께 표시됩니다. 화면 동작은 `app.js`, 디자인은 `styles.css`에서 관리합니다.

## 배포

GitHub Pages의 Source는 **GitHub Actions**를 사용합니다. `main`에 푸시하면 `.github/workflows/pages.yml`이 데이터 검증·빌드 후 정적 파일만 배포합니다. 수동 배포는 같은 워크플로의 **Run workflow**로 실행합니다.

게시 주소: https://hanmingyu02.github.io/CodingTest/
