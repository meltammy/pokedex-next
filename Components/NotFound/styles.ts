import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 82vh;

  > div {
    width: 100%;
    max-width: 38rem;
    padding: 1rem;
  }

  h1 {
    text-align: center;
    font-size: 2rem;
  }

  a,
  button {
    font-size: 1.5rem;
    border: 1px black solid;
    border-radius: 0.5rem;
    transition: 0.3s;
    padding: 0.5rem 1rem;
    background-color: transparent;
    margin: 1rem;

    &:hover {
      color: #ffbd4a;
      border-color: #ffbd4a;
    }
  }
`
