import React from 'react'

const Navbar = () => {
  return (
    <div className='flex items-center justify-between p-4 z-[100] w-full absolute'>
      <h1 className='text-red-600 text-2xl md:text-4xl font-bold cursor-pointer'>Movie App</h1>
      <div>
        <button className='border rounded text-white border-grey-300 py-2 px-5 ml-4'>Sign In</button>
        <button className='bg-red-600 px-5 py-2 rounded ml-4'>Sign Up</button>
      </div>
    </div>
  )
}

export default Navbar;