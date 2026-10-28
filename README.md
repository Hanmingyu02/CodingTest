# 파이노트

파이썬 코딩테스트를 공부하는 한국어 학습 노트 웹사이트입니다. 서버·데이터베이스·npm 의존성 없이 정적 프론트엔드만 배포합니다. 웹 UI는 HTML/CSS/JavaScript, 학습 예제와 빌드·검증 도구는 Python입니다.

## 기능

- 배열·리스트, 2차원 배열, 완전탐색, DP, 스택·큐, 이진탐색, DFS·BFS, 그리디의 8개 노트
- Python 예제 16개 및 연습 답안 8개, 개념·활용 상황·시간 복잡도·주의점
- 구문 강조, 코드 복사, 검색, 난이도 필터, 북마크, 학습 진도
- 브라우저 localStorage에 기록 저장 (기기 간 동기화 없음)
- 모바일 레이아웃, 키보드 접근성, `/`로 검색창 이동

웹에서 Python 코드를 실행하지 않습니다. 복사한 예제는 로컬 Python 또는 온라인 Python 환경에서 실행하세요. Google Fonts를 불러오지 못하면 시스템 글꼴을 사용합니다.

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
