import { api } from "./createAPI";

 export const products = api.injectEndpoints({
    endpoints:(builder)=>({
        getProducts: builder.query({
            query : () => "/products"
        }),
          getProduct: builder.query({
            query : (id) => `/products/${id}`
        }),
          addProduct: builder.mutation({
            query: (product)=>({
                url:'/products',
                method: "POSt",
                body: product
            })
        }),
    })
})


export const {useGetProductsQuery,useGetProductQuery,useAddProductMutation} =products