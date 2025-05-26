import loadable from '@loadable/component';
import type { ModalSampleProps } from '@/sample/ModalSample/ModalSample.types.ts';

type ModalDefinition<T extends object> = {
  title: string;
  component: React.ComponentType<T>;
};

export const modalMap = {
  SAMPLE: {
    title: 'Sample Title',
    component: loadable(() => import('@/sample/ModalSample')) as React.ComponentType<ModalSampleProps>,
  },
} as const satisfies Record<string, ModalDefinition<any>>;

export type ModalTypes = keyof typeof modalMap;

export type ModalPropsMap = {
  [K in ModalTypes]: (typeof modalMap)[K] extends ModalDefinition<infer P> ? P : never;
};
