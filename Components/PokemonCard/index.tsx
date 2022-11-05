import { FormattedPokemon } from '@/lib/models'
import { getColors } from '@/lib/utils/getColors'
import { Routes } from '@/src/routes'
import Image from 'next/image'
import Link from 'next/link'
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
  image,
  onRemoveFromLikes,
}: PokemonCardProps) {
  const [src, setSrc] = useState(image)
  const colorType =
    types.length === 1 ? types : types.filter(type => type !== 'normal')

  return (
    <Link href={Routes.POKEMON_DETAIL + name} passHref>
      <Container backgroundColor={getColors(colorType[0]).backgroundColor}>
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
    </Link>
  )
}
