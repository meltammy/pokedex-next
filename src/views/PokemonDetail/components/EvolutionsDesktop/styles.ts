import styled from 'styled-components'

export const EvolutionsContainerDesktop = styled.div`
  grid-area: evolutions;
  width: 100%;
  background: white;
  border-radius: 2rem;
  padding: 2rem;
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
  margin-top: 2rem;

  > section {
    display: flex;
    justify-content: space-around;
    padding: 0 2rem;
    text-align: center;
    > div {
      width: 10rem;
    }
  }

  @media (max-width: 1080px) {
    display: none;
  }

  svg {
    rotate: 180deg;
    fill: black;
    margin: auto;
  }

  a {
    text-transform: capitalize;
    text-decoration-line: underline;
  }
`
