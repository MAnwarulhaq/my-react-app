import { api } from "./createAPI";

 export const products = api.injectEndpoints({
    endpoints:(builder)=>({
        getProducts: builder.query({
            query : () => "/products"
        }),
          getProduct: builder.query({
            query : (id) => `/products/${id}`
        }),
    })
})


export const {useGetProductsQuery,useGetProductQuery} =products