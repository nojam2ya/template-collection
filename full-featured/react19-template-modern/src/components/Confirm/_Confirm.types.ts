export interface ConfirmAtom {
  isOpen: boolean;
  title: string;
  children?: React.ReactNode;
  onClickOk: () => void;
  onClickCancel?: () => void;
}

export interface ConfirmProps {
  okText?: string;
  cancelText?: string;
}

export interface UseConfirmFnParams {
  title: string;
  children?: React.ReactNode;
}
