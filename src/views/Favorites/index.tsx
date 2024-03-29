import { ListContainer, PokemonCard } from '@/Components'
import { formatPokemons } from '@/lib/utils/formatPokemons'
import { InfiniteScroll } from '@/Components/InfiniteScroll'
import { useEffect, useState } from 'react'
import { useAmplitude } from '@/lib/utils/amplitude/useAmplitude'
import { AmplitudeEventsName } from '@/lib/models/Amplitude'
import { MainLayout } from '@/src/layouts/MainLayout'
import { useGetPokemonsByIds } from './gql/getPokemonsById'

export function FavoritesView() {
  const { dispatchSimpleEvent } = useAmplitude()
  const likesFromStorage =
    typeof window === 'undefined' ? '[]' : localStorage.getItem('likes')
  const [likedPokemons, setLikedPokemons] = useState<number[]>(
    JSON.parse(likesFromStorage || '[]')
  )

  const { data, fetchMore, loading } = useGetPokemonsByIds({
    variables: {
      ids: likedPokemons,
      cacheType: 'likedPokemons',
    },
  })

  useEffect(() => {
    dispatchSimpleEvent(AmplitudeEventsName.loadedPokemonList)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const pokemons = formatPokemons(data).filter(({ id }) =>
    likedPokemons.includes(id)
  )

  function handleFetchMore() {
    fetchMore({ variables: { offset: pokemons.length, limit: 52 } })
  }

  function onRemoveFromLikes(id: number) {
    const newLikedPokemons = [...likedPokemons.filter(item => item !== id)]
    setLikedPokemons(newLikedPokemons)
  }

  return (
    <MainLayout>
      <InfiniteScroll
        fetchMore={handleFetchMore}
        hasMore={likedPokemons.length !== pokemons.length}
        initialPage={0}
        hidden={loading}
      >
        <ListContainer loading={loading}>
          {pokemons.map(item => (
            <PokemonCard
              key={item.id}
              {...item}
              onRemoveFromLikes={() => onRemoveFromLikes(item.id)}
            />
          ))}
        </ListContainer>
      </InfiniteScroll>
    </MainLayout>
  )
}
