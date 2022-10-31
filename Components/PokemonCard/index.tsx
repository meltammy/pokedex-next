import { FormattedPokemon } from '@/lib/models'
import { getColors } from '@/lib/utils/getColors'
import Image from 'next/image'
import { useState } from 'react'
import { Badge } from '../Badge'
import { LikeButton } from '../LikeButton'
import { Container } from './styles'

type PokemonCardProps = FormattedPokemon & {
  onRemoveFromLikes?: (id: number) => void
}

export function PokemonCard({
  id,
  name,
  types,
  sprites,
  onRemoveFromLikes,
}: PokemonCardProps) {
  const imageId = `${id}`.padStart(3, '0')
  const [src, setSrc] = useState(
    `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${imageId}.png`
  )

  return (
    <Container backgroundColor={getColors(types[0]).backgroundColor}>
      <Image
        layout="responsive"
        width={300}
        height={300}
        alt={name}
        src={src}
        onError={() => setSrc(sprites || '')}
      />
      <small>Nº{id}</small>
      <h3>{name}</h3>
      <LikeButton id={id} onRemoveFromLikes={onRemoveFromLikes} />
      <div>
        {types.map((item, index) => (
          <Badge key={index} text={item} />
        ))}
      </div>
    </Container>
  )
}
