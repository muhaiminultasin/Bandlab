import React from 'react';
import Title from "./title";

function FooterList({title,catagory,}) {
  return (
    <div>
      <Title title={title} titleClass={"text-[18px] font-[600] text-start"}/>

      <div>
        <ul className='space-y-2'>
            {catagory.map( ({Name, Link}) => {
                return <li className='text-base text-[#111C2EA3] font-[500] '><a href={Link}className='hover:border-b hover:border-b-2 hover:border-[#111C2EA3]'>{Name}</a></li>
            })}
        </ul>
      </div>
    </div>
  )
}

export default FooterList;
