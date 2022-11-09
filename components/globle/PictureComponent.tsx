import Image from 'next/image'
import React from 'react'

interface Props{
    pictures:string[]
    width:number
    height:number
}

const PictureComponent: React.FC<Props> = ({pictures, width, height}) =>{

    if(pictures.length >= 1){
  return (
    <div
      className={`w-[${width}px] flex overflow-x-scroll scrollbar-thin scrollbar-track-cgrey-xlight scrollbar-thumb-white snap-x overflow-y-hidden snap-mandatory`}
    >
      {pictures.map((url,i) => (
        <div key={i} className="snap-start relative">
          <Image
            src={url}
            layout="fixed"
            width={width}
            height={height}
            className="object-cover"
          />
        </div>
      ))}
    </div>
  )}
  else{
    return <p>no photos</p>
  }
}

export default PictureComponent
