import 'react-router';
import { IndexRouteObject, NonIndexRouteObject } from 'react-router';

declare module 'react-router' {
  interface Meta {
    title?: string;
  }

  interface CustomIndexRouteObject extends IndexRouteObject {
    meta?: Meta; // 또는 meta?: any
  }

  interface CustomNonIndexRouteObject extends NonIndexRouteObject {
    meta?: Meta; // 또는 meta?: any
    children?: CustomRouteObject[];
  }

  type CustomRouteObject = CustomIndexRouteObject | CustomNonIndexRouteObject;
}
