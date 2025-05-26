import React from 'react';
import useRedirectIndexNavigate from './_useRedirectIndexNavigate';
import type { RedirectIndexRouteProps } from './_RedirectIndexRoute.types.ts';

const RedirectIndexRouteContainer: React.FC<RedirectIndexRouteProps> = ({ children, parentRoutes }) => {
  const redirectRoute = useRedirectIndexNavigate(parentRoutes);
  if (redirectRoute) return redirectRoute;

  return children;
};

export default RedirectIndexRouteContainer;
