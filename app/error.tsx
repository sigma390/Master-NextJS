'use client'
import React, { ReactNode } from 'react'


//interface to catch errors
interface ErrorPageProps{
    error:Error,
    reset:()=>void;
    children:ReactNode
}


const ErrorHandle = ({error, reset, children}:ErrorPageProps) => {
  
    console.log("Error",error);

  
  
    return (
    <div>
        <p>{children}</p>
        <button className="btn" onClick={()=>reset()}>Retry</button>
      
    </div>
  )
}

export default ErrorHandle
