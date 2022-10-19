import Image from 'next/image'
import { Container } from './styles'

type PokemonCardProps = {
  name: string
  id: number
}

export function PokemonCard({ id, name }: PokemonCardProps) {
  const imageId = `${id}`.padStart(3, '0')

  return (
    <Container>
      <Image
        layout="responsive"
        width={300}
        height={300}
        alt={name}
        src={`https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${imageId}.png`}
      />
      <h3>{name}</h3>
    </Container>
  )
}
