import { modalMap, type ModalPropsMap } from './_modalMap.ts';
import type { ControlPosition } from 'react-draggable';

export interface ModalStore {
  modals: Modal[];
  openModal: (modal: Modal) => void;
  closeModal: (id: string) => void;
  bringModalToFront: (id: string) => void;
}

export type Modal = {
  [K in keyof typeof modalMap]: {
    id: string;
    type: K;
    props?: ModalPropsMap[K];
    $width?: number;
    $height?: number;
    $defaultPosition?: ControlPosition;
  };
}[keyof typeof modalMap];
