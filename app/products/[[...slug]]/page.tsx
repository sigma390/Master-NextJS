import React from 'react'


interface ProductPageProps{
    params:{slug:string[]}
}



const ProductsPage = ({params:{slug}}:ProductPageProps) => {
  return (
    <div>
        PrODUCTS PAGE {slug}
      
    </div>
  )
}

export default ProductsPage
