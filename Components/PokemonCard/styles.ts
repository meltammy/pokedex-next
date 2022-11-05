import styled from 'styled-components'

type ContainerProps = {
  backgroundColor: string
}

export const Container = styled.a<ContainerProps>`
  display: grid;
  grid-template-areas:
    'image image image'
    'id . .' 'name . like'
    'types types types';

  border-radius: 1rem;
  padding: 1rem;
  width: 13rem;
  box-shadow: 1px 1px 7px 2px #00000024;
  background: linear-gradient(
    ${({ backgroundColor }) => backgroundColor} 0%,
    transparent 68%
  ) !important;

  span {
    margin-right: 0.5rem;
  }

  > small {
    grid-area: id;
  }

  > h3 {
    grid-area: name;
    margin-top: 0.3rem;
    display: inline;
    text-transform: capitalize;
  }

  > span {
    grid-area: image;
  }

  > div {
    grid-area: types;
    height: fit-content;
  }

  @media (max-width: 515px) {
    width: 100%;
    grid-template-areas:
      'id . like'
      'name image image'
      '. image image'
      'types image image';
    grid-template-columns: auto 40% 2rem;
    grid-template-rows: min-content 2rem auto 1.5rem;

    h3 {
      font-size: 1.5rem;
      margin: 0;
    }
  }
`
