import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <div className='flex'>
        <Link href='/' className='mr-5'  >Home</Link>
        <Link href='/about' className='mr-5'  >about</Link>
        <Link href='/users' className='mr-5'  >Users</Link>
        <Link href='/products' className='mr-5'  >Products</Link>
      
    </div>
  )
}

export default Navbar
