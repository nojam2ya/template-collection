# 🔖 Convention

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
