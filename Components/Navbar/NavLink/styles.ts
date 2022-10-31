import styled from 'styled-components'

type LinkContainerProps = {
  active: boolean
}

export const LinkContainer = styled.li<LinkContainerProps>`
  margin: 0 1rem;
  color: ${({ active }) => (active ? 'red' : 'black')};
  font-weight: ${({ active }) => (active ? '600' : 'normal')};
`
