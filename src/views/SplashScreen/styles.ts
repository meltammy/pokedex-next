import styled, { keyframes } from 'styled-components'

const pikachuRunning = keyframes`
  from {
    left: 40vw;
  }

  to {
    left: 65vw;
  }
`

export const LoadingContainer = styled.div`
  background: linear-gradient(
    0deg,
    #000000 2%,
    green 48.3%,
    orange 28%,
    #4242d2 100%
  );
  height: 100vh;
  display: flex;
  align-items: center;

  > div {
    position: relative;
    width: fit-content;
    animation: ${pikachuRunning} 9s infinite;
  }

  > h3 {
    position: absolute;
    bottom: 3rem;
    color: white;
    width: 100%;
    justify-content: center;
  }
`
