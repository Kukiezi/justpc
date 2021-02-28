import Navbar from '../components/Navbar'
import '../styles/globals.css'

export default function MyApp({ Component, pageProps }: any) {
  
  return (
    <>
      <Navbar/>
      <Component {...pageProps} />
    </>
   )
}
