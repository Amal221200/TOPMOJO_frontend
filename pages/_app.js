import '../styles/globals.css'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Head from 'next/head'
import { useEffect } from 'react'
import { ThemeProvider, useTheme } from 'next-themes'

function MyApp({ Component, pageProps }) {


  return (
    <ThemeProvider attribute='class'>
      <Head>
        <title>TopMojo</title>
      </Head>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </ThemeProvider>
  )
}

export default MyApp
