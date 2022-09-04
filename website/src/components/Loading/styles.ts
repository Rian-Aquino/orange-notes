import styled, { keyframes } from 'styled-components';

const orangeLoading = keyframes`
  0% {
    transform: rotate(-15deg);
  }
  100% {
    transform: rotate(17deg);
  }
`;

const LoadingStyles = {
  Wrapper: styled.div`
    width: 100%;
    height: 100%;

    display: flex;
    justify-content: center;
    align-items: center;

    //background-color: #ff5a23;
  `,

  Icon: styled.span`
    font-size: 4rem;
    animation: ${orangeLoading} 1s ease-in-out infinite alternate-reverse;
    transform-origin: center bottom;
  `
};

export default LoadingStyles;
