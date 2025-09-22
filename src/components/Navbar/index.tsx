"use client";

import { useState } from "react";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { PokeballIcon } from "../Icons/Pokeball";
import { Routes } from "@/routes";
import { NavLink } from "./components/NavLink";
import locales from "./locales/navbar.json";
import { parseLocale } from "@/lib/utils/parseLocale";

import styles from "./Navbar.module.scss";

export function Navbar({ locale = "en" }) {
  const [isOpen, setIsOpen] = useState(false);

  const pathname = usePathname();
  const currentLocale = parseLocale(locale);
  const dictionary = locales[currentLocale] || locales.en;

  const navLinks = [
    { href: `/${locale}` + Routes.POKEMONS, children: dictionary.pokemons },
    { href: `/${locale}` + Routes.FAVORITES, children: dictionary.favorites },
    { href: `/${locale}` + Routes.WARNINGS, children: dictionary.warnings },
    { href: `/${locale}` + Routes.CREDITS, children: dictionary.credits },
  ];

  return (
    <nav className={styles.Navbar} data-is-open={isOpen}>
      <div className={styles.container}>
        <Link href={`/${locale}` + Routes.POKEMONS}>
          <PokeballIcon />
        </Link>
        <button
          className={styles.hamburger}
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle navigation"
          data-is-open={isOpen}
        >
          <span />
          <span />
          <span />
        </button>

        <ul
          className={`${styles.links} ${isOpen ? styles.open : ""}`}
          data-is-open={isOpen}
        >
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
