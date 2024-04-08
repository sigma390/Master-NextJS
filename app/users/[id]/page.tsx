import NotFound from '@/app/not-found';
import { notFound } from 'next/navigation';
import React from 'react'


export type UsersParam = { 
    params:{
        id:number;
    }
}



const UsersDetailsPage = ({params:{id}}:UsersParam) => {
  
  if (id>10) notFound(); // built in not found method
  
  
  return (
    <div>
        usersDetails
           {id}
      
    </div>
  )
}

export default UsersDetailsPage
