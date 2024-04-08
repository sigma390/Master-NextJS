import React, { ReactNode } from 'react'


interface adminLayoutProps{
    children:ReactNode
}



const layout = ({children}:adminLayoutProps) => {
  return (
    <div className='flex'>
        <aside className='bg-gray-200 p-5 mr-2'> Admin Sidebar</aside>
        <div>{children}</div>

      
    </div>
  )
}

export default layout
