import { createPortal } from 'react-dom';
import { useModalStore } from './_modalStore.ts';
import ModalFactory from './_ModalFactory';
import { useModalEvent } from './_useModal.ts';
import { useEffect, useState } from 'react';

const ModalRoot = () => {
  const [modalRoot, setModalRoot] = useState<HTMLElement | null>(null);

  useEffect(() => {
    setModalRoot(document.getElementById('modal-root'));
  }, []);

  const modals = useModalStore(state => state.modals);
  useModalEvent();

  if (!modalRoot) return null;

  return createPortal(
    <>
      {modals.map(({ id, type, $defaultPosition, $height, $width, props }, i) => (
        <ModalFactory
          key={id}
          id={id}
          type={type}
          props={props}
          $zIndex={1000 + i}
          $defaultPosition={$defaultPosition}
          $height={$height}
          $width={$width}
        />
      ))}
    </>,
    modalRoot,
  );
};

export default ModalRoot;
