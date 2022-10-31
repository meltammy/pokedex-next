import '@/styles/globals.css'
import { ApolloProvider } from '@apollo/client'
import { apolloClient } from '@/lib/graphql/apolloClient'
import { useInitAmplitude } from '@/lib/utils/amplitude/useInitAmplitude'
import { AppPropsWithLayout } from '@/lib/models/layouts'

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  useInitAmplitude()
  const getLayout = Component.getLayout ?? (page => page)

  return (
    <>
      <ApolloProvider client={apolloClient}>
        {getLayout(<Component {...pageProps} />)}
      </ApolloProvider>
    </>
  )
}

export default MyApp
