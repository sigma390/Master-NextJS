import React from 'react'
import AddToCrt from './AddToCrt'
import styles from './ProductCart.module.css'
const ProductCart = () => {
  return (
    <div className={styles.cart}>
        <AddToCrt/>
      
    </div>
  )
}

export default ProductCart
