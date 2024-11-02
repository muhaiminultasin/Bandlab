import React from 'react'
import Title from './title'

function Step({img,title,subtitle,}) {
  return (
    <div className='md:w-[220px] md:h-[290px]'>
      <div>
         <div className='w-fit bg-[#F0F3F5] p-2 rounded-md mb-5 mx-auto md:mx-0' >
            <img src={img} alt="" className=''/>
         </div>

         <div>
            <Title titleClass={"text-[22px]"} subtitleClass={"text-[14px]"} title={title} subtitle={subtitle}/>
         </div>
      </div>
    </div>
  )
}

export default Step
