import 'react-router-dom';
import { IndexRouteObject, NonIndexRouteObject } from 'react-router';

declare module 'react-router' {
  // 메타 정보 타입
  interface Meta {
    // 필요한 메타 정보 추가
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
