# RedirectIndexRouteContainer 사용 가이드

---

## 📌 구조

```text
RedirectIndexRouteContainer
├─ index.ts                               # 모듈 진입점, export 정리
├─ _RedirectIndexRouteContainer.tsx       # RedirectIndexRouteContainer 컴포넌트
├─ _RedirectIndexRouteContainer.types.ts  # 타입 정의
├─ _useRedirectIndexNavigate.tsx          # 라우트 리디렉트용 Hook
└─ README.md                              # 사용법
```

* react-router 필요 `npm i react-router`

<br/>

## 💡 사용법

### 1️⃣ `RedirectIndexRouteContainer` 사용법

1. `RedirectIndexRouteContainer` 디렉토리를 사용하려는 프로젝트에 복사하여 붙여넣습니다. (`components` 디렉토리 하위를 추천)
2. `useRedirectIndexNavigate`에 사용하는 라우트 오브젝트 배열을 할당합니다.

```tsx

const useRedirectIndexNavigate = () => {
    // ...
    const matchedRoutes = matchRoutes(전체라우트오브젝트배열, location); // 전체 routes 비교
    // ...
}

```

3. 사용하려는 컴포넌트에서 `RedirectIndexRouteContainer` 컴포넌트를 `import`합니다.

```tsx
import RedirectIndexRouteContainer from '@components/RedirectIndexRouteContainer';

function App() {
    return (
        <RedirectIndexRouteContainer>
            {/* 애플리케이션의 라우트 컴포넌트 */}
        </RedirectIndexRouteContainer>
    );
}

export default App;
```

<br/>

### 2️⃣ 동작 원리

- `RedirectIndexRouteContainer`는 현재 라우트의 자식 라우트 중 `index`가 있는 경우 해당 경로로 자동 리디렉트합니다.
- `useRedirectIndexNavigate` Hook을 사용하여 현재 경로를 분석하고, 적절한 자식 라우트로 `Navigate`를 수행합니다.

<br/>

### 3️⃣ 내부 훅 사용 방법 (`useRedirectIndexNavigate`)

#### ✅ 예제 코드

```tsx
import useRedirectIndexNavigate from '@components/RedirectIndexRouteContainer';

const Component = () => {
    const redirectRoute = useRedirectIndexNavigate();

    if (redirectRoute) return redirectRoute; // 리디렉트할 경로가 있으면 반환

    return <div>현재 페이지</div>;
};

export default Component;
```

<br/>

### 🚨 주의사항

- `routes` 값이 `undefined`이거나 `matchRoutes`가 아무것도 찾지 못하면 리디렉트가 발생하지 않습니다.
- `RedirectIndexRouteContainer` 내부에 `children`을 꼭 전달해야 합니다.
- `useRedirectIndexNavigate`를 직접 사용할 경우 `Navigate`를 반환하는지 확인해야 합니다.