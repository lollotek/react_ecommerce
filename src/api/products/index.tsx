import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { ProductResponse } from '../types';
import { PAGINATION_SIZE } from '../const';


// Define a service using a base URL and expected endpoints
export const productsApi = createApi({
  reducerPath: 'productsApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://dummyjson.com/' }),
  endpoints: (builder) => ({
    getProducts: builder.query<ProductResponse, number>({
      query: (page) => `products?limit=${PAGINATION_SIZE}&skip=${page * PAGINATION_SIZE}`,
    }),
  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetProductsQuery } = productsApi