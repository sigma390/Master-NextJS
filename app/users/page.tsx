import React from 'react'
import UsersPage from './UsersPage'

//access the query params

interface Props {
  searchParams :{sortOrder:string}
}


const UserPage = async ({searchParams:{sortOrder}}:Props) => {

    





  return (
    <>
        <h1>Users</h1>
        <UsersPage sortOrder = {sortOrder}/>
    
    </>
    
  )
}

export default UserPage
