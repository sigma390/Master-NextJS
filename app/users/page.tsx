import React from 'react'

interface UsersType {
    id:number;
    name:string
}




const UserPage = async () => {

    // http request to bakend
    // const res = await fetch('https://jsonplaceholder.typicode.com/users');//without cache
     const res = await fetch('https://jsonplaceholder.typicode.com/users',{
        cache:'no-store'
    });//without cache
    const users:UsersType[] = await res.json();





  return (
    <div className='text-black'>
        <p className='text-black text-4xl'>Users</p>
        <p>{new Date().toLocaleTimeString()}</p> 
        <div className='text-black'>
            {
                users.map(user =><li key={user.id}>{user.name}</li> 

                )
            }



        </div>
      
    </div>
  )
}

export default UserPage
