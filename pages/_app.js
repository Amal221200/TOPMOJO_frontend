import '../styles/globals.css'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { ThemeProvider, useTheme } from 'next-themes'
import LoadingBar from 'react-top-loading-bar'
import { useEffect, useState } from 'react'

function MyApp({ Component, pageProps }) {
  const router = useRouter()
  const [progress, setProgress] = useState(0)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    router.events.on('routeChangeStart', () => {
      setProgress(40)
    })
    router.events.on('routeChangeComplete', () => {
      setProgress(100)
    })
    setTheme(localStorage.getItem('theme') !== null && localStorage.getItem('theme'))
  }, [])

  return (
    <ThemeProvider attribute='class'>
      <Head>
        <title>TopMojo</title>
      </Head>
      <LoadingBar color='#eb3b3b' progress={progress} onLoaderFinished={() => { setProgress(0) }} height={2} waitingTime={400} />
      <Header />
      <Component {...pageProps} />
      <Footer />
    </ThemeProvider>
  )
}

export default MyApp
