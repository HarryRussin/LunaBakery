import Head from 'next/head'
import Image from 'next/image'
import { useRouter } from 'next/router'
import React from 'react'
import PictureComponent from '../../components/globle/PictureComponent'
import NavBarComponent from '../../components/NavBarComponent'
import FilterComponent from '../../components/shoppage/FilterComponent'
import { Product } from '../../typings'

function Item(product: Product) {
  const rating = product.reviews
    ? Math.ceil(
        (product.reviews.reduce((prv, cur) => prv + cur.rating, 0) /
          product.reviews.length) *
          5,
      )
    : 0

  const router = useRouter()

  return (
    <div className="">
         <Head>
        <title>{product.title} - Luna Artisan Bakery</title>
        <meta
          name="description"
          content={product.description}
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <NavBarComponent selected="none" />

      <main className="flex mt-12 justify-center">
        <div>
        <p
          onClick={() => router.back()}
          className="my-2 w-fit link text-xl font-abril font-bold"
        >
          BACK
        </p>
        <div className="space-x-12 max-w-[1000px] justify-center flex">
          {/* Picture slider */}
          <PictureComponent pictures={product.imageUrls} width={500} height={400}/>

          {/* Details */}
          <div className="flex max-w-md flex-col font-mont space-y-2 justify-center">
            <h1 className="text-4xl h-8 font-medium">{product.title}</h1>

            {/* RATING */}
            {product.reviews ? (
              <div className="">
                <p className="text-yellow-500 h-5 flex items-start text-lg">
                  {'★'.repeat(rating)}
                  <span className="text-cgrey-xlight">
                    {'★'.repeat(5 - rating)}
                  </span>
                </p>

                <p className="">
                  From{' '}
                  <span className="font-semibold">
                    {product.reviews.length}
                  </span>{' '}
                  reviews
                </p>
              </div>
            ) : (
              <p>
                No reviews, <span className="underline">be the first</span>
              </p>
            )}
            {/* attributes */}
            <div className="flex gap-2 flex-wrap">
              {product.attributes.map((e, i) => (
                <div
                  key={i}
                  className="py-1 px-3  w-fit bg-[#EBC5A3] rounded-lg items-center font-medium flex space-x-1"
                >
                  {e}
                </div>
              ))}
            </div>

            <p className="text-lg">{product.description}</p>
            <div className="flex items-end pb-2 justify-between">
              <p className="text-sm">
                <span className="text-3xl font-normal">
                  ${product.price.toFixed(2)}
                </span>
                /pp
              </p>
              <div className="flex items-end space-x-2">
                <p>Qty.</p>
                <input
                  type={'number'}
                  className="w-[40px] text-center bg-cgrey-xlight"
                  min={1}
                  max={product.stock}
                  defaultValue={1}
                />
              </div>
            </div>
            {/* button */}
            <button className='bg-accent-main hover:bg-accent-light transition-all text-2xl w-fit px-6 text-white font-abril py-1 font-semibold'>ADD TO CART</button>
          </div>
        </div>
        </div>
      </main>
    </div>
  )
}

export default Item

export function getServerSideProps({ params }: { params: any }) {
  let { id }: { id: string } = params
  // get the stuff from firebase with the id

  

  return {
    props: {
      title: 'cheese Pastry',
      id: 0,
      imageUrls: [
        '/LunaPhotos/danish.png',
        '/LunaPhotos/danish.png',
        '/LunaPhotos/danish.png',
      ],
      description: 'A lovely pastry Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam molestias asperiores libero non fuga distinctio aspernatur odit, commodi laudantium repellendus itaque eius deserunt vitae labore nemo mollitia perferendis temporibus obcaecati',
      reviews: [
        {
          rating: 0.8,
          id: 0,
        },
        {
          rating: 0.2,
          id: 1,
        },
        {
          rating: 0.8,
          id: 2,
        },
        {
          rating: 0.1,
          id: 3,
        },
      ],
      price: 1.2,
      attributes: ['Sale','Freshly Baked','Seasonal', 'Sweet Treats'],
      stock: 12,
    },
  }
}
