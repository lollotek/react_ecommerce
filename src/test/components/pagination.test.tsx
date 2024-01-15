import {describe, expect, test, vi} from 'vitest';
import {render, screen} from '@testing-library/react';
import { Pagination } from '@components/Pagination';
import { PAGINATION_SIZE } from '@api/const';
import { ProductResponse } from '@api/types';

const response:ProductResponse = {
  total: 100, 
  limit: PAGINATION_SIZE, 
  skip: PAGINATION_SIZE * 2,
  products: []
}

vi.mock('@api/products', () => ({
  useGetProductQuery: vi.fn(() => ({})),
  useGetProductsQuery: vi.fn(() => ({data: response, isFetching: false}))
}))

vi.mock('react-router-dom', async (importOriginal) => {
  const original = await importOriginal<typeof import('react-router-dom')>()
  return {
    ...original,
    Link: vi.fn(({children }) => <div>{children}</div>),
    useParams: vi.fn(() => ({pageParam: 1})),
  }
})

describe("Pagination", () => {
  test("Render initial buttons", () => {
    render(<Pagination/>);
    expect(screen.getAllByRole('button')[0]).toHaveAttribute('data-disabled', "true")
    expect(screen.getByText(/^1$/i)).toBeDefined()
    expect(screen.getByText(/^2$/i)).toBeDefined()
    expect(screen.getByText(/^3$/i)).toBeDefined()
    expect(screen.queryByText(/^4$/i)).toBeFalsy()
    expect(screen.getAllByRole('button')[4]).toHaveAttribute('data-disabled', "true")
    expect(screen.getAllByRole('button')[5]).toHaveAttribute('data-disabled', "true")
    expect(screen.queryByText(/^Next$/i)).toBeDefined()
  })
})