import React from 'react'

function NavBar() {
  return (
    <div className='h-14 w-full flex items-center justify-between px-14 py-6'>
        <div className='flex items-center justify-center cursor-pointer'>
            <h4 className='border-[1px] border-solid rounded-full border-black py-[2px] px-4'>Menu</h4>
            <i class="ri-menu-3-line font-medium border-[1px] border-solid rounded-full border-black py-[2px] px-2"></i>
        </div>
        <div className='text-2xl uppercase cursor-pointer'>
            <h1>Dentytech</h1>
        </div>
        <div className='flex items-center justify-center'>
            <button className='border-[1px] border-solid rounded-full border-black py-1.5 px-5 bg-transparent'>Log In</button>
            <button className='border-[1px] border-solid rounded-full border-black text-white bg-orange-500 py-1.5 px-5'>Sign Up</button>
        </div>
    </div>
  )
}

export default NavBar
