import Image from 'next/image'
import Link from 'next/link'
import { Product } from '../../typings'

function ProductComponent({ product }: { product: Product }) {
  const rating = product.reviews
    ? Math.ceil(
        (product.reviews.reduce((prv, cur) => prv + cur.rating, 0) /
          product.reviews.length) *
          5,
      )
    : 0

  return (
    <Link href={`/item/${product.id}`}>
    <div className="w-[325px] relative z-[1]">
      <div className="relative">
        <Image src={product.imageUrls[0]} width={325} height={325} />
        {product.stock === 0 && (
          <div className="absolute top-0 left-0 w-[325px] h-[325px] bg-black opacity-25"></div>
        )}
        {product.stock === 0 && (
          <p className="flex absolute top-2 bg-white right-2 px-2 py-1 rounded-lg text-black font-semibold items-center h-8 space-x-1">
            <span>Out of Stock</span>
          </p>
        )}
      {product.stock!==0&&<div className="w-[325px] h-full opacity-0 bg-slate-200 top-0 left-0 absolute hover:opacity-20"></div>}
      </div>
      <div className="font-mont font-medium flex justify-between">
        <p className="text-xl">{product.title}</p>
        <p className="text-sm">
          <span className="text-xl">£{product.price.toFixed(2)}</span>/pp
        </p>
      </div>
      {product.reviews && (
        <div className="flex space-x-2">
          <p>{product.reviews.length} reviews</p>
          <p className="text-yellow-500">
            {'★'.repeat(rating)}
            <span className="text-cgrey-xlight">{'★'.repeat(5 - rating)}</span>
          </p>
        </div>
      )}
    </div>
    </Link>
  )
}

export default ProductComponent
