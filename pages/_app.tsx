import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ThemeProvider } from '@mui/system'
import {theme} from '../theme/Theme'
import { CssBaseline } from '@mui/material'

import rtlPlugin from 'stylis-plugin-rtl';
import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';
import { prefixer } from 'stylis';

export default function App({ Component, pageProps }: AppProps) {

  const cacheRtl = createCache({
    key: 'muirtl',
    stylisPlugins: [prefixer, rtlPlugin],
  });

  return (
    <CacheProvider value={cacheRtl}>
        <ThemeProvider theme={theme}>
              <Component {...pageProps} />
        </ThemeProvider>
    </CacheProvider>
  )
}
