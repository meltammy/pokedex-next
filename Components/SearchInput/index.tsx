import { DetailedHTMLProps, InputHTMLAttributes } from 'react'
import { Container } from './styles'

type SearchInputProps = DetailedHTMLProps<
  InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>

export function SearchInput({ ...props }: SearchInputProps) {
  return (
    <Container>
      <input {...props} />
    </Container>
  )
}
