import styled from 'styled-components'

export const Container = styled.button`
  width: 2rem;
  height: 2rem;
  position: absolute;
  top: 12rem;
  background: transparent;
  border: none;
  cursor: pointer;
  z-index: 99999;

  @media (min-width: 1080px) {
    position: initial;
  }
`
