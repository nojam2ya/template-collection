import { useEffect, useRef } from 'react';
import { useModalStore } from './_modalStore.ts';

export function useModal() {
  return {
    openModal: useModalStore(state => state.openModal),
    closeModal: useModalStore(state => state.closeModal),
  };
}

export function useModalEvent() {
  const modals = useModalStore(state => state.modals),
    closeModal = useModalStore(state => state.closeModal);
  const modalsRef = useRef(modals);

  useEffect(() => {
    modalsRef.current = modals;
  }, [modals]);

  // 'esc' keydown
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        const topModal = modalsRef.current[modalsRef.current.length - 1];
        if (topModal) closeModal(topModal.id);
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);
}
