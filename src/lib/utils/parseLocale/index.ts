import { Locale } from "@/types/locale";

const VALID_LOCALES: Locale[] = ["ptBR", "en"];

export function parseLocale(locale: string | undefined): Locale {
  return (VALID_LOCALES.includes(locale as Locale) ? locale : "en") as Locale;
}
