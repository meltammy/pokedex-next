import { Badge, LikeButton } from '@/Components'
import { Arrow } from '@/Components/Icons/Arrow'
import { ProgressBar } from '@/Components/ProgressBar'
import { useNextPrevPokemons } from '@/lib/graphql/queries/getNextPrevPokemons'
import { FormattedPokemonDetail } from '@/lib/models'
import { formatId } from '@/lib/utils/formatPokemons'
import { getColors } from '@/lib/utils/getColors'
import { MainLayout } from '@/src/layouts'
import { Routes } from '@/src/routes'
import Image from 'next/image'
import Link from 'next/link'
import Router from 'next/router'
import { useEffect, useState } from 'react'
import {
  Container,
  DataContainer,
  Id,
  ImageContainer,
  Name,
  NextArrow,
  PrevArrow,
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
  const { data, refetch } = useNextPrevPokemons({
    variables: {
      ids: [id - 1, id + 1],
    },
    onCompleted: ({ pokemon_v2_pokemon }) => {
      pokemon_v2_pokemon.forEach(({ name }) =>
        Router.prefetch(Routes.POKEMON_DETAIL + name)
      )
    },
  })

  useEffect(() => {
    refetch()
    setSrc(image)
  }, [id])

  const colorType =
    types.length === 1 ? types : types.filter(type => type !== 'normal')

  const prevPokemonUrl =
    data?.pokemon_v2_pokemon.length === 1
      ? undefined
      : Routes.POKEMON_DETAIL + data?.pokemon_v2_pokemon[0].name
  const nextPokemonUrl =
    data?.pokemon_v2_pokemon.length === 1
      ? Routes.POKEMON_DETAIL + data?.pokemon_v2_pokemon[0].name
      : Routes.POKEMON_DETAIL + data?.pokemon_v2_pokemon[1].name

  return (
    <MainLayout>
      <Container backgroundColor={getColors(colorType[0]).backgroundColor}>
        {prevPokemonUrl && (
          <Link href={prevPokemonUrl} passHref>
            <PrevArrow>
              <Arrow />
            </PrevArrow>
          </Link>
        )}

        <section>
          <h1>{name}</h1>
          <Name text={name} />

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
            {stats.map(item => {
              return Object.entries(item).map(([label, progress]) => (
                <ProgressBar key={label} progress={progress} label={label} />
              ))
            })}
          </DataContainer>
        </section>
        {nextPokemonUrl && (
          <Link href={nextPokemonUrl} passHref>
            <NextArrow>
              <Arrow />
            </NextArrow>
          </Link>
        )}
      </Container>
    </MainLayout>
  )
}
