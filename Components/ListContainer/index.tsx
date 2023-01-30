import { ReactNode } from 'react'
import { PikachuLoading } from '../PikachuLoading'
import { Container, LoadingContainer } from './styles'

type ListContainerProps = {
  children: ReactNode
  loading?: boolean
}

export function ListContainer({
  children,
  loading = false,
}: ListContainerProps) {
  if (loading)
    return (
      <LoadingContainer>
        <PikachuLoading />
      </LoadingContainer>
    )

  return <Container>{children}</Container>
}
