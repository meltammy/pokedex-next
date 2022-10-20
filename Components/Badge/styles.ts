import styled from 'styled-components'

type BadgeProps = {
  color: string
  backgroundColor: string
}

export const Badge = styled.span<BadgeProps>`
  background-color: ${({ backgroundColor }) => backgroundColor};
  color: ${({ color }) => color};
  padding: 0.2rem 0.5rem;
  border-radius: 6rem;
`
