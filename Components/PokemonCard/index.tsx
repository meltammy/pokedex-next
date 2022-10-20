import { FormattedPokemon } from '@/lib/models'
import { getColors } from '@/lib/utils/getColors'
import Image from 'next/image'
import { Badge } from '../Badge'
import { LikeButton } from '../LikeButton'
import { Container, Header } from './styles'

type PokemonCardProps = FormattedPokemon

export function PokemonCard({ id, name, types }: PokemonCardProps) {
  const imageId = `${id}`.padStart(3, '0')

  return (
    <Container backgroundColor={getColors(types[0]).backgroundColor}>
      <Image
        layout="responsive"
        width={300}
        height={300}
        alt={name}
        src={`https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${imageId}.png`}
      />
      <small>Nº{id}</small>
      <Header>
        <h3>{name}</h3>
        <LikeButton id={id} />
      </Header>
      <div>
        {types.map((item, index) => (
          <Badge key={index} text={item} />
        ))}
      </div>
    </Container>
  )
}
