import styled from 'styled-components'

export const LoadingContainer = styled.div`
  width: fit-content;
  margin: auto;
  margin-top: 50vh;
`

export const Container = styled.section`
  max-width: 880px;
  width: 100%;
  margin: auto;
  padding-top: 2rem;

  @media (max-width: 960px) {
    max-width: 720px;
    padding-left: 2rem;
  }

  @media (max-width: 515px) {
    padding-left: 1rem;
  }
`
