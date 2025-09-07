import { CSSProperties } from "react";

import Image from "next/image";
import Link from "next/link";

import { Badge } from "../Badge";
import { LikeButton } from "../LikeButton";
import { Routes } from "@/routes";
import { getColorsByPokemonType } from "@/lib/utils/getColorsByPokemonType";
import pokemonTypes from "@/locales/pokemonTypes.json";

import styles from "./PokemonCard.module.scss";
import { Locale } from "@/types/locale";
import { PokemonTypes } from "@/types/pokemonTypes";

type PokemonCardProps = {
  id: number;
  name: string;
  types: PokemonTypes[];
  image: string;
  locale: Locale;
};

export function PokemonCard({
  id,
  name,
  types,
  image,
  locale,
}: PokemonCardProps) {
  const colorType =
    types.length === 1 ? types : types.filter((type) => type !== "normal");
  const bgColor = getColorsByPokemonType(colorType[0]).backgroundColor;

  return (
    <Link
      href={`/${locale}` + Routes.POKEMON_DETAIL + id}
      passHref
      className={styles.container}
      style={{ "--bg-color": bgColor } as CSSProperties}
    >
      <Image
        layout="responsive"
        width={300}
        height={300}
        alt={name}
        src={image}
      />
      <small>Nº{id}</small>
      <h3>{name}</h3>
      <LikeButton />
      <div>
        {types.map((type, index) => (
          <Badge
            key={index}
            text={pokemonTypes[type][locale]}
            colors={getColorsByPokemonType(type)}
          />
        ))}
      </div>
    </Link>
  );
}
