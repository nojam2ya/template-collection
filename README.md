> ✨ This is a personal React 18+ template to be scalable, testable, and easily maintainable for both small and large side projects.

# Templates

React 기반의 웹 앱 템플릿입니다. \
React + (Vite or CRA) + TypeScript 

## 📦 Stack (공통)
- React(18.x / 19.x)
- TailwindCSS 4
- Vite or CRA
- React Router(v6 / v7)
- Chart.js + React-ChartJS-2
- Zustand, Jotai, Recoil
- React Hook Form, React Query 5
- Jest, Testing Library
- Styled-components, Heroicons, FontAwesome
- OpenLayers(OL)
- Video.js
- Lodash
- React-datepicker
- React-toastify
- dotenv + env-cmd

---

## 🧱 Template Series

### 1️⃣ template-react18

Vite + React 18 + Router v6

- React 18, Router v6 안정 버전 기반 (2025.05 기준)
- `vite-tsconfig-paths` 포함 (path custom ✅)

```bash
pnpm install
pnpm dev
```
### 2️⃣ template-react19

Vite + React 19 + Router v7

> ⚠️ 아직 일부 패키지와 호환 이슈가 있을 수 있습니다.

- React 19, Router v7 최신 버전 기반 (2025.05 기준)
- 최신 스펙 실험 및 개발용으로 추천

```bash
pnpm install
pnpm dev
```

### 3️⃣ cra-ts-react18

CRA + React 18 + Router v6 + CRACO

> ⚠️ CRA는 deprecated되고 있습니다. (META 지원 중단)

- CRA + TypeScript + CRACO 설정
- 기존 CRA 생태계 기반의 프로젝트와 호환성 ✅
- `craco-alias`, `craco-less`, `env-cmd` 포함
- ⭐ path custom을 희망하지 않는다면 `carco`, `craco-alias`, `craco-less` 삭제 후 사용

```bash
pnpm install
pnpm start
```

---

## 🔖 Convention

```text
src/
├── apis/                          # ✅ API 요청 함수 (도메인 기능 아님)
│   └── userApi.ts

├── components/                    # ✅ 공통 UI 컴포넌트 (디자인 단위)
│   └── Button/
│       ├── index.tsx             # 구현
│       ├── Button.types.ts       # props 타입 정의
│       ├── Button.styles.ts      # styled-components or tailwind
│       ├── Button.test.tsx       # 테스트
│       ├── useButton.ts          # 연관 커스텀 훅
│       └── useButton.test.ts     # 훅 테스트

├── features/                     # ✅ 도메인 기능 단위 구성
│   └── parent/
│       ├── index.tsx             # 상위 라우트 (e.g. /parent)
│       ├── Parent.types.ts
│       ├── Parent.styles.ts
│       ├── Parent.test.tsx
│       ├── useParent.ts
│       ├── useParent.test.ts
│       ├── StatsPage.tsx         # ✅ 하위 페이지가 1~2개면 파일로
│       └── pages/                # ✅ 하위 페이지가 많으면 폴더 분리
│           └── child/
│               └── index.tsx     # ex. /parent/child

├── hooks/                        # ✅ 전역 커스텀 훅 (기능에 독립적)
│   ├── useModal.ts
│   └── useOutsideClick.ts

├── styles/                       # ✅ 전역 스타일, 테마
│   └── tailwind.css

├── utils/                        # ✅ 범용 유틸 함수
│   ├── formatDate.ts
│   └── debounce.ts

├── types/                        # ✅ declare module, 글로벌 타입
│   ├── router.d.ts
│   └── svg.d.ts

├── infra/                        # ✅ 시스템 설정, 외부 라이브러리 래퍼
│   ├── api/                      # axios 인스턴스 및 interceptor
│   │   ├── instances.ts
│   │   └── useAxiosInterceptor.ts
│   ├── query/                    # react-query 클라이언트
│   │   └── queryClient.ts
│   ├── router/                   # react-router 설정
│   │   ├── index.ts              # createBrowserRouter
│   │   ├── routes/               # adminRoutes.tsx, userRoutes.tsx 등
│   │   └── components/           # 라우터 관련 컴포넌트 (Redirect 등)
│   ├── atoms/                    # jotai 기반 전역 상태 (isDarkModeAtom 등)
│   ├── stores/                   # zustand 등 다른 글로벌 상태관리 (선택)
│   ├── theme/                    # ThemeProvider, theme.ts
│   ├── toast/                    # 토스트 설정 (react-hot-toast, notistack 등)
│   └── i18n/                     # 다국어 초기화 (필요 시)

├── App.tsx                       # 앱 루트 (RouterProvider 등)
├── main.tsx                      # ReactDOM.createRoot()
```

---

## 🧪 Test & Linting

```bash
pnpm test         # Jest 기반 테스트 실행(template-react18, template-react19)
pnpm lint         # ESLint 확인
pnpm lint:fix     # 자동 수정
pnpm type-check   # 타입 검사
```

### Test Naming Convention

모든 테스트 파일은 **대상 컴포넌트나 훅과 같은 디렉토리**에 `*.test.ts(x)` 형식으로 작성합니다. 

```text
src/
  components/
    Button/
      index.tsx
      Button.styles.ts
      Button.types.ts
      Button.test.tsx      ✅
      useButtons.ts
      useButtons.test.ts   ✅
  hooks/
    useCounter.ts
    useCounter.test.ts     ✅
```
만약 테스트 파일 구조를 변경하려 한다면 `jest.config.ts`파일에서 수정할 수 있습니다.

```ts
// jest.config.ts
export default {
  testMatch: ['**/?(*.)+(test).[jt]s?(x)'], // ✅ 테스트 파일 형식 수정
}
```
