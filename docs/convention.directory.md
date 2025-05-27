# 📁 React 프로젝트 디렉토리 구조 및 파일 작성 컨벤션

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
│   ├── quires/                  # react-query query 훅 폴더
│       ├── useDataQuery.ts
│   ├── mutations/               # react-query mutation 훅 폴더
│       ├── useDataMutation.ts
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

## ️🧱️ 컴포넌트 디렉토리 구조

```
└── /SomeComp
    ├── index.tsx
    ├── SomeComp.meta.ts
    ├── SomeComp.constants.ts
    ├── SomeComp.styles.ts
    ├── SomeComp.types.ts
    ├── SomeComp.test.ts
    ├── useSomeComp.ts
    └── someCompStore.ts / someCompAtom.ts
```

- `index`
  : `.tsx`로 끝나는 경우는 일반적으로 해당 컴포넌트 구현 단이며 `.ts`로 끝나는 경우는 엔트리 포인트로 구성됩니다.

- `컴포넌트.기능.ts/tsx`
  : 컴포넌트에 필요한 정보(ex. `meta`, `constants`, `types`, `styles`, `test` 등)는 모두 `.`을 통해 표현합니다.

    - 필수 파일: index.tsx, .types.ts, .styles.ts
    - 선택적 분리: .constants.ts, .meta.ts, .test.ts, useComp.ts, .atom.ts / .store.ts

- 커스텀 훅
  : 로직이 복잡하지 않고 훅의 갯수가 많지 않은 경우는 `use컴포넌트명.ts`에 모두 구현 후 `export`하여 사용합니다.  
  만약 **내부 훅이 많아진 경우**라면 `hooks/useA.ts`, `hooks/useB.ts` 등 하위 폴더로 분리하세요.

    - ⚠️ 주의: 확장성과 트리쉐이킹을 위해 `default`로 `export` 하지 마십시오.
    - 커스텀 훅은 **항상 named export**를 기본으로 사용합니다.
    - 단일 기능 훅이 `export default`일 경우 IDE 자동 import 시 **임의 이름으로 import되는 문제가 발생**하므로 피합니다.


- `store` / `atom`
  : Jotai, Recoil은 `*atom.ts`으로 Redux, Zustand는 `*store.ts`로 파일명을 지정합니다.

    - 해당 상태가 이 컴포넌트에서만 쓰인다면 컴포넌트 폴더 내에 위치시킵니다.
    - ⚠️ 주의: 전역 상태이거나 다수 컴포넌트에서 공유된다면 `infra/atoms` 또는 `infra/stores`에 위치시킵니다.

---

## 🗂️ 디렉토리 항목별 역할

### 📂 `components/`

- 재사용 가능한 범용 컴포넌트
- 비도메인적 순수한 표현 요소 위주

```
└── /SomeComp
    ├── index.tsx
    ├── SomeComp.meta.ts
    ├── SomeComp.constants.ts
    ├── SomeComp.styles.ts
    ├── SomeComp.types.ts
    ├── SomeComp.test.ts
    ├── useSomeComp.ts
    └── someCompStore.ts / someCompAtom.ts
```

### 📂 `features/`

- 페이지 단위 또는 도메인 기능 단위
- 하위 페이지가 많을 경우 `pages/`로 분리

```text
features/
└── user/
    ├── index.tsx             # /user
    ├── useUser.ts
    ├── User.styles.ts
    ├── User.test.tsx
    └── pages/
        └── profile/
            └── index.tsx     # /user/profile
```

### 📂 `apis/`

- axios 혹은 fetch 기반 API 요청 함수만 정의
- 응답 가공, 에러 핸들링 등 비즈니스 로직은 `hooks/*`, `hooks/queries`, `hooks/mutations`, `features`에서 처리

```ts
// ❌ X
export const getUser = () => {
    // ...
    return data.name + '님';
}

// ✅ O
export const getUser = () => axios.get('/user');
```

### 📂 `hooks/`

- 글로벌/범용 커스텀 훅
- 특정 도메인, UI와 결합된 훅은 `featrues/`, `components/` 내 관련된 컴포넌트 폴더에 위치

#### `quaries/`

react-query 기반 query 커스텀 훅

#### `mutations/`

react-query 기반 mutation 커스텀 훅  
`use데이터Query.ts` 명으로 파일을 생성해주세요.

### 📂 `infra/`

외부 라이브러리 설정 및 래퍼  
`use데이터Mutation.ts` 명으로 파일을 생성해주세요.

- `api/` – axios 인스턴스, 인터셉터
- `query/` – React Query 설정
- `router/` – React Router 설정 + routes + 헬퍼 컴포넌트
- `atoms/`, `stores/` – Jotai, Zustand 등 전역 상태
- `theme/`, `toast/`, `i18n/` – 테마, 알림, 다국어 설정 등

### 📂 `types/`

글로벌 타입, declare module 등

```ts
// 예: router.d.ts
declare module 'react-router' {
    interface Meta {
        title?: string;
    }
}
```

### 📂 `utils/`

- 순수 함수, 변형 없는 범용 로직
- 상태 변경, 비즈니스 로직은 넣지 않음

---

## 📏 파일 네이밍

| 요소     | 	예시	                | 설명                             |
|--------|---------------------|--------------------------------|
| 컴포넌트   | 	Button.tsx         | 	대문자 PascalCase                | 
| 타입 정의  | 	Button.types.ts    | 	기능명 + .types.ts               |
| 스타일 파일 | 	Button.styles.ts   | 	styled-components or tailwind |
| 훅      | 	useModal.ts	use    | 접두어 + camelCase                |
| 테스트 파일 | 	Component.test.tsx | 	Jest, Vitest 등 대응             |

---

## 🔍 패스 커스텀

구조·분류 용 디렉토리인 경우 `tsconfig.app.ts` 파일을 통해 패스를 커스텀하세요.

```json
{
  "compilerOptions": {
    /* custom path */
    "baseUrl": "./",
    "paths": {
      "@/*": [
        "src/*"
      ],
      "@apis/*": [
        "src/apis/*"
      ]
    }
  }
}
```