import { useGetUserQuery } from '@/lib/api/getPokemons'
import { ListContainer, PokemonCard } from '@/Components'
import { formatPokemons } from '@/lib/utils/formatPokemons'
import { InfiniteScroll } from '@/Components/InfiniteScroll'
import { SplashScreen } from '../SplashScreen'
import { useEffect, useState } from 'react'
import { useAmplitude } from '@/lib/utils/amplitude/useAmplitude'
import { AmplitudeEventsName } from '@/lib/models/Amplitude'

export function PokemonsListView() {
  const { dispatchSimpleEvent } = useAmplitude()

  const [showSplashScreen, setShowSplashScreen] = useState(true)
  const { data, fetchMore, loading } = useGetUserQuery({
    variables: {
      limit: 24,
    },
  })

  setTimeout(() => {
    setShowSplashScreen(false)
  }, 3000)

  useEffect(() => {
    dispatchSimpleEvent(AmplitudeEventsName.loadedPokemonList)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

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
