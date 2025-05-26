import type { Modal } from '../_Modal.types.ts';

export interface ModalFactoryProps extends Modal {
  $zIndex: number;
}

export interface ModalFactoryHeaderProps {
  title: string;
  onClose: React.MouseEventHandler;
}
