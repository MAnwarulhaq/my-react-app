import { api } from "./createAPI";

 export const products = api.injectEndpoints({
    endpoints:(builder)=>({
        getProducts: builder.query({
            query : () => "/products"
        })
    })
})


export const {useGetProductsQuery} =products