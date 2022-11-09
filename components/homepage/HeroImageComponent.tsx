import Image from 'next/image'

function HeroImageComponent() {
  return (
    <main>
      <div className=" ">
        {/* breadflower bg image */}
        <div className="w-[97%] mx-auto mt-5 min-w-[600px] max-w-[2000px] h-[90vh] max-h-[1000px] flex justify-center overflow-hidden relative">
          <Image
            src="/LunaPhotos/breadflower.png"
            priority={true}
            layout="fill"
            objectFit="cover"
            className='blur-[2px]'
          />
          {/* OVERLAY */}
          <div className="bg-black absolute top-0 left-0 w-full h-full opacity-30"></div>
        </div>
        {/* Subheading text */}
        <div className="absolute top-[28%] left-1/2 flex flex-col items-center -translate-x-1/2">
          <h1 className=" h-[180px] top-0 my-0 py-0 text-white text-center text-[10rem] font-abril font-extrabold textwhite">
            LUNA
          </h1>
          <h2 className=" text-[1.7rem] text-white font-abril font-bold">
            ENDULGE IN ARTISAN BAKERY
          </h2>
          <button className='mt-8 py-3 bg-accent-main px-24 font-abril text-white text-lg font-bold'>
            EXPLORE
          </button>
        </div>
      </div>
    </main>
  )
}

export default HeroImageComponent
