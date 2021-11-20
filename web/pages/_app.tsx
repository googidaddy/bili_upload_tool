import type { AppProps /*, AppContext */ } from 'next/app'
import React from 'react'
import '../styles.css'

const apsuHome = ({ Component, pageProps }: AppProps) => {
	return <Component {...pageProps} />
}
export default apsuHome