

import React, { Suspense } from 'react'
import UsersPage from './UsersPage'
import Link from 'next/link'

//access the query params

interface Props {
  searchParams :{sortOrder:string}
}


const UserPage = async ({searchParams:{sortOrder}}:Props) => {

    





  return (
    <>
        <h1>Users</h1>
        <Link href='/users/new' className='btn'>New User</Link>
        {/* A Loader */}
        <Suspense fallback={<p>Loading!!!</p>}>
        <UsersPage sortOrder = {sortOrder}/>



        </Suspense>
        
    
    </>
    
  )
}

export default UserPage
