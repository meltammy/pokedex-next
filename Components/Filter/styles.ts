import styled from 'styled-components'

export const Drawer = styled.div<{ isOpen: boolean }>`
  width: ${({ isOpen }) => (isOpen ? '20rem' : 0)};
  background-color: white;
  padding: ${({ isOpen }) => (isOpen ? '0 2rem 3rem 2rem' : 0)};
  height: 100%;
  position: fixed;
  z-index: 1;
  top: 0;
  right: 0;
  overflow: hidden;
  transition: 0.5s;
  box-shadow: 0px 0px 8px #00000075;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  overflow: auto;

  header {
    display: flex;
    justify-content: space-between;

    button {
      background: none;
      border: none;
      font-size: 2rem;
      :hover {
        cursor: pointer;
      }
    }
  }

  footer {
    padding-top: 1rem;
    border-top: 1px silver solid;
    button {
      font-size: 1.25rem;
      border: none;
      font-weight: bold;

      &:hover {
        cursor: pointer;
      }

      &[type='submit'] {
        background: lightskyblue;
        padding: 0.2rem 2rem;
        border: 1px silver solid;
        border-radius: 0.2rem;
        font-weight: bold;
      }

      &[type='reset'] {
        background: none;
        border: none;
        color: gray;
        margin-left: 1rem;
      }
    }
  }

  label {
    text-transform: capitalize;
    margin-left: 0.5rem;
  }

  section {
    border-top: 1px silver solid;
    padding: 1rem;

    > h3 {
      margin-top: 0;
    }
  }

  section > div {
    white-space: nowrap;
    margin: 0.2rem 0;
    font-size: 1.25rem;
  }

  @media (max-width: 515px) {
    width: ${({ isOpen }) => (isOpen ? '100vw' : 0)};
  }
`

export const OrderBySection = styled.section`
  display: flex;

  h3 {
    margin: 0;
  }

  select {
    margin-left: 1rem;
    border: none;
    height: 1.17em;
    font-size: 1.17em;
  }
`
