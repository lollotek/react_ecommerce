import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { Product, ProductResponse } from '@api/types';
import { PAGINATION_SIZE } from '@api/const';

export const productsApi = createApi({
  reducerPath: 'productsApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://dummyjson.com/' }),
  endpoints: (builder) => ({
    getProducts: builder.query<ProductResponse, {page: number, q?: string}>({
      query: ({page, q}) => {
      return {
        url: 'products/search',
        params: {
          select: 'id,thumbnail,title,description,price',
          skip: page * PAGINATION_SIZE,
          limit: PAGINATION_SIZE,
          page,
          q,
        },
      };
    }}),
    getProduct: builder.query<Product, number>({
      query: (productId) => `products/${productId}`,
    }),
    getProductList: builder.query<Array<Product>, Array<number>>({
      async queryFn(
        productIds,
        _queryApi,
        _,
        fetch
      ) {
        const response: Array<Product> = []
        for (const productId of productIds) {
          const result = await fetch({
            url: `products/${productId}`,
            method: 'GET',
          });
          if ('error' in result) throw result.error;
          response.push(result.data as Product)
        }
        return {data: response};
      },
    }),
  }),
})

export const { useGetProductsQuery, useGetProductQuery, useGetProductListQuery } = productsApi
