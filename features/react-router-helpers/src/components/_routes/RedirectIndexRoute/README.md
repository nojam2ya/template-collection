# RedirectIndexRoute

`RedirectIndexRoute`는 React Router에서 중첩 라우트를 사용하는 경우, 특정 부모 라우트에 자동으로 `index route`를 삽입해주는 유틸리티입니다.

---

## ❓ 왜 필요할까?

React Router에서는 중첩 라우트를 정의할 때 기본적으로 자식 경로를 명시해야 합니다. 그런데 부모 라우트(layout 등)에 접근했을 때 자동으로 자식 경로 중 하나로 리다이렉트되길 원할 때, 매번
`index` route를 명시적으로 작성하는 것은 번거롭습니다.

`RedirectIndexRoute`는 이러한 반복 작업을 줄이기 위한 유틸입니다.

---

## 💪 주요 기능

- `RouteObject[]` 배열을 받아 각 부모 라우트에 `index: true` route 자동 삽입
- 삽입된 `index` route에는 `<Navigate />` 또는 사용자가 지정한 컴포넌트를 렌더링
- 기존 자식 라우트와 병합되어 구조를 손상시키지 않음
- layout 중심의 라우팅 설계에 유용
- 커스텀 훅 `useRedirectIndexNavigate`를 통해 코드 수준에서 동적 리다이렉트도 가능

---

## 📦 디렉토리 구조

```text
RedirectIndexRoute
├─ index.ts                               # 모듈 진입점, export 정리
├─ _RedirectIndexRoute.tsx                # RedirectIndexRoute 컴포넌트
├─ _RedirectIndexRoute.types.ts           # 타입 정의
├─ _useRedirectIndexNavigate.tsx          # 라우트 리디렉트용 Hook
└─ README.md                              # 사용법
```

> 📦 설치 필요: `react-router`
> ```bash
> npm i react-router
> ```

---

## ⚙️ 사용법

### 1. `RedirectIndexRoute` 컴포넌트

`parentRoutes`의 각 라우트에 `index: true` 경로를 삽입하며, `children`으로 넘긴 컴포넌트를 렌더링 요소로 사용합니다.

```tsx
<RedirectIndexRoute parentRoutes={[layoutRoute1, layoutRoute2]}>
    <Navigate to="/default"/>
</RedirectIndexRoute>
```

#### 🔧 동작 원리

다음과 같은 RouteObject:

```tsx
const layoutRoute = {
    path: '/dashboard',
    element: <DashboardLayout/>,
    children: [
        {path: 'analytics', element: <AnalyticsPage/>},
    ]
};
```

에 대해 다음과 같이 변환됩니다:

```tsx
const layoutRoute = {
    path: '/dashboard',
    element: <DashboardLayout/>,
    children: [
        {
            index: true,
            element: <Navigate
                to=
                    "/dashboard/analytics"
            />
        },
        {
            path: 'analytics',
            element: <AnalyticsPage/>
        }
    ]
}
```

> `index: true` route가 존재하지 않는 경우에만 삽입됩니다.

---

### 2. `useRedirectIndexNavigate` 훅

현재 경로가 index route가 없는 부모 경로인 경우, 지정된 경로로 리디렉트합니다.

#### ✅ 기본 사용

```tsx
const redirect = useRedirectIndexNavigate();

useEffect(() => {
    redirect('/dashboard'); // index route가 없으면 이동
}, []);
```

#### ⚙️ 커스터마이징

```tsx
const redirect = useRedirectIndexNavigate(parentRoutes); // optional

redirect('/fallback');
```

---

## 🚨 주의사항

- `RedirectIndexRoute`는 `children`으로 index route의 element를 반드시 하나만 받아야 합니다.
- index route는 기존에 존재하지 않을 경우에만 삽입되며, 중복 삽입되지 않습니다.
- `useRedirectIndexNavigate`는 내부적으로 `useNavigate` 및 `matchRoutes`를 활용합니다.
- `parentRoutes`가 `undefined`이거나 현재 경로에 해당하는 route가 없으면 동작하지 않습니다.
- layout 중심의 라우팅 설계에서 빈 화면 방지용으로 사용됩니다.

---

## 🧪 테스트 체크리스트

- [ ] 자식 라우트가 없는 부모 라우트에 접근 시 index route로 이동되는가?
- [ ] 이미 index route가 존재하는 경우 중복 삽입되지 않는가?
- [ ] `useRedirectIndexNavigate` 훅이 의도대로 navigate를 수행하는가?
