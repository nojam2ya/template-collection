import { matchRoutes, Navigate, type RouteObject, useLocation } from 'react-router';
import { useMemo } from 'react';

/**
 * 인덱스 route 또는 첫 번째 child route로 이동시키는 custom hook
 */
const useRedirectIndexNavigate = (parentRoutes: RouteObject[]) => {
  const location = useLocation();

  const redirectPath = useMemo(() => {
    if (!parentRoutes) return undefined; // 전체 라우트가 없다면

    const matchedRoutes = matchRoutes(parentRoutes, location); // 전체 routes 비교
    if (!matchedRoutes?.length) return undefined; // 매칭된 라우트들이 없다면

    const currentRoute = matchedRoutes[matchedRoutes.length - 1];
    if (!currentRoute || !currentRoute.route.children?.length) return undefined; // 현재 라우트를 찾을 수 없다면

    const children = currentRoute.route.children;
    const indexRoute = children.find(child => child.index);

    return `${location.pathname}/${indexRoute ? (indexRoute?.path ?? '') : children[0].path}`;
  }, [location]);

  return redirectPath ? <Navigate to={redirectPath} replace /> : undefined;
};

export default useRedirectIndexNavigate;
