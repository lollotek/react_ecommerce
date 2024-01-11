import {describe, expect, test} from 'vitest';
import {render, screen} from '@testing-library/react';
import { ListItem } from '@components/ListItem';

const product = {
  id: 1,
  title: "test", 
  thumbnail: "test.jpg", 
  price: 999, 
  description: "test description"
}

describe("List Item", () => {
  test("Render the product element", () => {
    render(<ListItem {...product} />);
    expect(screen.getByText(/999/i)).toBeDefined()
    expect(screen.getByText(/^test$/i)).toBeDefined()
    expect(screen.getByText(/^add to cart$/i)).toBeDefined()
    expect(screen.getByAltText(/^test description$/i)).toBeDefined()
  })
})