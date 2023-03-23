import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import { AnimatePresence, motion } from 'framer-motion'
import Footer from '../components/Footer'
import AboutOurBakes from '../components/homepage/AboutOurBakes'
import HeroImageComponent from '../components/homepage/HeroImageComponent'
import HomePageCardsAndTextComponent from '../components/homepage/HomePageCardsAndTextComponent'
import NavBarComponent from '../components/NavBarComponent'
import { useEffect, useState } from 'react'
import { AiOutlineCaretRight } from 'react-icons/ai'

const Home: NextPage = () => { 
  const [showHireBox, setshowHireBox] = useState(false)

  useEffect(() => {
    setTimeout(()=>setshowHireBox(true),10000)
  }, [])
  

  return (
    <div className="">
      <Head>
        <title>Luna Artisan Bakery</title>
        <meta
          name="description"
          content="Artisan Bakery Homemade Bread Pastries and More Freshly Baked"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <NavBarComponent selected="home" isHome />
      <HeroImageComponent />
      <HomePageCardsAndTextComponent />
      <AboutOurBakes />
      <Footer />

      <AnimatePresence>
      {showHireBox && (
        <motion.div
        initial={{opacity:0,x:500}}
        animate={{opacity:1,x:0}}
        transition={{duration:0.5}}
        exit={{x:500}}
        
        className="fixed bottom-8 right-8 rounded-md grid grid-cols-10 overflow-hidden border-2 box-content border-gray-800">
          <div className="relative col-span-9 bg-white py-4 pl-8 pr-4">
            <h3 className="text-lg">Like what you see?</h3>
            <h3 className="text-xl text-accent-main">We're Hiring!</h3>
            <Link replace href={'/join-us'}>
              <p className="text-sm text-accent-main underline hover:text-accent-light transition-colors">
                more info
              </p>
            </Link>
          </div>
          <div onClick={()=>setshowHireBox(false)} className="col-span-1 bg-accent-main flex flex-col items-center justify-center">
              <AiOutlineCaretRight className='text-white'/>
          </div>
        </motion.div>
      )}
      </AnimatePresence>
    </div>
  )
}
export default Home