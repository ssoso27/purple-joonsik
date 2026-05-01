# Lumi Planner Preview

Lumi Planner는 귀여운 캐릭터 보상형 데스크톱 플래너 앱의 메인 화면 미리보기 프로젝트입니다. 현재 목표는 실제 기능 완성이 아니라, 사용자가 제시한 레퍼런스 화면처럼 보이는 첫 화면을 안정적으로 재현하는 것입니다.

이 프로젝트는 웹 화면과 데스크톱 앱 화면을 모두 확인할 수 있습니다.

- 웹 미리보기: 브라우저에서 화면만 확인
- 데스크톱 앱 미리보기: Electron 창으로 실제 앱처럼 확인

## 현재 상태

- React + TypeScript + Vite 기반 화면 구현
- Electron으로 데스크톱 앱 창 실행 가능
- 데이터 저장, 로그인, 실제 할 일 추가 같은 기능은 아직 없음
- 현재 화면은 정적 미리보기이며, 디자인 검증용입니다.

## 먼저 알아야 할 중요한 파일

- `src/App.tsx`: 화면에 보이는 텍스트, 할 일 목록, 메모, 기록, 캐릭터 대사
- `src/App.css`: 화면 레이아웃, 카드, 사이드바, 캐릭터, 진행률 원형 스타일
- `src/index.css`: 전체 배경과 기본 폰트/리셋
- `electron/main.cjs`: 데스크톱 앱 창 크기와 Electron 실행 설정
- `docs/ui-agent-guideline.md`: UI 작업 시 반드시 지켜야 하는 규칙
- `docs/reference/lumi-planner-main-reference.png`: 사용자가 준 원본 레퍼런스
- `docs/reference/lumi-planner-rendered-current.png`: 마지막으로 확인한 현재 렌더 화면
- `.claude-context.md`: 이어받는 사람을 위한 작업 메모

## 설치해야 하는 것

1. Node.js

   권장: Node.js 20 이상

   확인:

   ```bash
   node -v
   npm -v
   ```

2. Git

   확인:

   ```bash
   git --version
   ```

3. 의존성 설치

   프로젝트 폴더에서 한 번 실행합니다.

   ```bash
   npm install
   ```

## 실행 방법

### 웹으로 보기

브라우저에서 빠르게 화면을 확인할 때 사용합니다.

```bash
npm run dev:web
```

터미널에 표시되는 주소를 브라우저에서 엽니다. 보통 아래 주소입니다.

```text
http://localhost:5173
```

### 데스크톱 앱으로 보기

Electron 창으로 실제 앱처럼 확인할 때 사용합니다.

```bash
npm run dev
```

이 명령은 내부적으로 웹 서버를 켠 뒤 Electron 앱 창을 엽니다.

## 빌드와 검사

수정 후에는 아래 두 명령을 확인하는 것이 좋습니다.

```bash
npm run lint
npm run build
```

- `npm run lint`: 코드 규칙 검사
- `npm run build`: 실제 배포용 파일이 만들어지는지 검사

데스크톱 앱 패키징은 아래 명령입니다.

```bash
npm run build:electron
```

성공하면 `release/` 폴더에 결과물이 생깁니다.

## 화면 작업 시 절대 주의할 점

이 프로젝트는 디자인 재현이 핵심입니다. 화면이 잘린다고 해서 콘텐츠를 줄이면 안 됩니다.

금지 사항:

- 할 일 5개를 임의로 3개로 줄이기
- `60%`, `3 / 5`, `120 P` 같은 레퍼런스 숫자를 임의로 바꾸기
- 채팅창을 보이게 하려고 다른 카드나 문구를 삭제하기
- 원형 진행률, 코인, 캐릭터를 찌그러뜨리기
- 수정한 부분만 보고 전체 화면 균형을 확인하지 않기

올바른 해결 방식:

- 레이아웃, 간격, 카드 높이, 앱 창 크기, CSS 비율 보호 규칙으로 해결
- 수정 대상과 전체 화면을 모두 레퍼런스와 비교
- 최신 코드가 렌더되는 포트인지 확인
- 확인 후 `docs/reference/lumi-planner-rendered-current.png`를 갱신

## 레퍼런스 확인 방법

원본 레퍼런스:

```text
docs/reference/lumi-planner-main-reference.png
```

현재 렌더 캡처:

```text
docs/reference/lumi-planner-rendered-current.png
```

화면을 고친 뒤에는 반드시 두 이미지를 비교해야 합니다.

확인할 것:

- 사이드바 폭과 배치
- 오늘 할 일 카드의 할 일 개수와 밀도
- 진행률 원형이 완전한 원인지
- 포인트 카드 숫자와 정렬
- 메모/최근 기록 카드 간격
- 하단 캐릭터, 말풍선, 입력창이 잘리지 않는지
- 전체 화면이 레퍼런스보다 과하게 넓거나 빈 공간이 많지 않은지

## 현재 브랜치와 원격

현재 작업 브랜치:

```text
cursor/lumi-planner-preview
```

원격 저장소:

```text
git@github.com:ssoso27/purple-joonsik.git
```

## 비개발자를 위한 작업 흐름

1. 프로젝트 폴더를 엽니다.
2. `npm install`을 한 번 실행합니다.
3. `npm run dev`로 앱을 켭니다.
4. 화면을 보고 레퍼런스와 비교합니다.
5. 수정 요청이 있으면 `docs/ui-agent-guideline.md`와 `.claude-context.md`를 먼저 읽게 합니다.
6. 수정 후 `npm run lint`, `npm run build`를 실행합니다.
7. 화면 캡처를 갱신하고 다시 레퍼런스와 비교합니다.

## 이어받는 사람에게

이 프로젝트는 아직 제품 기능 개발 단계가 아니라 디자인 프리뷰 단계입니다. 기능을 많이 붙이기보다, 레퍼런스 화면의 밀도와 균형을 깨지 않게 유지하는 것이 우선입니다.

특히 하단 채팅 영역, 진행률 원형, 할 일 카드의 정보량은 이미 한 번 문제가 있었던 부분입니다. 수정할 때는 반드시 부분 화면과 전체 화면을 함께 확인하세요.
