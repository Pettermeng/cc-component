import '@/styles/globals.css'
import type { AppProps } from 'next/app'

import * as React from "react";

import "../styles/theme.css";

// 1. import `NextUIProvider` component
import {NextUIProvider} from "@nextui-org/system";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <NextUIProvider>
      <main className='font-body'>
        <Component {...pageProps} />
      </main>
    </NextUIProvider>
  )
}
