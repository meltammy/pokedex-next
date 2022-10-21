import { useGetUserQuery } from '@/lib/api/getPokemons'
import { ListContainer, PokemonCard } from '@/Components'
import { formatPokemons } from '@/lib/utils/formatPokemons'
import { InfiniteScroll } from '@/Components/InfiniteScroll'
import { SplashScreen } from '../SplashScreen'
import { useState } from 'react'

export function PokemonsListView() {
  const [showSplashScreen, setShowSplashScreen] = useState(true)
  const { data, fetchMore, loading } = useGetUserQuery({
    variables: {
      limit: 24,
    },
  })

  setTimeout(() => {
    setShowSplashScreen(false)
  }, 3000)

  if (loading || !data || showSplashScreen) return <SplashScreen />

  const pokemons = formatPokemons(data)

  function handleFetchMore() {
    fetchMore({ variables: { offset: pokemons.length, limit: 52 } })
  }

  return (
    <InfiniteScroll fetchMore={handleFetchMore} hasMore={true} initialPage={0}>
      <ListContainer>
        {pokemons.map(item => (
          <PokemonCard key={item.id} {...item} />
        ))}
      </ListContainer>
    </InfiniteScroll>
  )
}
