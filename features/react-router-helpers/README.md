# React Router Helper

## Custom Route Type(for Meta)

RedirectIndexRoute는 라우팅 설계 시 메타 정보 등을 함께 사용하기 위해 react-router의 타입을 확장합니다. 이를 통해 각 라우트 객체에 meta 필드를 추가로 설정할 수 있습니다.

```ts
declare module 'react-router' {
    interface Meta {
        title?: string; // 예: 메뉴 이름, 페이지 타이틀 등
    }

    interface CustomIndexRouteObject extends IndexRouteObject {
        meta?: Meta;
    }

    interface CustomNonIndexRouteObject extends NonIndexRouteObject {
        meta?: Meta;
        children?: CustomRouteObject[];
    }

    type CustomRouteObject = CustomIndexRouteObject | CustomNonIndexRouteObject;
}

```

```tsx
const dashboardRoutes: CustomRouteObject = {
    path: '/dashboard',
    element: <DashboardLayout/>,
    meta: {title: '대시보드'},
    children: [
        {
            index: true,
            element: <Navigate to="/dashboard/overview"/>,
            meta: {title: '기본'}
        },
        {
            path: 'overview',
            element: <OverviewPage/>,
            meta: {title: '개요'}
        }
    ]
};


```

## Redirect Index Route

> React Router에서 부모 라우트에 자동으로 index route를 삽입해주는 유틸리티입니다.  
> 빈 화면 방지 및 초기 진입 경로 설정에 유용합니다.

[more](src/components/_routes/RedirectIndexRoute/README.md)

 