import React from 'react'
import Button from './Button';

function Navbar() {

  const NavItems = [
    {
      Name: "Support",
      link:"/Products"
    },
    {
      Name: "Contact",
      link:"/Products"
    },
    {
      Name: "About",
      link:"/Products"
    },
    {
      Name: "Log in",
      link:"/Products"
    }
  ]


  return (
    <header className='w-full sticky left-0 top-0 z-50 py-5 px-[20px] md:px-[140px] bg-[#000000] border-b-[1px] border-b-gray-800 '>
      <nav className='flex justify-between items-center '>
        <div id="logo" >
          <a href="" className='flex w-fit relative '><img src="./PBImage/bandlab-logotype.svg" alt="" className='w-[]'/> <p className='absolute flex items-centerjh left-8 text-white text-[20px] font-[600]'>Bandlab <span className='font-[400] ml-[4px]'>Distribution</span></p></a>
        </div>

        <div id="items" className='hidden md:flex space-x-5' >
          <ul className='flex justify-between items-center text-white space-x-3  '>
            {
              NavItems.map( ({Name, link},i) => {
                return <li key={i} className='font-[600] cursor-pointer'>{Name}</li>
              })
            }
          </ul>
          <Button Name="Sign up" className=""/>
        </div>

        <div className='block md:hidden '>
            <div className='flex flex-col space-y-1'>
              <span className='w-[30px] h-[3px] bg-white'> </span>
              <span className='w-[30px] h-[3px] bg-white'> </span>
              <span className='w-[30px] h-[3px] bg-white'> </span>
            </div>
        </div>

        
      </nav>
    </header>
  )
}

export default Navbar;
