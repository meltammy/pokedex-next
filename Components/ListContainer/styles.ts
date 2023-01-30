import styled from 'styled-components'

export const Container = styled.div`
  width: fit-content;
  grid-area: list;
  max-width: 1080px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 1rem;
  margin: auto;
  padding: 2rem;

  @media (max-width: 960px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 740px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 740px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 515px) {
    grid-template-columns: repeat(1, 1fr);
    padding: 1rem;
    width: 100%;
  }
`

export const LoadingContainer = styled.div`
  width: fit-content;
  margin: auto;
  margin-top: 50vh;
`
