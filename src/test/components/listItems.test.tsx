import {describe, expect, test, vi} from 'vitest';
import {render, screen} from '@testing-library/react';
import { ListItems } from '@components/ListItems';

const products = {products:[{
  id: 1,
  title: "test", 
  thumbnail: "test.jpg", 
  price: 999, 
  description: "test description"
}]}

vi.mock('@api/products', () => ({
  useGetProductQuery: vi.fn(() => ({data: null, isFetching: false})),
  useGetProductsQuery: vi.fn(() => ({data: products, isFetching: false, isError: false}))
}))

describe("List Items", () => {
  test("Render a list of items", () => {
    render(<ListItems page={1} />);
    expect(screen.getByText(/999/i)).toBeDefined()
    expect(screen.getByText(/^test$/i)).toBeDefined()
    expect(screen.getByText(/^add to cart$/i)).toBeDefined()
    expect(screen.getByAltText(/^test description$/i)).toBeDefined()
  })
})