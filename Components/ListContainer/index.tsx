import { ReactNode } from 'react'
import { NotFound } from '../NotFound'
import { PikachuLoading } from '../PikachuLoading'
import { Container, LoadingContainer } from './styles'

type ListContainerProps = {
  children: ReactNode
  loading?: boolean
  showNotFound?: boolean
  notFoundText?: string
  notFoundAction?: ReactNode
}

export function ListContainer({
  children,
  loading = false,
  showNotFound = false,
  notFoundText,
  notFoundAction,
}: ListContainerProps) {
  if (loading)
    return (
      <LoadingContainer>
        <PikachuLoading />
      </LoadingContainer>
    )

  if (showNotFound)
    return <NotFound text={notFoundText} action={notFoundAction} />

  return <Container>{children}</Container>
}
