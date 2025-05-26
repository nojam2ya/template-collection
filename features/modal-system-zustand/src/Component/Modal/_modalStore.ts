import { create } from 'zustand/react';
import type { ModalStore } from './_Modal.types.ts';

export const useModalStore = create<ModalStore>()(set => ({
  modals: [],
  openModal: modal =>
    set(state => {
      const exists = state.modals.some(m => m.id === modal.id);
      if (exists) return state;
      return { modals: [...state.modals, modal] };
    }),
  closeModal: id => set(state => ({ modals: state.modals.filter(modal => modal.id !== id) })),
  bringModalToFront: id =>
    set(state => {
      const modal = state.modals.find(m => m.id === id);
      if (!modal) return state;

      return {
        modals: [...state.modals.filter(modal => modal.id !== id), modal],
      };
    }),
}));
