import locales from "./locales/pokeballButton.json";
import styles from "./PokeballButton.module.scss";

type Locale = keyof typeof locales;

type Props = {
  isOpen: boolean;
  toggleIsOpen: () => void;
  locale: Locale;
};

export function PokeballButton({ isOpen, toggleIsOpen, locale }: Props) {
  const dictionary = locales[locale] || locales.en;

  return (
    <button
      data-is-open={isOpen}
      className={styles.pokeButton}
      onClick={toggleIsOpen}
      aria-expanded={isOpen}
      aria-controls="main-container"
      aria-label={isOpen ? dictionary.buttonClose : dictionary.buttonOpen}
    >
      <div className={styles.buttonDetail}>
        <span>{dictionary.button}</span>
      </div>
    </button>
  );
}
