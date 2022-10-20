import styled from 'styled-components'

type ButtonProps = {
  isLiked: boolean
}

export const Button = styled.button<ButtonProps>`
  background-color: transparent;
  border: none;
  color: ${({ isLiked }) => (isLiked ? 'red' : 'gray')};

  &:hover {
    color: red;
  }
`
