import { Badge, LikeButton } from '@/Components'
import { Arrow } from '@/Components/Icons/Arrow'
import { ProgressBar } from '@/Components/ProgressBar'
import { useNextPrevPokemons } from '@/lib/graphql/queries/getNextPrevPokemons'
import { useGetPokemonEvolutionQuery } from '@/lib/graphql/queries/getPokemonEvolution'
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
  EvolutionsContainerMobile,
  EvolutionsContainerDesktop,
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
  abilities,
  evolutionId,
}: FormattedPokemonDetail) {
  const [src, setSrc] = useState(image)
  const { data: evolutionsData } = useGetPokemonEvolutionQuery({
    variables: { id: evolutionId },
    skip: !evolutionId,
  })
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

              {evolutionsData && (
                <EvolutionsContainerMobile>
                  <h3>Evolutions</h3>
                  {evolutionsData.evolutions.map(({ name, image }, index) => (
                    <div key={name}>
                      <div>
                        <Image
                          layout="responsive"
                          width={300}
                          height={300}
                          alt={name}
                          src={image}
                        />
                        <Link href={Routes.POKEMON_DETAIL + name}>{name}</Link>
                      </div>
                      {index !== evolutionsData.evolutions.length - 1 && (
                        <Arrow />
                      )}
                    </div>
                  ))}
                </EvolutionsContainerMobile>
              )}
            </section>
          </DataContainer>
          {evolutionsData && (
            <EvolutionsContainerDesktop>
              <h3>Evolutions</h3>
              {evolutionsData.evolutions.map(({ name, image }, index) => (
                <div key={name}>
                  <div>
                    <Image
                      layout="responsive"
                      width={300}
                      height={300}
                      alt={name}
                      src={image}
                    />
                    <Link href={Routes.POKEMON_DETAIL + name}>{name}</Link>
                  </div>
                  {index !== evolutionsData.evolutions.length - 1 && <Arrow />}
                </div>
              ))}
            </EvolutionsContainerDesktop>
          )}
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
