import styled from 'styled-components'

export const Container = styled.button`
  width: 2rem;
  height: 2rem;
  position: absolute;
  top: 12rem;
  right: 0;
  rotate: 180deg;
  background: transparent;
  border: none;
  cursor: pointer;

  @media (min-width: 1080px) {
    position: initial;
  }
`
