import type { ControlPosition, DraggableEventHandler } from 'react-draggable';
import { useModalStore } from '../_modalStore.ts';

export const useModalFactoryEventHandler = (id: string, setPosition: (position: ControlPosition) => void) => {
  const closeModal = useModalStore(state => state.closeModal),
    bringModalToFront = useModalStore(state => state.bringModalToFront);

  const handleDragStop: DraggableEventHandler = (_, data) => setPosition({ x: data.x, y: data.y });
  const handleBringToFront = () => bringModalToFront(id);
  const handleClose: React.MouseEventHandler<HTMLButtonElement> = e => {
    e.stopPropagation();
    closeModal(id);
  };

  return {
    handleDragStop,
    handleBringToFront,
    handleClose,
  };
};
