
import React from 'react'
import { UsersParam } from '../../page'

type PhotoProps =  {
    params :{photoId:number, id:number}
}



const PhotosPage = ({params:{id,photoId}}:PhotoProps) => {
  return (
    <div className='text-black'>
        <h1>photos page</h1>
        {id + photoId}
      
        

       
        
      
    </div>
  )
}

export default PhotosPage
