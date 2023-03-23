import Image from 'next/image'
import React from 'react'

function AboutOurBakes() {
  return (
    <div id='about' className="my-52 px-20">
      <div className="flex justify-center items-center">
        <section className="">
          <div className="bg-[#EBC5A3] h-[600px] w-[725px] px-20 py-32 flex flex-col space-y-10">
            <h2 className="text-4xl font-mont font-medium">
              About Our Pastries.
            </h2>
            <p className="text-gray-700 text-lg">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi,
              saepe corrupti! Ea quam accusamus rerum corrupti voluptas culpa
              magni corporis, quibusdam eum aliquid modi sint non maiores saepe?
              Fugiat corrupti qui harum repellendus nisi alias, iure ullam
              libero deleniti quaerat dignissimos quae odio quidem incidunt
              abdebitis sint adipisci! Modi.
            </p>
            <button className=' py-3 bg-accent-main px-16 font-abril text-white w-fit text-lg font-bold'>Find Out More</button>
          </div>
        </section>
        <div className="h-[600px] w-[600px] border-8 border-white box-content relative">
          <Image alt='bakery bread' src={'/LunaPhotos/danish.png'} layout="fill" />
        </div>
      </div>
    </div>
  )
}

export default AboutOurBakes
