import { Locale } from "@/types/locale";

const VALID_LOCALES: Locale[] = ["pt-BR", "en"];

export function parseLocale(locale: string | undefined): Locale {
  return (VALID_LOCALES.includes(locale as Locale) ? locale : "en") as Locale;
}
