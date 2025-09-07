"use client";

import { usePathname } from "next/navigation";
import { PokeballIcon } from "../Icons/Pokeball";
import Link from "next/link";
import { Routes } from "@/routes";
import { NavLink } from "./components/NavLink";
import styles from "./Navbar.module.scss";
import { Locale } from "@/types/locale";
import locales from "./locales/navbar.json";
import { parseLocale } from "@/lib/utils/parseLocale";

export function Navbar({ locale = "en" }) {
  const pathname = usePathname();
  const currentLocale = parseLocale(locale);
  const dictionary = locales[currentLocale] || locales.en;

  const navLinks = [
    { href: Routes.POKEMONS, children: dictionary.pokemons },
    { href: Routes.FAVORITES, children: dictionary.favorites },
  ];

  return (
    <nav className={styles.Navbar}>
      <div className={styles.container}>
        <Link href={Routes.POKEMONS}>
          <PokeballIcon />
        </Link>
        <ul>
          {navLinks.map((item) => (
            <NavLink
              key={item.href}
              active={pathname.includes(item.href)}
              {...item}
            />
          ))}
        </ul>
      </div>
    </nav>
  );
}
