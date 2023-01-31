import { ListContainer, PokemonCard } from '@/Components'
import { formatPokemons } from '@/lib/utils/formatPokemons'
import { InfiniteScroll } from '@/Components/InfiniteScroll'
import { useEffect, useState } from 'react'
import { useAmplitude } from '@/lib/utils/amplitude/useAmplitude'
import { AmplitudeEventsName } from '@/lib/models/Amplitude'
import { MainLayout } from '@/src/layouts/MainLayout'
import { SearchInput } from '@/Components/SearchInput'
import { useDebouncedSearchInput } from '@/lib/hooks/useDebouncedInput'
import { Container } from './styles'
import { types } from '@/lib/models/types'
import { FilterIcon } from '@/Components/Icons/Filter'
import { FilterDrawer } from '@/Components/Filter'
import { useGetPokemons } from './gql/getPokemons'

const firstLimit = 20

enum Order {
  ID = 'id',
  NAME = 'name',
}

type FormData = {
  types: string[]
  maxId: number
  orderBy: Order
}

const initialFiltersValue = {
  types: [],
  maxId: Number(process.env.NEXT_PUBLIC_MAX_ID),
  orderBy: Order.ID,
}

export function PokemonsListView() {
  const { dispatchSimpleEvent } = useAmplitude()
  const [hasMore, setHasMore] = useState(true)
  const [drawerIsOpen, setDrawerIsOpen] = useState(false)
  const { debouncedValue: searchName, bind } = useDebouncedSearchInput('')
  const [filters, setFilters] = useState<FormData>(initialFiltersValue)
  const { data, fetchMore, loading } = useGetPokemons({
    variables: {
      limit: firstLimit,
      cacheType: 'allPokemons',
      name: searchName,
      types: filters?.types?.length ? filters.types : types,
      maxId: filters.maxId,
      orderBy: {
        [filters.orderBy]: 'asc',
      },
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

  const filterConter =
    filters.types.length +
    (filters.maxId !== Number(process.env.NEXT_PUBLIC_MAX_ID) ? 1 : 0)

  function resetFilter() {
    setDrawerIsOpen(false)
    setFilters(initialFiltersValue)
  }

  function onClickNotFoundAction() {
    setFilters(initialFiltersValue)
    bind.setValue('')
  }

  return (
    <MainLayout>
      <FilterDrawer
        isOpen={drawerIsOpen}
        onClose={() => setDrawerIsOpen(false)}
        resetFilter={resetFilter}
        setFilters={setFilters}
        filters={filters}
      />
      <Container>
        <SearchInput placeholder="Buscar por nome" {...bind} />
        <button onClick={() => setDrawerIsOpen(!drawerIsOpen)}>
          <FilterIcon />
          {!!filterConter && <span>{filterConter}</span>}
        </button>
      </Container>
      <InfiniteScroll
        fetchMore={handleFetchMore}
        hasMore={hasMore}
        initialPage={0}
        hidden={loading}
      >
        <ListContainer
          loading={loading}
          showNotFound={!pokemons.length}
          notFoundText="<h1>No results found</h1>"
          notFoundAction={
            <button type="reset" onClick={onClickNotFoundAction}>
              Clear Filters
            </button>
          }
        >
          {pokemons.map(item => (
            <PokemonCard key={item.id} {...item} />
          ))}
        </ListContainer>
      </InfiniteScroll>
    </MainLayout>
  )
}
