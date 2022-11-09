import type { NextPage } from 'next'
import Head from 'next/head'
import Footer from '../components/Footer'
import AboutOurBakes from '../components/homepage/AboutOurBakes'
import HeroImageComponent from '../components/homepage/HeroImageComponent'
import HomePageCardsAndTextComponent from '../components/homepage/HomePageCardsAndTextComponent'
import NavBarComponent from '../components/NavBarComponent'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Luna Artisan Bakery</title>
        <meta name="description" content="Artisan Bakery Homemade Bread Pastries and More Freshly Baked" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <NavBarComponent selected='home' isHome/>
      <HeroImageComponent/>
      <HomePageCardsAndTextComponent/>
      <AboutOurBakes/>
      <Footer/>
    </div>
  )
}

export default Home
