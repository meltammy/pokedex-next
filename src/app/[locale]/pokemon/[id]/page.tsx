import { PokemonDetailView } from "@/views/PokemonDetail";

export default async function PokemonListPage({
  params,
}: {
  params: { locale: string; id: number };
}) {
  return <PokemonDetailView id={Number(params.id)} locale={params.locale} />;
}
