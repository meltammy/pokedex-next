import styled from 'styled-components'

type ButtonProps = {
  isLiked: boolean
}

export const Button = styled.button<ButtonProps>`
  background-color: transparent;
  border: none;
  color: ${({ isLiked }) => (isLiked ? 'hotpink' : 'darkgrey')};
  padding: 0;

  @media (max-width: 515px) {
    color: ${({ isLiked }) => (isLiked ? 'hotpink' : 'white')};
  }

  &:hover {
    color: hotpink;

    @media (max-width: 768px) {
      color: ${({ isLiked }) => (isLiked ? 'hotpink' : 'darkgrey')};
    }

    @media (max-width: 515px) {
      color: ${({ isLiked }) => (isLiked ? 'hotpink' : 'white')};
    }
  }
`
