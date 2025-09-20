import { Link } from "@/components/Link";
import { parseLocale } from "@/lib/utils/parseLocale";
import { warningsDictionaries } from "@/locales/warnings";
import { Routes } from "@/routes";
import { Locale } from "@/types/locale";

import styles from "./WarningsView.module.scss";
import { PikachuRunning } from "@/components/PikachuRunning";

interface HomeViewProps {
  locale?: string;
}
export function WarningsView({ locale = "en" }: HomeViewProps) {
  const currentLocale: Locale = parseLocale(locale);
  const dictionary =
    warningsDictionaries[currentLocale] || warningsDictionaries.en;

  return (
    <main className={styles.container}>
      <section className={styles.textContainer}>
        <h1>{dictionary.title}</h1>
        <div>
          {dictionary.text.map((item, index) => (
            <p dangerouslySetInnerHTML={{ __html: item }} key={index} />
          ))}
        </div>
        <div>
          <Link href={Routes.CREDITS}>{dictionary.goToCreditsButton}</Link>
          <Link href={Routes.POKEMONS}>{dictionary.goToPokemonListButton}</Link>
        </div>
      </section>
      <PikachuRunning className={styles.pikachuRunning} />
    </main>
  );
}
