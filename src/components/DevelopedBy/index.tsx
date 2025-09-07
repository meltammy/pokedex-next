import locales from "./locales/developedBy.json";
import { ExternalLinks } from "@/routes";
import { HeartIcon } from "@/components/Icons/Heart";
import styles from "./DevelopedBy.module.scss";
import { Locale } from "@/types/locale";

type Props = {
  locale?: Locale;
};

export function DevelopedBy({ locale = "en" }: Props) {
  const dictionary = locales[locale] || locales.en;

  return (
    <p className={styles.container}>
      {dictionary.prefix}{" "}
      <HeartIcon
        role="img"
        aria-label={dictionary.love}
        className={styles.heart}
      />{" "}
      {dictionary.suffix}{" "}
      <a
        href={ExternalLinks.LINKEDIN}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={dictionary.linkedinLabel}
      >
        {dictionary.name}
      </a>
    </p>
  );
}
