import React from 'react'

function MobileMenu() {
  return (
    <div>
      <nav className='px-[20px]'>
        <div className='flex justify-between items-center'> 
            <p>Logo</p><p className='p-2 w-[30px] h-[30px] bg-gray-300 rounded-full flex items-center justify-center'>X</p>
        </div>
      </nav>
    </div>
  )
}

export default MobileMenu;
