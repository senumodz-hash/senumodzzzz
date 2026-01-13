import '../styles/globals.css'
import { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import Header from '../components/Header'
import AutoMusic from '../components/AutoMusic'

function MyApp({ Component, pageProps }) {
  useEffect(() => { AOS.init({ duration: 800, once: true }) }, [])

  return (
    <>
      <Header />
      <Component {...pageProps} />
      <AutoMusic />
    </>
  )
}

export default MyApp
