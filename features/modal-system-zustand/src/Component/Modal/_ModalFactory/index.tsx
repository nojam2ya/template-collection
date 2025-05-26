import { modalMap } from '../_modalMap.ts';
import { StyledModalFactory } from './ModalFactory.styles.ts';
import Draggable, { type ControlPosition } from 'react-draggable';
import { useRef, useState } from 'react';
import { useModalFactoryEventHandler } from './useModalFactory.ts';
import type { ModalFactoryProps } from './ModalFactory.types.ts';
import ModalFactoryHeader from './ModalFactoryHeader.tsx';
import { getCenterPosition, getWindowBounds } from '@utils/utils.ts';

const ModalFactory: React.FC<ModalFactoryProps> = ({
  id,
  type,
  $defaultPosition,
  $zIndex,
  $width = 360,
  $height = 240,
  props,
}) => {
  const defaultPosition = $defaultPosition ? $defaultPosition : getCenterPosition($width, $height);
  const [position, setPosition] = useState<ControlPosition>(defaultPosition);
  const nodeRef = useRef<HTMLDivElement>(null);

  const { handleDragStop, handleClose, handleBringToFront } = useModalFactoryEventHandler(id, setPosition);

  if (!modalMap[type]) return null;

  const { title, component: ModalComp } = modalMap[type];

  return (
    <Draggable
      handle=".modal-header"
      position={position}
      nodeRef={nodeRef as React.RefObject<HTMLElement> | undefined}
      onDrag={handleBringToFront}
      onStop={handleDragStop}
      bounds={getWindowBounds($width, $height)}
    >
      <StyledModalFactory
        className="modal-draggable"
        $width={$width}
        $height={$height}
        style={{ zIndex: $zIndex }}
        ref={nodeRef}
        onClick={handleBringToFront}
      >
        <ModalFactoryHeader title={title} onClose={handleClose} />
        <ModalComp {...props} />
      </StyledModalFactory>
    </Draggable>
  );
};

export default ModalFactory;
