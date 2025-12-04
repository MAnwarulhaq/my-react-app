import React, { useEffect, useState } from 'react'

const Products = () => {
  const [products,setProducts] = useState([])
  const url = "https://dummyjson.com/products"

   useEffect(()=>{
      fetch(url)
      .then(res => res.json())
      .then(data => setProducts(data.products))
      .catch(error => error)
   },[])
  return (
    <div>
      <h1>Products List</h1>
    </div>
  )
}

export default Products