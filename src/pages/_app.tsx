import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { ApolloProvider } from '@apollo/client'
import { apolloClient } from '@/lib/graphql/apolloClient'
import { useInitAmplitude } from '@/lib/utils/amplitude/useInitAmplitude'

function MyApp({ Component, pageProps }: AppProps) {
  useInitAmplitude()

  return (
    <>
      <ApolloProvider client={apolloClient}>
        <Component {...pageProps} />{' '}
      </ApolloProvider>
    </>
  )
}

export default MyApp
