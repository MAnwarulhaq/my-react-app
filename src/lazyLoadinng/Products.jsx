import React, { useEffect, useState } from 'react'


const Products = () => {
    const [products,setProducts] = useState([])
    
    const url = "https://dummyjson.com/products"

    useEffect(()=>{
        fetch(url)
        .then((res) => res.json())
        .then(data => setProducts(data.products))
    },[])
    // console.log(products)
  return (
    <div>
        <h1>Products List</h1>
        <ul>
          {
            products?.map((item)=>{
              return(
                <li>Product Tittle , {item.title}</li>
              )
            })
          }
        </ul>
    </div>
  )
}

export default Products