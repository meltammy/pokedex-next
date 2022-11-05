import { LikeButton } from '@/Components'
import { FormattedPokemonDetail } from '@/lib/models'
import { getColors } from '@/lib/utils/getColors'
import { MainLayout } from '@/src/layouts'
import Image from 'next/image'
import { useState } from 'react'
import { Container, DataContainer, ImageContainer } from './styles'

export function PokemonDetailView({
  name,
  types,
  sprites,
  image,
  id,
}: FormattedPokemonDetail) {
  const [src, setSrc] = useState(image)
  const colorType =
    types.length === 1 ? types : types.filter(type => type !== 'normal')

  return (
    <MainLayout>
      <Container backgroundColor={getColors(colorType[0]).backgroundColor}>
        <h1>{name}</h1>
        <LikeButton id={id} />
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
        <DataContainer></DataContainer>
      </Container>
    </MainLayout>
  )
}
