import type { NextPage } from 'next'
import { useGetUserQuery } from '@/lib/api/getPokemons'
import { PokemonCard } from '@/Components'
import { formatPokemons } from '@/lib/utils/formatPokemons'

const Home: NextPage = () => {
  const { data } = useGetUserQuery()

  if (!data) return <></>

  const pokemons = formatPokemons(data)
  return (
    <div>
      {pokemons.map(item => (
        <PokemonCard key={item.id} {...item} />
      ))}
    </div>
  )
}

export default Home
