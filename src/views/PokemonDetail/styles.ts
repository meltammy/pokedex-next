import styled from 'styled-components'

type ContainerProps = {
  backgroundColor: string
}

export const Container = styled.div<ContainerProps>`
  background: linear-gradient(
    ${({ backgroundColor }) => backgroundColor} 0%,
    transparent 68%
  ) !important;

  max-width: 1080px;
  margin: auto;
  display: grid;
  grid-template-areas: 'name . like' 'image image image' 'detail detail detail';
  grid-template-columns: auto auto 2rem;
  grid-template-rows: 3rem 15rem auto;
  padding: 2rem 0;
  min-height: 92vh;

  > h1 {
    grid-area: name;
    text-transform: capitalize;
    font-weight: 600;
    height: fit-content;
    margin: 0;
    margin-left: 1rem;
  }

  > button {
    margin-right: 1rem;
  }
`

export const ImageContainer = styled.div`
  max-width: 20rem;
  width: 15rem;
  grid-area: image;
  margin: auto;
  z-index: 1;
`

export const DataContainer = styled.div`
  background-color: white;
  grid-area: detail;
  height: 26rem;
  position: fixed;
  top: 18rem;
  width: 100%;
  max-width: 1080px;

  z-index: 0;
  border-radius: 2rem;
  box-shadow: 0px -11px 6px #0000001f;
`