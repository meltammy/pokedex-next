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
  box-shadow: inset 0px 12px 11px -11px #00000042;

  > section {
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
  }

  @media (min-width: 1080px) {
    background: linear-gradient(
      ${({ backgroundColor }) => backgroundColor} 0%,
      transparent 100%
    ) !important;

    display: flex;
    justify-content: center;
    align-items: baseline;

    > section {
      grid-template-areas:
        'name  name . like'
        '. . . .'
        'image id detail detail'
        'types types detail detail'
        'evolutions evolutions evolutions evolutions';
      margin: 0;
      grid-template-columns: 10rem 21rem auto 2rem;
      padding: 2rem 5rem;
      grid-template-rows: 3rem 2rem 15rem 2rem max-content;

      > h1 {
        display: none;
      }
    }
  }
`

export const ImageContainer = styled.div`
  max-width: 20rem;
  width: 12rem;
  grid-area: image;
  margin: auto;
  z-index: 1;
  @media (min-width: 1080px) {
    width: 15rem;
  }
`

export const DataContainer = styled.div`
  background-color: white;
  grid-area: detail;
  position: fixed;
  top: 16rem;
  width: 100%;
  max-width: 1080px;
  z-index: 0;
  border-top-right-radius: 2rem;
  border-top-left-radius: 2rem;
  box-shadow: 0px -11px 6px #0000001f;
  padding-top: 4rem;

  > section {
    overflow-y: auto;
    height: 56vh;
    padding: 0 1rem;

    > div {
      padding: 2rem 0;
      border-bottom: 1px #00000017 solid;

      > h3 {
        margin-top: 0;
      }
    }
  }

  @media (min-width: 1080px) {
    min-width: 22rem;
    position: initial;
    border-radius: 2rem;
    padding: 2rem;
    height: fit-content;
  }
`

export const TypesContainer = styled.div`
  grid-area: types;
  position: absolute;
  top: 8rem;
  left: 1rem;
  > span {
    margin-right: 0.5rem;
  }

  @media (min-width: 1080px) {
    position: initial;
  }
`

export const Id = styled(OutlinedText)`
  grid-area: id;

  position: fixed;
  width: 6rem;
  top: 8rem;
  right: 1rem;
  height: 5rem;

  @media (min-width: 1080px) {
    position: initial;
    align-self: flex-end;
    width: 12rem;
    height: 10rem;
  }
`

export const PrevArrow = styled.a`
  width: 2rem;
  height: 2rem;
  position: absolute;
  top: 12rem;

  @media (min-width: 1080px) {
    position: initial;
  }
`

export const NextArrow = styled.a`
  width: 2rem;
  height: 2rem;
  position: absolute;
  top: 12rem;
  right: 0;
  rotate: 180deg;

  @media (min-width: 1080px) {
    position: initial;
  }
`

export const Name = styled(OutlinedText)`
  opacity: 0;

  @media (min-width: 1080px) {
    opacity: 1;
    grid-area: name;
    width: 55rem;
    margin-left: -24rem;
    text-transform: uppercase;
    height: 8rem;
  }
`

export const EvolutionsContainerMobile = styled.div`
  * {
    margin: auto;
  }

  > div {
    width: 8rem;
    display: flex;
    flex-direction: column;
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

export const EvolutionsContainerDesktop = styled.div`
  grid-area: evolutions;
  display: flex;
  width: 100%;
  > div {
    max-width: 5rem;
  }
  display: none;
  @media (max-width: 1080px) {
  }
  svg {
    rotate: 180deg;
  }
`
