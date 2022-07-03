import type { AppProps } from 'next/app'
import { wrapper } from '../redux/store/index'
import '../styles/globals.css'

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default wrapper.withRedux(MyApp)
