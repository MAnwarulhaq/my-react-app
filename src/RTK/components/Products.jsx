import React from 'react'
import { useGetProductsQuery } from '../service/products'
const Products = () => {
    const { data } = useGetProductsQuery()
    console.log(data?.products)
    return (
        <div>
            <h1>Products</h1>
        </div>

    )
}

export default Products