import {describe, expect, test, vi} from 'vitest';
import {render, screen} from '@testing-library/react';
import { CartItem } from '@components/CartItem';

const testItem = {
  title: "test", 
  thumbnail: "test.jpg", 
  price: 999, 
  description: "test description"
}

vi.mock('@api/products', () => ({
  useGetProductQuery: vi.fn(() => ({data: testItem, isFetching: false})),
  useGetProductsQuery: vi.fn(() => ({data: null, isFetching: false}))
}))

describe("Cart Item", () => {
  test("Render the cart item", () => {
    render(<CartItem productId={2} quantity={3}/>);
    expect(screen.getByText(/3/i)).toBeDefined()
    expect(screen.getByText(/999/i)).toBeDefined()
    expect(screen.getByText(/^test$/i)).toBeDefined()
    expect(screen.getByAltText(/^test description$/i)).toBeDefined()
  })
})