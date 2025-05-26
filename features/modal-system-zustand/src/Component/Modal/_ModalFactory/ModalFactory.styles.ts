import styled, { css } from 'styled-components';

export const StyledModalFactory = styled.div<{ $width: number; $height: number }>`
  ${({ $width, $height }) => css`
    width: ${$width}px;
    height: ${$height}px;
  `}
  position: absolute;
  background: red;
`;

export const StyledModalFactoryHeader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: blue;
  cursor: move;

  h5 {
    flex-grow: 1;
  }
`;