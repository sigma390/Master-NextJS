import React from 'react'

interface UsersType {
    id:number;
    name:string;
    email:string
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
        <table className=' text-black table table-bordered'>
            <thead >
                <tr>
                    <th className='text-black'>Name</th>
                    <th className='text-black'>Email</th>
                </tr>
            </thead>
            <tbody>
            {
                users.map(user =><tr key={user.id}>
                <td>{user.name}</td>
                <td>{user.email}</td>
                </tr> 

                )
            }

            </tbody>
            



        </table>
      
    </div>
  )
}

export default UserPage
