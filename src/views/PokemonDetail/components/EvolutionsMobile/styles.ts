import styled from 'styled-components'

export const EvolutionsContainerMobile = styled.div`
  margin-bottom: 2rem;

  > div {
    display: flex;
    flex-direction: column;
    text-align: center;
    justify-content: center;
    text-transform: capitalize;
    width: 100%;
    align-items: center;
    > div {
      max-width: 12rem;
      width: 100%;
    }
  }

  svg {
    fill: black;
    rotate: -90deg;
    margin: 1rem auto;
  }

  a {
    font-size: 1.5rem;
  }

  @media (min-width: 1080px) {
    display: none;
  }
`
