import locales from "./locales/developedBy.json";
import { ExternalLinks } from "@/routes";
import { HeartIcon } from "@/components/Icons/Heart";
import styles from "./DevelopedBy.module.scss";

type Locale = keyof typeof locales;

type Props = {
  locale?: Locale;
};

export function DevelopedBy({ locale = "en" }: Props) {
  const dict = locales[locale] || locales.en;

  return (
    <p className={styles.container}>
      {dict.prefix} <HeartIcon role="img" aria-label={dict.love} />{" "}
      {dict.suffix}{" "}
      <a
        href={ExternalLinks.LINKEDIN}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={dict.linkedinLabel}
      >
        {dict.name}
      </a>
    </p>
  );
}
