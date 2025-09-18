import { notFound } from "next/navigation";
import { Montserrat } from "next/font/google";
import "../../../styles/globals.scss";
import { ApolloWrapper } from "@/lib/graphql/apolloClient";
import { Navbar } from "@/components/Navbar";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  display: "swap",
  weight: ["200", "400", "500", "600", "700"],
});

export const metadata = {
  title: "Melissa Tammy - Pokédex",
  description:
    "Uma Pokédex interativa desenvolvida com Next.js, GraphQL e TypeScript, exibindo dados detalhados dos Pokémon em uma interface moderna e responsiva. Projeto de portfólio focado em performance e boas práticas de frontend.",
};

const locales = ["en", "pt-BR"] as const;

export async function generateStaticParams() {
  return [{ locale: "en" }, { locale: "pt-BR" }];
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: "en" | "pt-BR" }>;
}) {
  const { locale } = await params;

  if (!locales.includes(locale)) {
    notFound();
  }

  return (
    <html lang={locale}>
      <body className={`${montserrat.className} ${montserrat.variable}`}>
        <Navbar locale={locale} />
        <ApolloWrapper>{children}</ApolloWrapper>
      </body>
    </html>
  );
}
