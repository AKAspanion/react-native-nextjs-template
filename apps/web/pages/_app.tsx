import 'raf/polyfill'
import 'setimmediate'

import { Provider } from 'app/provider'
import Head from 'next/head'
import { sub } from 'utils'
import React from 'react'
import type { SolitoAppProps } from 'solito'

function MyApp({ Component, pageProps }: SolitoAppProps) {
  console.log('Sub from utils', sub(10, 20))
  return (
    <>
      <Head>
        <title>Solito Example App</title>
        <meta
          name="description"
          content="Expo + Next.js with Solito. By Fernando Rojo."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Provider>
        <Component {...pageProps} />
      </Provider>
    </>
  )
}

export default MyApp