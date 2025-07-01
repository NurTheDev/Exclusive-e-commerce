// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Define a service using a base URL and expected endpoints
export const productAPI = createApi({
    reducerPath: 'productAPI',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://dummyjson.com/' }),
    endpoints: (builder) => ({
        GetProduct: builder.query({
            query: (name) => name ? `products/search?q=${name}` : 'products',
        }),
        GetProductByCategory: builder.query({
            query: (category) => category ? `products/category/${category}` : 'products/categories',
        }),
        GetProductCategoriesList: builder.query({
            query: ()=> "products/category-list",
        })
    }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetProductQuery, useGetProductByCategoryQuery, useGetProductCategoriesListQuery } = productAPI
