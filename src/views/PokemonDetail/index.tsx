import { Badge, LikeButton } from '@/Components'
import { ProgressBar } from '@/Components/ProgressBar'

import { useGetPokemonEvolution } from './gql/getPokemonEvolution'
import { FormattedPokemonDetail } from '@/lib/models'

import { formatId } from '@/lib/utils/formatPokemons'
import { getColors } from '@/lib/utils/getColors'
import { MainLayout } from '@/src/layouts'
import Image from 'next/image'

import { useEffect, useState } from 'react'
import {
  Container,
  DataContainer,
  Id,
  ImageContainer,
  TypesContainer,
} from './styles'
import {
  EvolutionsDesktop,
  EvolutionsMobile,
  NextArrow,
  PokemonName,
  PrevArrow,
} from './components'

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
  abilities,
  evolutionId,
}: FormattedPokemonDetail) {
  const [src, setSrc] = useState(image)
  const { data: evolutionsData } = useGetPokemonEvolution({
    variables: { id: evolutionId },
    skip: !evolutionId,
  })

  useEffect(() => {
    setSrc(image)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id])

  const colorType =
    types.length === 1 ? types : types.filter(type => type !== 'normal')

  return (
    <MainLayout>
      <Container backgroundColor={getColors(colorType[0]).backgroundColor}>
        <PrevArrow id={id} />

        <section>
          <PokemonName name={name} />
          <Id text={formatId(id)} />
          <LikeButton id={id} />

          <TypesContainer>
            {types.map(type => (
              <Badge key={type} text={type} colors={badgeColors} />
            ))}
          </TypesContainer>

          <ImageContainer id={name}>
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
            <section>
              <div>
                <h3>Stats</h3>
                {stats.map(item => {
                  return Object.entries(item).map(([label, progress]) => (
                    <ProgressBar
                      key={label}
                      progress={progress}
                      label={label}
                    />
                  ))
                })}
              </div>

              <div>
                <h3>Abilities</h3>
                <span>{abilities.join(', ')}</span>
              </div>

              <EvolutionsMobile evolutionsData={evolutionsData} />
            </section>
          </DataContainer>

          <EvolutionsDesktop evolutionsData={evolutionsData} />
        </section>

        <NextArrow id={id} />
      </Container>
    </MainLayout>
  )
}
