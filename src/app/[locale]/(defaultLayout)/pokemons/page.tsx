import { withLocaleAndParams } from "@/Layouts/withLocaleAndParams";
import {
  DEFAULT_POKEMONS_LIMIT,
  fetchPokemonList,
} from "@/lib/graphql/queries/listPokemons";
import { PokemonListView } from "@/views/PokemonList";

export default withLocaleAndParams(async function PokemonListPage({ locale }) {
  const pokemons = await fetchPokemonList({
    limit: DEFAULT_POKEMONS_LIMIT,
    offset: 0,
    cacheType: "allPokemons",
  });

  if (pokemons.data?.pokemon)
    return (
      <PokemonListView
        locale={locale}
        initialPokemons={pokemons.data?.pokemon}
      />
    );
});
