import * as React from 'react';
import { useAtom } from 'jotai';
import { confirmAtom } from './confirmAtom.ts';
import { createPortal } from 'react-dom';
import {
  StyledButton,
  StyledButtonBox,
  StyledConfirm,
  StyledConfirmContent,
  StyledConfirmTop,
  StyledExitButton,
  StyledOverlay,
} from './_Confirm.styles.ts';
import type { ConfirmProps } from '@components/Confirm/_Confirm.types.ts';

const XmarkSvg = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
    <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" />
  </svg>
);

const CheckSvg = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
    <path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" />
  </svg>
);

const Component: React.FC<ConfirmProps> = ({ okText = '확인', cancelText = '취소' }) => {
  const [confirm] = useAtom(confirmAtom);
  if (!confirm.isOpen) return null;

  const { title, children, onClickOk, onClickCancel } = confirm;

  const onClickOverlay = (event?: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (event?.currentTarget !== event?.target) {
      return;
    }

    if (onClickCancel) {
      onClickCancel();
      return;
    }

    onClickOk();
  };
  return createPortal(
    <StyledOverlay onClick={onClickOverlay}>
      <StyledConfirm>
        <StyledConfirmTop>
          <h4>{title}</h4>
          <StyledExitButton onClick={onClickCancel}>
            <XmarkSvg />
            {cancelText}
          </StyledExitButton>
        </StyledConfirmTop>
        {children && <StyledConfirmContent>{children}</StyledConfirmContent>}
        <StyledButtonBox>
          <StyledButton onClick={onClickOk} $isOk>
            <CheckSvg />
            {okText}
          </StyledButton>
          {onClickCancel && (
            <StyledButton onClick={onClickCancel}>
              <XmarkSvg />
              {cancelText}
            </StyledButton>
          )}
        </StyledButtonBox>
      </StyledConfirm>
    </StyledOverlay>,
    document.body,
  );
};
export default Component;
