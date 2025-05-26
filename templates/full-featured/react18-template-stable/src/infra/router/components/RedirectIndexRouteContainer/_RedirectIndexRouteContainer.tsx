import React from 'react';
import useRedirectIndexNavigate from './_useRedirectIndexNavigate.tsx';
import type { RedirectIndexRouteContainerProps } from './_RedirectIndexRouteContainer.types.ts';

const RedirectIndexRouteContainer: React.FC<RedirectIndexRouteContainerProps> = ({ routes, children }) => {
  const redirectRoute = useRedirectIndexNavigate(routes);
  if (redirectRoute) return redirectRoute;

  return children;
};

export default RedirectIndexRouteContainer;
