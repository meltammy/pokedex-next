import type { GetStaticPaths, GetStaticProps, NextPage } from 'next'

import { PokemonDetailView } from '@/src/views/PokemonDetail'
import { fetchPokemonDetail } from '@/src/views/PokemonDetail/gql/getPokemonDetails'
import { ComponentProps } from 'react'
import { formatPokemonDetail } from '@/lib/utils/formatPokemons'
import { SplashScreen } from '@/src/views/SplashScreen'

type PageProps = ComponentProps<typeof PokemonDetailView>
type PageQuery = { name: string }

const PokemonList: NextPage<PageProps> = props => {
  if (!props.id) return <SplashScreen />
  return <PokemonDetailView {...props} />
}

export const getStaticPaths: GetStaticPaths<PageQuery> = async () => {
  return { paths: [], fallback: true }
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
