import { atom } from 'jotai';
import type { ConfirmAtom } from './_Confirm.types.ts';

export const confirmAtom = atom<ConfirmAtom>({
  isOpen: false,
  title: '',
  onClickOk: () => {},
});
