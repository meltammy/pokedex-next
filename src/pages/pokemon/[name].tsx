import type { GetStaticProps, NextPage } from 'next'

import { PokemonDetailView } from '@/src/views/PokemonDetail'
import { fetchPokemonDetail } from '@/lib/graphql/queries/getPokemonDetails'
import { ComponentProps } from 'react'
import { formatPokemonDetail } from '@/lib/utils/formatPokemons'
import { SplashScreen } from '@/src/views/SplashScreen'
import { fetchPokemonsName } from '@/lib/graphql/queries/getPokemonsName'

type PageProps = ComponentProps<typeof PokemonDetailView>

const PokemonList: NextPage<PageProps> = props => {
  if (!props.id) return <SplashScreen />
  return <PokemonDetailView {...props} />
}

export const getStaticPaths = async () => {
  const response = await fetchPokemonsName()

  const paths = response.data.pokemon_v2_pokemon.map(({ name }) => {
    return {
      params: {
        name,
      },
    }
  })

  return { paths, fallback: true }
}

export const getStaticProps: GetStaticProps<PageProps> = async ({ params }) => {
  const name = params?.name
  if (!name || Array.isArray(name)) return { notFound: true }

  const response = await fetchPokemonDetail(name)
  const pokemon = formatPokemonDetail(response.data)

  return {
    props: { ...pokemon },
    revalidate: 60 * 60 * 7 * 48,
  }
}

export default PokemonList
