import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ThemeProvider } from '@mui/system'

import {theme} from '../themes/theme'

import { CssBaseline } from '@mui/material'

import rtlPlugin from 'stylis-plugin-rtl';
import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';
import { prefixer } from 'stylis';

// import { store } from '../redux/store'
// import { Provider } from 'react-redux'

export default function App({ Component, pageProps }: AppProps) {

  const cacheRtl = createCache({
    key: 'muirtl',
    stylisPlugins: [prefixer, rtlPlugin],
  });

  return (
    <CacheProvider value={cacheRtl}>
          {/* <Provider store={store}> */}
               <ThemeProvider theme={theme}>
                   <CssBaseline />
                   <Component {...pageProps} />
               </ThemeProvider>
          {/* </Provider> */}
    </CacheProvider>
  )
}
