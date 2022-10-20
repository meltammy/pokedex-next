import { useGetUserQuery } from '@/lib/api/getPokemons'
import { ListContainer, PokemonCard } from '@/Components'
import { formatPokemons } from '@/lib/utils/formatPokemons'

export function PokemonsListView() {
  const { data } = useGetUserQuery()

  if (!data) return <></>

  const pokemons = formatPokemons(data)
  return (
    <ListContainer>
      {pokemons.map(item => (
        <PokemonCard key={item.id} {...item} />
      ))}
    </ListContainer>
  )
}
