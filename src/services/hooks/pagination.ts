import { useGetProductsQuery } from "@api/products";
import { useMemo } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import { PAGINATION_SIZE } from '@api/const';

export const MAX_STEPS = 1

export const usePagination = () => {
  const [searchParams] = useSearchParams();
  const { pageParam } = useParams();
  const page = Number(pageParam || 1)
  const {data, isFetching} = useGetProductsQuery({page: Number(pageParam || 1) -1, q: searchParams.get('q') || ''})

  const params = useMemo(() => (searchParams.toString()), [searchParams]);

  const max = useMemo(() => {
    if (!data) return 0
    return Math.ceil(data.total / PAGINATION_SIZE)
  }, [data]);

  const {disableStart, disableEnd, prevPages, nextPages, prevPage, nextPage, showOne, showToOne, showMax, total} = useMemo(() => {
    const availableNext = Math.min(MAX_STEPS, max - page);
    const availablePrev = Math.min(MAX_STEPS, page-1);
    const prevPage = page -1;
    const nextPage = page +1;
    const showOne = page - MAX_STEPS > 1;
    const showToOne = page - MAX_STEPS > 2;
    const showMax = page + MAX_STEPS < max

    return {
      prevPages: Array.from({ length: availablePrev }, (_, index) => page - 1 - index).reverse(),
      nextPages: Array.from({ length: availableNext }, (_, index) => page + 1 +  index),
      disableEnd: page === max,
      disableStart: page === 1 ,
      prevPage,
      nextPage,
      showOne,
      showToOne,
      showMax,
      total: data?.total,
    }
  }, [page, max]);


  return {prevPage, nextPage, disableStart, disableEnd, prevPages, nextPages, showOne, showToOne, showMax, max, page, params, total, isFetching}
}
