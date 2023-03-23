import Image from 'next/image'
import {
  AnimatePresence,
  AnimateSharedLayout,
  LayoutGroup,
  motion,
} from 'framer-motion'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'

const videos = [
  '/headerVids/vid1.mp4',
  '/headerVids/vid2.mp4',
  '/headerVids/vid3.mp4',
]

function ShowVid({
  vid,
  id,
  selectedId,
}: {
  vid: string
  id: number
  selectedId: number
}) {
  return (
    <>
        <AnimatePresence mode='popLayout'>

      {(id === selectedId) ? (
          <motion.div
          key={id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{duration:3}}
            layoutId="underline"
            className="w-[97%] mx-auto mt-5 min-w-[600px] max-w-[2000px] h-[90vh] max-h-[1000px] flex justify-center overflow-hidden relative"
          >
            <video autoPlay muted className="object-cover loop w-full h-full">
              <source src={vid} type="video/mp4" />
            </video>
            <div className="bg-black absolute top-0 left-0 w-full h-full opacity-30"></div>
          </motion.div>
      ) : null}
        </AnimatePresence>

    </>
  )
}

function HeroImageComponent() {
  const [selectedId, setselectedId] = useState(0)

  function changeImg() {
    let newImgId = selectedId + 1 === videos.length ? 0 : selectedId + 1
    console.log(newImgId)

    setselectedId(newImgId)
  }

  useEffect(() => {
    let inter = setInterval(changeImg, 5000)
    return () => clearInterval(inter)
  }, [selectedId,changeImg])

  const router = useRouter()

  return (
    <main>
      <div className=" ">
        {/* breadflower bg image */}
        {/* <Image
            src="/LunaPhotos/breadflower.png"
            priority={true}
            layout="fill"
            objectFit="cover"
            className='blur-[2px]'
          /> */}
        <AnimateSharedLayout>
          {videos.map((vid, i) => (
            <ShowVid key={i} vid={vid} id={i} selectedId={selectedId} />
          ))}
        </AnimateSharedLayout>
        {/* OVERLAY */}
        {/* Subheading text */}
        <div className="absolute top-[28%] left-1/2 flex flex-col items-center -translate-x-1/2">
          <h1 className=" h-[180px] top-0 my-0 py-0 text-white text-center text-[10rem] font-abril font-extrabold textwhite">
            LUNA
          </h1>
          <h2 className=" text-[1.7rem] text-white font-abril font-bold">
            ENDULGE IN ARTISAN BAKERY
          </h2>
          
          <button onClick={()=>router.replace('/shop')} className="mt-8 py-3 bg-accent-main px-24 font-abril text-white text-lg font-bold">
            EXPLORE
          </button>
        </div>
      </div>
    </main>
  )
}

export default HeroImageComponent
