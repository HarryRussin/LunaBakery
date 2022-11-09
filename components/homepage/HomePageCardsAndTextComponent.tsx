import { useAnimation, motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect } from 'react'
import { useInView } from 'react-intersection-observer'

function HomePageCardsAndTextComponent() {
  const control = useAnimation()
  const [ref, inView] = useInView()

  const cardSlideVarient = {
    visible: {x:0},
    hidden:{x:'-10rem'}
  }

  useEffect(() => {
    if(inView){
        control.start("visible")
    }else{
        control.start("hidden")
    }
  }, [inView,control])
  

  return (
    <main className="px-20 my-52 flex space-x-20 items-center">
      {/* CARD IMAGES */}
      <div className="relative flex">
        <motion.div variants={cardSlideVarient} initial='hidden' animate={control} className="border duration-500 w-[350px] h-[525px] relative">
          <Image
            src={'/LunaPhotos/dinobuns.png'}
            layout="fill"
            objectFit="cover"
          />
        </motion.div>
        <motion.div ref={ref} variants={cardSlideVarient} initial='hidden' animate={control} className="border-8 duration-700 delay-[30ms] ease-in-out transition-all border-white w-[350px] h-[525px] relative mt-20 -ml-20">
          <Image
            src={'/LunaPhotos/croissants.png'}
            layout="fill"
            objectFit="cover"
          />
        </motion.div>
      </div>

      {/* TEXT */}
      <div className="w-2/5 flex flex-col space-y-4 text-lg">
        <h3 className="text-4xl font-mont font-medium">
          Make Dining An Experience.
        </h3>
        <p className="text-gray-700">
          Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi.
          Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla,
          mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis
          tellus..
        </p>
        <p className="text-gray-700">
          Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla,
          mattis ligula consectetur.
        </p>

        <Link href="/#about">
          <p className="text-accent-main underline">Learn More</p>
        </Link>
      </div>
    </main>
  )
}

export default HomePageCardsAndTextComponent
