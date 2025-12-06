import React from 'react'
import { useGetProductsQuery ,useGetProductQuery} from '../service/products'
const Products = () => {
    const id ="ea8f"
    // get all products
    // const { data } = useGetProductsQuery()
    // console.log(data?.products)

    // get products by id
    const { data } = useGetProductQuery(id)
    console.log(data,"Products")

    return (
        <div>
            <h1>Products</h1>
        </div>

    )
}

export default Products