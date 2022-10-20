import styled from 'styled-components'

type ContainerProps = {
  backgroundColor: string
}

export const Container = styled.div<ContainerProps>`
  border-radius: 1rem;
  padding: 1rem;
  box-shadow: 1px 1px 7px 2px #00000024;
  width: 13rem;
  background: linear-gradient(
    ${({ backgroundColor }) => backgroundColor} 0%,
    transparent 68%
  ) !important;

  span {
    margin-right: 0.5rem;
  }
`

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;

  h3 {
    margin-top: 0.3rem;
    display: inline;
  }
`
