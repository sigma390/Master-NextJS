'use client'

import React from 'react'

const AddToCrt = () => {
  return (
    <div>
        <button className='btn btn-secondary ' onClick={()=>{
            alert("Addded to cart")
        }}>Add to Cart</button>
      
    </div>
  )
}

export default AddToCrt
