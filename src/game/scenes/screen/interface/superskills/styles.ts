import styled, { keyframes } from "styled-components";

const flashyFadeIn = keyframes`
  0% {
    opacity: 0;
    transform: scale(0.9);
    background-color: rgba(255, 0, 0, 0.5); // Starting with a red tint
  }
  50% {
    transform: scale(1.05);
    background-color: rgba(0, 255, 0, 0.5); // Switching to a green tint in the middle
  }
  100% {
    opacity: 1;
    transform: scale(1);
    background-color: transparent; // Ending with no tint
  }
`;

export const Wrapper = styled.div`
  display: flex;

  &.fade-in {
    animation: ${flashyFadeIn} 3s; /* Adjust duration as needed */
  }
`;
