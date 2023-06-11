import { keyframes } from "@emotion/react"
import styled from "@emotion/styled";

const sway = keyframes`
  0% {
    transform: rotate(0deg);
  }
  15% {
    transform: rotate(-70deg);
  }
  50% {
    transform: rotate(35deg);
  }
  70% {
    transform: rotate(-20deg);
  }
  93% {
    transform: rotate(10deg);
  }
  100% {
    transform: rotate(0deg);
  }
`;

export const SwayAnimation = styled.div`
  &:hover{
    animation: ${sway} 4s ease-in-out 1;
  }
`