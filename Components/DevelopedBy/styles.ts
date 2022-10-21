import styled from 'styled-components'

export const Container = styled.h3`
  display: flex;
  font-weight: 500;
  margin-bottom: 0.5rem;
  transition: 0.2s;

  a {
    margin-left: 0.5rem;

    &:hover {
      color: #ffbd4a;
      border-color: #ffbd4a;
    }
  }

  svg {
    margin: 2px 0.5rem 0 0.5rem;
  }

  @media (max-width: 360px) {
    font-size: 1rem;

    svg {
      width: 1rem;
      margin: 0px 0.5rem 0 0.5rem;
    }
  }
`
