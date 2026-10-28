# 파이노트

파이썬 코딩테스트를 공부하는 한국어 학습 노트 웹사이트입니다. 서버·데이터베이스·npm 의존성 없이 정적 프론트엔드만 배포합니다. 웹 UI는 HTML/CSS/JavaScript, 학습 예제와 빌드·검증 도구는 Python입니다.

## 학습 내용

사용자가 제공한 내용만 주제별로 정리합니다. 요청하지 않은 주제, 코드 예제, 연습 문제는 추가하지 않습니다.

- 수학 → 두 정수 사이의 합: `(a + b) * (abs(a - b) + 1) // 2`
- 형 변환 → 문자열 → 숫자 변환: `int(s)`가 앞의 `+`, `-` 부호를 자동으로 처리
- 배열 → 배열 앞뒤에 원소 추가: `배열이름.insert(0, 값)`, `배열이름.append(값)`
- 정렬 → 정수의 자릿수 내림차순 정렬: 사용자가 작성한 `solution(n)` 코드와 처리 순서
- 수학 → 정수 제곱근 판별: `n**0.5`와 `math.isqrt()` 두 풀이 및 차이
- 배열 → 배열에서 요소의 위치 찾기: `index()`로 위치를 찾아 문장으로 반환하는 사용자 코드
- 배열 → 배열 요소 제거와 빈 배열 확인: `remove(min(arr))`, `if not arr`를 사용하는 사용자 코드
- 왼쪽 메뉴와 목록에서 같은 자료구조·주제별로 노트를 묶어 표시
- 검색, 분류 필터, 코드 복사, 북마크, 학습 진도
- 학습 기록은 브라우저 localStorage에 저장하며 기기 간 동기화하지 않습니다.

웹에서는 Python 코드를 실행하지 않습니다. Google Fonts를 불러오지 못하면 시스템 글꼴을 사용합니다.

## 개발 및 검증

```bash
cd /workspace/CodingTest
python3 scripts/verify.py
python3 scripts/build.py
python3 -m http.server 8000 --directory dist --bind 0.0.0.0
```

Python 3 및 Node.js가 필요하며 외부 패키지는 없습니다. 기존 체크아웃을 사용하고 별도 Git worktree는 만들지 않습니다. 서버 명령은 개발용입니다. GitHub Pages에서는 서버를 실행하지 않습니다. `dist/`는 생성 결과물로 Git에서 제외됩니다. 내용은 `lessons.js`, 화면은 `app.js`, 디자인은 `styles.css`에서 수정합니다.

## GitHub Pages 배포

1. 저장소 **Settings → Pages → Build and deployment → Source**를 **GitHub Actions**로 선택합니다.
2. `main`에 푸시하거나 **Actions → Deploy Python study notes to GitHub Pages → Run workflow**를 실행합니다.
3. 워크플로가 예제 검증 후 정적 파일만 빌드·배포합니다. 성공한 실행의 `github-pages` 환경에 게시 주소가 표시됩니다.

기본 프로젝트 주소는 `https://hanmingyu02.github.io/CodingTest/`입니다. 배포 성공 전에는 접근되지 않을 수 있습니다. Pages 및 Actions 권한이 필요합니다. 상대 경로를 사용하므로 프로젝트 하위 경로에서도 동작합니다.
