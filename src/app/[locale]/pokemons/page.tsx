import { PokemonList } from "@/views/PokemonList";

export default function PokemonListPage({
  params,
}: {
  params: { locale: string };
}) {
  return <PokemonList locale={params.locale} />;
}
