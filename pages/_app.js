import Footer from '../components/Footer'
import '../styles/globals.css'

import { ContextProvider } from "../utils/Context"

function MyApp({ Component, pageProps }) {
  return (
    <ContextProvider>
      <div className='relative h-screen'>
        <Component {...pageProps} />
      </div>
    </ContextProvider>
    
  )
}

export default MyApp
