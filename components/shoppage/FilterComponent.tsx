import React from 'react'
import {TiDeleteOutline} from 'react-icons/ti'

function FilterComponent({ name,id,removeFilter }: { name: string,id:number,removeFilter:any }) {
  return (
    <div onClick={()=>removeFilter(id)} className="py-1 pl-3 hover:bg-[#f4dbc3] pr-2 bg-[#EBC5A3] rounded-lg items-center font-medium flex space-x-1">
      <p>{name}</p>
      <TiDeleteOutline  className='h-5 w-5'/>
    </div>
  )
}

export default FilterComponent
