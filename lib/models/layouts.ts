import { ReactElement, ReactNode } from 'react'

import { NextPage } from 'next'
import { AppProps } from 'next/app'

export type NextPageWithLayout<Props = Record<string, never>> =
  NextPage<Props> & {
    getLayout?: (page: ReactElement) => ReactNode
  }

export type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}
