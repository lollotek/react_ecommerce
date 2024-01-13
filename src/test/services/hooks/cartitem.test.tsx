import { afterEach, describe, expect, test } from 'vitest';
import { act, renderHook } from '@testing-library/react';
import { useCartProducts } from '@services/hooks';

const items = [
  {  
    productId: 1,
    quantity: 2,
  },
  {
    productId: 2,
    quantity: 2,
  },
  {
    productId: 6,
    quantity: 1,
  }
]

const items2 = [
  {  
    productId: 1,
    quantity: 2,
  },
  {
    productId: 6,
    quantity: 1,
  }
]

describe("hooks", () => {
  afterEach(() => {
      localStorage.clear();
  })

  test("useCartProducts", () => {
    localStorage.setItem('cart', JSON.stringify([1,1,1,2,2,3]))
    const { result } = renderHook(() => useCartProducts())
    expect(result.current.cartProducts.length).toBe(3)
    expect(typeof result.current.removeCartProduct).toBe('function')
    expect(typeof result.current.addCartProduct).toBe('function')
    act(() => {
      result.current.removeCartProduct(3)
    })
    expect(result.current.cartProducts.length).toBe(2)
    act(() => {
      result.current.addCartProduct(6)
    })
    expect(result.current.cartProducts.length).toBe(3)
    act(() => {
      result.current.removeCartProduct(1)
    })
    expect(result.current.cartProducts).toStrictEqual(items)
    act(() => {
      result.current.removeAllCartProduct(2)
    })
    expect(result.current.cartProducts).toStrictEqual(items2)
  })
    
})

