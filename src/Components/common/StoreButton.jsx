import React from 'react'
import cn from '../../assets/lib/utility/cn'

function StoreButton({ img, title,subtitle,className}
) {
  return (
    <div>
      <button className={cn(`'bg-black text-white flex gap-2 py-1 px-3 mt-5 rounded-md text-start items-center`,className)}>
            <img src={img} alt="" className='block w-[30px]'/>
            <div>
                <p className='text-[12px] font-[500]'>{subtitle} </p>
                <h1 className='font-[500]'>{title}</h1>
            </div>
      </button>
    </div>
  )
}

export default StoreButton
