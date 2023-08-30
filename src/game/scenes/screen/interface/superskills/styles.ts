import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

export const Wrapper = styled.div`
  display: flex;

  &.fade-in {
    animation: ${fadeIn} 2s; /* Adjust duration as needed */
  }
`;
