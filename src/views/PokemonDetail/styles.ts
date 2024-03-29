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
    max-width: 1008px;
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
      transparent 95%
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
      grid-template-rows: 3rem 2rem 15rem min-content auto;

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
        margin-bottom: 1rem;
        margin-top: 0;
      }
    }

    ::-webkit-scrollbar {
      width: 0.25rem;
    }

    ::-webkit-scrollbar-track {
      box-shadow: inset 0 0 5px #80808040;
      margin-bottom: 2rem;
      border-radius: 1rem;
    }

    ::-webkit-scrollbar-thumb {
      background: silver;
      border-radius: 1rem;
    }

    ::-webkit-scrollbar-thumb:hover {
      background: grey;
    }
  }

  @media (min-width: 1080px) {
    min-width: 22rem;
    position: initial;
    border-radius: 2rem;
    padding: 2rem;
    height: fit-content;

    > section {
      height: fit-content;

      > div {
        padding: 1rem 0;
        min-height: 6.875rem;
        &:first-of-type {
          padding-top: 0;
        }
      }
    }
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
