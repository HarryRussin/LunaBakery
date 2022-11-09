import React, { useState, useEffect } from 'react'
import NavBarComponent from '../components/NavBarComponent'
import { BiCategory } from 'react-icons/bi'
import FilterComponent from '../components/shoppage/FilterComponent'
import { useRouter } from 'next/router'
import ProductComponent from '../components/shoppage/ProductComponent'
import { Product } from '../typings'
import Footer from '../components/Footer'
import {availableAttributes} from '../data'
const testProductData: Product[] = [
  {
    title: 'Danish Pastry',
    id: 0,
    imageUrls: ['/LunaPhotos/danish.png'],
    description: 'A lovely pastry its so good you should definitely eat it',
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
    attributes: ['Sale'],
    stock: 12,
  },
  {
    title: 'cream Pastry',
    id: 0,
    imageUrls: ['/LunaPhotos/danish.png'],
    description: 'A lovely pastry its so good you should definitely eat it',
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
    attributes: ['Savoury','White','Sweet Treats'],
    stock: 0,
  },
  {
    title: 'corn Pastry',
    id: 0,
    imageUrls: ['/LunaPhotos/danish.png'],
    description: 'A lovely pastry its so good you should definitely eat it',
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
    attributes: ['Savoury','White'],
    stock: 12,
  },
  {
    title: 'cheese Pastry',
    id: 0,
    imageUrls: ['/LunaPhotos/danish.png'],
    description: 'A lovely pastry its so good you should definitely eat it',
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
    attributes: ['Savoury','Sweet Treats'],
    stock: 12,
  },
  {
    title: 'bum bup sourdough on rye bread very good very nice',
    id: 0,
    imageUrls: ['/LunaPhotos/danish.png'],
    description: 'A lovely pastry its so good you should definitely eat it',
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
    attributes: ['Savoury'],
    stock: 0,
  },
]

const possibleFilters = availableAttributes

function Shop() {
  const [filters, setFilters] = useState([''])
  const initialData = testProductData
  const [products, setProducts] = useState<Product[] | []>(initialData)
  const [searches, setsearches] = useState('')
  const [openFilters, setopenFilters] = useState(false)

  // GET FILTERS + SEARCH FROM URL
  const router = useRouter()

  useEffect(() => {
    const { filterquery } = router.query
    const { searchquery } = router.query

    let newfilters = filterquery
      ? typeof filterquery === 'object'
        ? filterquery
        : filterquery?.split(',')
      : []

      newfilters = newfilters.filter(e=>possibleFilters.includes(e))

    setFilters(['111111',...newfilters])
    setsearches(searchquery ? searchquery.toString() : '')
  }, [router])

  useEffect(() => {
    filters.length===1?setProducts(initialData):setProducts(products.filter(e=>e.attributes.some(r=>filters.indexOf(r)>=0)))
  }, [filters,searches])
  

  useEffect(() => {
    if (searches === '') {
      setProducts(initialData)
    }
    setProducts(search(initialData, searches))
  }, [searches])

  function removeFilter(id: number) {
    setFilters(filters.filter((e, i) => i !== id))
  }

  function selectFilter(name:string,chosen:boolean){
    if(chosen){
      setFilters(filters.filter((e)=>e!==name))
    }else{
      setFilters([...filters,name])
    }
  }

  function search(items: Product[], text: string) {
    let newtext = text.split(' ')
    return items.filter((item) => {
      return newtext.every((el) => {
        return item.title.toLowerCase().includes(el.toLowerCase())
      })
    })
  }

  return (
    <div className="">
      <NavBarComponent selected="shop" />
      <main className="px-20 py-16 mb-12">
        <h1 className="text-4xl font-medium font-mont">EXPLORE OUR BAKES</h1>

        {/* Filters and Search */}
        <div className="flex space-x-24 items-baseline">
          {/* filters */}
          <div className="flex flex-wrap w-1/2 gap-3 mt-4">
            <div className="relative bg-black ">
              <div
                onClick={() => setopenFilters(!openFilters)}
                className={`bg-cgrey-xlight focus:outline ${
                  openFilters ? 'w-[600px] h-[300px]' : 'w-[80px] items-center h-[24px] '
                } px-2 py-1 box-content transition-all hover: z-[3] absolute top-0 left-0 font-medium mr-2 flex space-x-2`}
              >
                {openFilters ? (
                  <div className="">
                  <div className="flex space-x-2 items-center mb-2">
                    <p>FILTERS</p> <BiCategory className="h-[16px] w-[16px]" />
                  </div>
                  <div className="flex flex-wrap gap-4">
                  {
                    possibleFilters.map((filter,i)=>{
                      let chosen = false
                      if (filters.includes(filter)) {
                        chosen = true
                      }
                      return <button key={i} onClick={()=>selectFilter(filter,chosen)} className={`${chosen?'bg-[#EBC5A3] hover:bg-[#f4dbc3]':'bg-white hover:bg-gray-100'} py-2 px-4 rounded-lg`}>{filter}</button>
                    })
                  }
                  </div>
                  </div>
                ) : (
                  <>
                    <p>FILTERS</p> <BiCategory className="h-[16px] w-[16px]" />
                  </>
                )}
              </div>
            </div>
            {filters.map((filter: string, i: number) => (
              <FilterComponent
                key={i}
                id={i}
                name={filter}
                removeFilter={removeFilter}
              />
            ))}
          </div>

          {/* search */}
          <input
            type="text"
            defaultValue={searches}
            placeholder="Search"
            onChange={(e) => setsearches(e.target.value)}
            className="border-b-2 border-black h-fit text-black placeholder:text-black text-lg focus:outline-none font-mont px-2 w-1/3"
          />
        </div>

        {/* Products */}
        <p className="mt-7 font-mont">{products.length} results</p>

        <div className="flex flex-wrap gap-20 mt-24">
          {products.length !== 0 ? (
            products.map((product, i) => (
              <ProductComponent key={i} product={product} />
            ))
          ) : (
            <p className="text-center w-full text-4xl font-abril">
              No Dice, No Bakes
              <br />
              <span className="text-lg">
                Try searching something else or refresh the page
              </span>
            </p>
          )}
        </div>
      </main>

      <Footer/>
    </div>
  )
}

export default Shop
