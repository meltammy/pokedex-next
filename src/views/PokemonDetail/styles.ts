import OutlinedText from '@/Components/OutlinedText'
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
  grid-template-rows: 3rem 12rem auto;
  padding: 2rem 0;
  min-height: 92vh;
  overflow-x: hidden;

  > h1 {
    grid-area: name;
    text-transform: capitalize;
    font-weight: 600;
    height: fit-content;
    margin: 0;
    margin-left: 1rem;
    color: white;
    text-shadow: 0px 0px 20px #00000066;
  }

  > button {
    margin-right: 1rem;
  }
`

export const ImageContainer = styled.div`
  max-width: 20rem;
  width: 12rem;
  grid-area: image;
  margin: auto;
  z-index: 1;
`

export const DataContainer = styled.div`
  background-color: white;
  grid-area: detail;
  height: 26rem;
  position: fixed;
  top: 16rem;
  width: 100%;
  max-width: 1080px;
  padding: 5rem 1rem 0 1rem;
  z-index: 0;
  border-top-right-radius: 2rem;
  border-top-left-radius: 2rem;

  box-shadow: 0px -11px 6px #0000001f;
`

export const TypesContainer = styled.div`
  grid-area: types;
  position: absolute;
  top: 8rem;
  left: 1rem;
  > span {
    margin-right: 0.5rem;
  }
`
export const Id = styled(OutlinedText)`
  position: fixed;
  width: 6rem;
  top: 8rem;
  right: 1rem;
  height: 5rem;
`

export const PrevArrow = styled.a`
  width: 2rem;
  height: 2rem;
  position: absolute;
  top: 12rem;
`

export const NextArrow = styled.a`
  width: 2rem;
  height: 2rem;
  position: absolute;
  top: 12rem;
  right: 0;
  rotate: 180deg;
`
