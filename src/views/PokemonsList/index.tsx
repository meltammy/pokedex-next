import { useGetPokemonsQuery } from '@/lib/graphql/queries/getPokemons'
import { ListContainer, PokemonCard } from '@/Components'
import { formatPokemons } from '@/lib/utils/formatPokemons'
import { InfiniteScroll } from '@/Components/InfiniteScroll'
import { useEffect, useState } from 'react'
import { useAmplitude } from '@/lib/utils/amplitude/useAmplitude'
import { AmplitudeEventsName } from '@/lib/models/Amplitude'
import { MainLayout } from '@/src/layouts/MainLayout'
import { SearchInput } from '@/Components/SearchInput'
import { useDebouncedSearchInput } from '@/lib/hooks/useDebouncedInput'
import { Container, LoadingContainer } from './styles'
import { PikachuLoading } from '@/Components/PikachuLoading'

const firstLimit = 20

export function PokemonsListView() {
  const { dispatchSimpleEvent } = useAmplitude()
  const [hasMore, setHasMore] = useState(true)
  const { debouncedValue: searchName, bind } = useDebouncedSearchInput('')
  const { data, fetchMore, loading } = useGetPokemonsQuery({
    variables: {
      limit: firstLimit,
      cacheType: 'allPokemons',
      name: searchName,
    },
  })

  useEffect(() => {
    dispatchSimpleEvent(AmplitudeEventsName.loadedPokemonList)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const pokemons = formatPokemons(data)

  useEffect(() => {
    setHasMore(pokemons.length >= firstLimit)
  }, [pokemons.length])

  function handleFetchMore() {
    fetchMore({ variables: { offset: pokemons.length, limit: 52 } }).then(
      ({ data }) => {
        setHasMore(Boolean(data.pokemon_v2_pokemon.length))
      }
    )
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
          hasMore={hasMore}
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
