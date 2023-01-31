import { Container, OutlinedName } from './styles'

type Props = {
  name: string
}

export function PokemonName({ name }: Props) {
  return (
    <Container>
      <h1>{name}</h1>
      <OutlinedName text={name} />
    </Container>
  )
}
