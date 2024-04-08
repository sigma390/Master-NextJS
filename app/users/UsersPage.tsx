'use client'
import { sort } from 'fast-sort';
import Link from 'next/link';
import React from 'react'



interface UsersType {
    id:number;
    name:string;
    email:string;
    
}
interface Props {
    sortOrder:string
}




const UsersPage = async ({sortOrder}:Props) => {
    // http request to bakend
    // const res = await fetch('https://jsonplaceholder.typicode.com/users');//without cache
    const res = await fetch('https://jsonplaceholder.typicode.com/users',{
        cache:'no-store'
    });//without cache
    const users:UsersType[] = await res.json();

    const sortedUsers = sort(users).asc(sortOrder==='email'
        ? user =>user.email
        :  user => user.name  
    );
    const sortedUsers1 = sort(users).asc(
 user =>user.email   
);
console.log(sortedUsers)
 
      
  return (
    <div className='text-black'>
        <p className='text-black text-4xl'>Users</p>
        <p>{new Date().toLocaleTimeString()}</p> 
        <table className=' text-black table table-bordered'>
            <thead >
                <tr>
                    <th className='text-black'>
                        <Link href='/users?sortOrder=name'>Name</Link>

                    </th>
                    <th className='text-black'>
                    <Link href='/users?sortOrder=email'>Email</Link>
                    </th>
                </tr>
            </thead>
            <tbody>
            {

                
                sortedUsers.map(user =><tr key={user.id}>
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

export default UsersPage
