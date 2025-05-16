import 'styled-components';
import type { ColorTypes, FontSizeTypes } from '@infra/theme/theme.ts';

declare module 'styled-components' {
  export interface DefaultTheme {
    color: ColorTypes;
    fontSize: FontSizeTypes;
  }
}
