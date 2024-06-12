import React from 'react'
import './Products.css'
import all_product from '../../assets/all_product'
import Item from '../Item/Item'

const Products = ({ category }) => {
  return (
    <div className="products">
      {all_product.map((product, i) => {
        return category === undefined || category === product.category ?
          <Item product={product} key={i} /> : <></>
      })}
    </div>
  )
}

export default Products