import {describe, expect, test, vi} from 'vitest';
import {render, screen} from '@testing-library/react';
import { CartItems } from '@components/CartItems';

const productsResponse = {products:[{
  id: 1,
  title: "test", 
  thumbnail: "test.jpg", 
  price: 999, 
  description: "test description"
}]}

vi.mock('@api/products', () => ({
  useGetProductQuery: vi.fn(() => ({data: null, isFetching: false})),
  useGetProductsQuery: vi.fn(() => ({data: productsResponse, isFetching: false, isError: false}))
}))

vi.mock('@components/CartItem', () => ({
  CartItem: vi.fn(({productId, quantity }) => <div data-testid="CartItem">id:{productId} - qnt:{quantity}</div>)
}))

describe("Cart Items", () => {
  test("Render the cart items list", () => {
    localStorage.setItem('cart', JSON.stringify([1,1,1,2,2,3]))
    render(<CartItems />);
    expect(screen.getByText(/^id:1 - qnt:3$/i)).toBeDefined()
    expect(screen.getByText(/^id:2 - qnt:2$/i)).toBeDefined()
    expect(screen.getByText(/^id:3 - qnt:1$/i)).toBeDefined()
  })
})