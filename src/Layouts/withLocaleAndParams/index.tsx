type LocaleProps = { locale: string };

type Props<P> = {
  params: Promise<{ locale: string } & P>;
};

export function withLocaleAndParams<P extends object>(
  Page: React.ComponentType<P & LocaleProps>
) {
  return async function WrappedPage({ params }: Props<P>) {
    const resolvedParams = await params;
    const { locale, ...rest } = resolvedParams;

    return <Page {...(rest as P)} locale={locale} />;
  };
}
