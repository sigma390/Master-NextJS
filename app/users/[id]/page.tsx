import React from 'react'


export type UsersParam = { 
    params:{
        id:number;
    }
}



const UsersDetailsPage = ({params:{id}}:UsersParam) => {
  return (
    <div>
        usersDetails
           {id}
      
    </div>
  )
}

export default UsersDetailsPage
