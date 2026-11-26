import '../styles/theme.css'
import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { VisitCounter } from '../components/VisitCounter'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <VisitCounter />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
