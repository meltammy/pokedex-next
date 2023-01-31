import { Arrow } from '@/Components/Icons/Arrow'
import { Routes } from '@/src/routes'
import Link from 'next/link'
import Router from 'next/router'
import { useNextPrevPokemons } from '../../gql/getNextPrevPokemons'
import { Container } from './styles'

type Props = {
  id: number
}

export function PrevArrow({ id }: Props) {
  const hasPrev = id > 1

  const { data, loading } = useNextPrevPokemons({
    variables: { ids: [id - 1] },
    onCompleted: ({ pokemon_v2_pokemon }) => {
      Router.prefetch(Routes.POKEMON_DETAIL + pokemon_v2_pokemon[0].name)
    },
    skip: !hasPrev,
  })

  if (!hasPrev) return null

  const href = Routes.POKEMON_DETAIL + data?.pokemon_v2_pokemon[0].name

  return (
    <Link href={href} passHref>
      <Container disabled={loading}>
        <Arrow />
      </Container>
    </Link>
  )
}
