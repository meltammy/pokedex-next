import { Arrow } from '@/Components/Icons/Arrow'
import { Routes } from '@/src/routes'
import Link from 'next/link'
import Router from 'next/router'
import { useNextPrevPokemons } from '../../gql/getNextPrevPokemons'
import { Container } from './styles'

type Props = {
  id: number
}

export function NextArrow({ id }: Props) {
  const hasNext = id < Number(process.env.NEXT_PUBLIC_MAX_ID)

  const { data, loading } = useNextPrevPokemons({
    variables: { ids: [id + 1] },
    onCompleted: ({ pokemon_v2_pokemon }) => {
      Router.prefetch(Routes.POKEMON_DETAIL + pokemon_v2_pokemon[0].name)
    },
    skip: !hasNext,
  })

  if (!hasNext) return null

  const href = Routes.POKEMON_DETAIL + data?.pokemon_v2_pokemon[0].name

  return (
    <Link href={href} passHref>
      <Container disabled={loading}>
        <Arrow />
      </Container>
    </Link>
  )
}
