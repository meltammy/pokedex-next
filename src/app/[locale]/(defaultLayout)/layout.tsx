import { ReactNode } from "react";
import { notFound } from "next/navigation";
import "../../../styles/globals.scss";
import { Navbar } from "@/components/Navbar";

const locales = ["en", "pt-BR"] as const;
type Locale = (typeof locales)[number];

type Props = {
  children: ReactNode;
  params: Promise<{ locale: string }>; // ⬅️ params é Promise
};

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params; // ⬅️ resolve a Promise

  if (!locales.includes(locale as Locale)) {
    notFound();
  }

  return (
    <>
      <Navbar locale={locale as Locale} />
      {children}
    </>
  );
}
