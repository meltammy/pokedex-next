import styled, { keyframes } from 'styled-components'

type PokeballProps = {
  open: boolean
}

export const Container = styled.div<PokeballProps>`
  display: flex;
  flex-direction: column;
  max-height: 100vh;
  overflow: hidden;
  transition: 0.7s;
`

export const MainContainer = styled.div<PokeballProps>`
  transition: 0.7s;
  min-height: ${({ open }) => (open ? '85vh' : '0')};
  height: ${({ open }) => (open ? 'fit-content' : '0vh')};
  opacity: ${({ open }) => (open ? 1 : 0.1)};

  background: radial-gradient(circle, #1d1d1d 0%, #000 80%);

  padding: ${({ open }) => (open ? '8rem 1rem 1rem 1rem' : '0')};
  display: flex;
  flex-direction: column;
  max-width: 100%;
  overflow: hidden;
  justify-content: space-between;
  align-items: center;
  color: white;

  a:hover {
    color: #ffbd4a;
    border-color: #ffbd4a;
  }

  h1 {
    max-width: 35rem;
    text-align: center;
    display: flex;

    @media (max-width: 760px) {
      max-width: 20rem;
    }
  }

  > a {
    border: 1px white solid;
    padding: 0.5rem 1rem;
    border-radius: 0.2rem;
    box-shadow: 0px 4px 5px 2px #0000009e;
    transition: 0.2s;

    &:hover {
      box-shadow: 0px 4px 5px 2px #000000;
    }
  }

  > div {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    a {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 0.5rem;
    }
  }

  @media (max-width: 768px) {
    min-height: ${({ open }) => (open ? '87vh' : '0')};
    padding: ${({ open }) => (open ? '4rem 1rem 3rem 1rem' : '0')};
  }
`

export const Header = styled.div<PokeballProps>`
  max-width: 100%;
  width: 100%;
  background-color: red;
  display: flex;
  height: ${({ open }) => (open ? '15vh' : '50vh')};
  border-bottom: 1rem black solid;
  transition: 0.7s;
  @media (max-width: 760.5rem) {
    height: ${({ open }) => (open ? '13vh' : '50vh')};
  }
`

export const Footer = styled.div<PokeballProps>`
  width: 100%;
  background-color: white;
  height: ${({ open }) => (open ? 0 : '50vh')};
  border-top: 1rem black solid;
  transition: 0.6s;
`

export const PokeButton = styled.button<PokeballProps>`
  border-radius: 100vh;
  width: 24vh;
  height: 24vh;
  margin: ${({ open }) => (open ? '3vh' : '38vh')} auto 0 auto;
  position: relative;
  display: flex;
  border: 0.8rem black solid;
  background-color: rgba(255, 255, 255);
  transition: 0.7s;
  outline: none;
  padding: 0;
  z-index: 9999;

  span {
    display: ${({ open }) => (open ? 'none' : 'block')};
  }

  @media (max-width: 768px) {
    width: 18vh;
    height: 18vh;
    margin: ${({ open }) => (open ? '3vh' : '41vh')} auto 0 auto;
  }
`

const opacityAnimation = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 0.8;
  }
`

export const ButtonDetail = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 100px;
  box-shadow: inset 0px 0 16px 2px #00000066;
  border: 0.5rem #00000012 solid;
  display: flex;

  span {
    margin: auto;
    opacity: 0;

    animation: ${opacityAnimation} 20s infinite;
  }

  :active {
    box-shadow: inset 0px 0 16px 6px #00000066;
  }
`
