import { Badge, LikeButton } from '@/Components'
import { ProgressBar } from '@/Components/ProgressBar'
import { FormattedPokemonDetail } from '@/lib/models'
import { formatId } from '@/lib/utils/formatPokemons'
import { getColors } from '@/lib/utils/getColors'
import { MainLayout } from '@/src/layouts'
import Image from 'next/image'
import { useState } from 'react'
import {
  Container,
  DataContainer,
  Id,
  ImageContainer,
  TypesContainer,
} from './styles'

const badgeColors = {
  backgroundColor: '#ffffff29',
  color: 'white',
}

export function PokemonDetailView({
  name,
  types,
  sprites,
  image,
  id,
  stats,
}: FormattedPokemonDetail) {
  const [src, setSrc] = useState(image)
  const colorType =
    types.length === 1 ? types : types.filter(type => type !== 'normal')

  return (
    <MainLayout>
      <Container backgroundColor={getColors(colorType[0]).backgroundColor}>
        <h1>{name}</h1>
        <Id text={formatId(id)} />
        <LikeButton id={id} />
        <TypesContainer>
          {types.map(type => (
            <Badge key={type} text={type} colors={badgeColors} />
          ))}
        </TypesContainer>
        <ImageContainer>
          <Image
            layout="responsive"
            width={300}
            height={300}
            alt={name}
            src={src}
            onError={() => setSrc(sprites || '')}
          />
        </ImageContainer>
        <DataContainer>
          {stats.map(item => {
            return Object.entries(item).map(([label, progress]) => (
              <ProgressBar key={label} progress={progress} label={label} />
            ))
          })}
        </DataContainer>
      </Container>
    </MainLayout>
  )
}
