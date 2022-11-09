import React, { useRef, useState } from 'react'
import { ImEnter } from 'react-icons/im'
import PictureComponent from '../components/globle/PictureComponent'
import { availableAttributes } from '../data'

//MAKE THIS A ENV PASSWORD
const tempPassword = 'electronneutrino'
const testData =  [
  '/LunaPhotos/danish.png',
  '/LunaPhotos/danish.png',
  '/LunaPhotos/danish.png',
]

function Admin() {
  const [correct, setcorrect] = useState(false)
  const [text, settext] = useState('')
  const [openNewItem, setopenNewItem] = useState(false)
  const [attributes, setattributes] = useState([''])

  const inputpasswordRef = useRef(null)

  function Validate() {
    if (text === tempPassword) {
      setcorrect(true)
      //@ts-ignore
      inputpasswordRef.current.value = ''
    }
  }

  function selectattribute(name: string) {
    if (attributes.includes(name)) {
      setattributes(attributes.filter((e) => e !== name))
    } else {
      setattributes([...attributes, name])
    }
  }

  return (
    <div className="font-mont">
      {!correct ? (
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <div className="">
            <label htmlFor="admin" className="font-semibold">
              Admin Panel Access
            </label>
            {/* TURN AUTOCOMPLETE OFF */}
            <input
              ref={inputpasswordRef}
              autoComplete="on"
              name="admin"
              type="text"
              onChange={(e) => settext(e.target.value)}
              className="block w-full rounded-md border-2 py-2 border-black pl-2 pr-10 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            />
            <ImEnter
              className="absolute right-3 h-5 w-5 bottom-2"
              onClick={Validate}
            />
          </div>
        </div>
      ) : (
        <div className="p-24 ">
          <div
            className={`border flex`}
          >
            <div className="w-1/2 p-4 bg-slate-200">
              <h1 className="text-3xl flex justify-between">
                Add An Item{' '}
                <span className='' onClick={() => setopenNewItem(!openNewItem)}>
                  {openNewItem ? '-' : '+'}
                </span>
              </h1>
              {openNewItem&&
              <>
              <input
                type="text"
                name="title"
                placeholder="Title"
                className="p-2 mt-8 text-xl w-full border"
              />
              <textarea
                name="Desc"
                rows={5}
                placeholder="Description"
                className="p-2 mt-8 text-xl w-full border"
              />
              {/* Attribute picker */}
              <div className="flex flex-wrap gap-4 mt-4">
    
                {availableAttributes.map((e, i) => {
                  return (
                    <button
                      key={i}
                      onClick={() => selectattribute(e)}
                      className={`${
                        attributes.includes(e)
                          ? 'bg-[#bfffb0] hover:bg-[#c3f4d4]'
                          : 'bg-white hover:bg-gray-100'
                      } py-2 px-4 rounded-lg`}
                    >
                      {e}
                    </button>
                  )
                })}
              </div>
              </>
              }
            </div>
            {openNewItem&&
            <div className="mt-20 p-5">
              <h4 className="text-xl">Select a Few Photos</h4>
              <PictureComponent pictures={testData} width={600} height={500}/>
            </div>
}
          </div>
        </div>
      )}
    </div>
  )
}

export default Admin
