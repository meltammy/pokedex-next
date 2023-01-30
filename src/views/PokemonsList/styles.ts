import styled from 'styled-components'

export const Container = styled.section`
  max-width: 880px;
  width: 100%;
  margin: auto;
  padding-top: 2rem;
  display: flex;

  button {
    background-color: transparent;
    border: none;
    color: gray;

    display: flex;

    :hover {
      color: red;
      cursor: pointer;
    }

    svg {
      width: 3rem;
      height: 2rem;
    }

    span {
      background-color: red;
      color: white;
      border-radius: 2rem;
      width: 1.5rem;
      height: 1.5rem;
      line-height: 1.5rem;
      position: absolute;
      margin-left: 2rem;
      margin-top: -0.5rem;
    }
  }

  @media (max-width: 960px) {
    max-width: 720px;
    padding-left: 2rem;
    padding-right: 1rem;
  }

  @media (max-width: 515px) {
    padding-left: 1rem;
  }
`
