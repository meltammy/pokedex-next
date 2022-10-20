import { ReactNode } from 'react'
import { Container } from './styles'

type ListContainerProps = {
  children: ReactNode
}

export function ListContainer({ children }: ListContainerProps) {
  return <Container>{children}</Container>
}
