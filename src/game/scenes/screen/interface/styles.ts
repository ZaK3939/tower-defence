import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  padding: 32px;
  display: flex;
  justify-content: space-between;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  width: 100%;
`;

export const Column = styled.div<{
  $side: string
}>`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  ${(props) => {
    switch (props.$side) {
      case 'left': return css`
        justify-self: start;
        align-items: flex-start;
      `;
      case 'center': return css`
        justify-self: center;
        align-items: center;
      `;
      case 'right': return css`
        justify-self: end;
        align-items: flex-end;
      `;
    }
  }}
`;
