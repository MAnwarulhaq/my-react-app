import React from 'react'
import { useGetProductsQuery } from '../service/products'
const Products = () => {
    const {data: products} = useGetProductsQuery()
    console.log(products)
  return (
    <div>Products</div>
  )
}

export default Products