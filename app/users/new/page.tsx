'use client'


import { useRouter } from 'next/navigation'
import React from 'react'

const NewUserPage = () => {

  //dewfine router for programmatic navigation
  const router = useRouter();



  return (
    <div>
        <p className='text-black'>Its new users page
        
        </p>
        <button
        className='btn btn-secondary'
        
        onClick={()=>{
          router.push('/users')
        }}>Create User</button>
      
    </div>
  )
}

export default NewUserPage
