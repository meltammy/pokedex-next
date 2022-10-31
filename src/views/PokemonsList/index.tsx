import { useGetPokemonsQuery } from '@/lib/api/getPokemons'
import { ListContainer, PokemonCard } from '@/Components'
import { formatPokemons } from '@/lib/utils/formatPokemons'
import { InfiniteScroll } from '@/Components/InfiniteScroll'
import { useEffect } from 'react'
import { useAmplitude } from '@/lib/utils/amplitude/useAmplitude'
import { AmplitudeEventsName } from '@/lib/models/Amplitude'
import { MainLayout } from '@/src/layouts/MainLayout'
import { hasMoreVar } from '@/lib/graphql/apolloClient'
import { SearchInput } from '@/Components/SearchInput'
import { useDebouncedSearchInput } from '@/lib/hooks/useDebouncedInput'
import { Container, LoadingContainer } from './styles'
import { PikachuLoading } from '@/Components/PikachuLoading'

export function PokemonsListView() {
  const { dispatchSimpleEvent } = useAmplitude()

  const { debouncedValue: searchName, bind } = useDebouncedSearchInput('')
  const { data, fetchMore, loading } = useGetPokemonsQuery({
    variables: {
      limit: 20,
      cacheType: 'allPokemons',
      name: searchName,
    },
  })

  useEffect(() => {
    dispatchSimpleEvent(AmplitudeEventsName.loadedPokemonList)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const pokemons = formatPokemons(data)

  function handleFetchMore() {
    fetchMore({ variables: { offset: pokemons.length, limit: 52 } })
  }

  return (
    <MainLayout>
      <Container>
        <SearchInput placeholder="Buscar por nome" {...bind} />
      </Container>
      {loading ? (
        <LoadingContainer>
          <PikachuLoading />
        </LoadingContainer>
      ) : (
        <InfiniteScroll
          fetchMore={handleFetchMore}
          hasMore={hasMoreVar()}
          initialPage={0}
        >
          <ListContainer>
            {pokemons.map(item => (
              <PokemonCard key={item.id} {...item} />
            ))}
          </ListContainer>
        </InfiniteScroll>
      )}
    </MainLayout>
  )
}
