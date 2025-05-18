import styled, { css } from 'styled-components';

export const StyledOverlay = styled.div`
  display: flex;
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  z-index: 100;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
`;

export const StyledConfirm = styled.article`
  display: flex;
  gap: 14px;
  flex-direction: column;

  min-width: 340px;
  min-height: 100px;

  padding: 30px;
  background-color: #fff;
  border-radius: 20px;
  box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.2),
  2px 2px 10px rgba(0, 0, 0, 0.4);
`;

export const StyledConfirmTop = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;

  h4 {
    line-height: 1;
    font-size: 16px;
    color: #444;
  }
`;

export const StyledExitButton = styled.button.attrs({ type: 'button' })`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 20px;
  height: 20px;
  border: 0;
  padding: 0;
  margin: 0;

  font-size: 0;

  cursor: pointer;

  svg {
    flex-shrink: 0;
    width: 16px;
    height: 16px;
    fill: #9598a1;
  }
`;

export const StyledConfirmContent = styled.div`
  flex-grow: 1;

  font-size: 12px;
  padding-bottom: 14px;
`;

export const StyledButtonBox = styled.div`
  display: flex;
  justify-content: right;
  align-items: center;
  gap: 6px;
`;

const buttonStyles = css`
  display: flex;
  gap: 6px;
  align-items: center;
  justify-content: center;

  min-width: 80px;
  height: 30px;
  border: 1px solid #bbb;
  border-radius: 4px;
  padding: 0 10px;

  font-size: 12px;
  text-align: center;

  transition: all 0.2s ease;

  cursor: pointer;
`;

export const StyledButton = styled.button.attrs({ type: 'button' })<{ $isOk?: boolean }>`
  ${buttonStyles};
  background: ${({ $isOk }) => ($isOk ? '#444' : 'white')};
  color: ${({ $isOk }) => ($isOk ? '#fff' : '#444')};
  border-color: ${({ $isOk }) => ($isOk ? '#444' : '#bbb')};

  &:hover {
    ${({ $isOk }) =>
      $isOk &&
      css`
        background: #222;
        color: #fff;
        border-color: #444;
      `}
  }

  svg {
    flex-shrink: 0;

    width: 14px;
    height: 14px;

    fill: ${({ $isOk }) => ($isOk ? '#fff' : '#444')};
  }
`;