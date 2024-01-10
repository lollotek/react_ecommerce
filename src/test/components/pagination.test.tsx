import {describe, expect, test, vi} from 'vitest';
import {render, screen} from '@testing-library/react';
import { Pagination } from '@components/Pagination';
import { PAGINATION_SIZE } from '@api/const';
import { ProductResponse } from '@api/types';
import userEvent from '@testing-library/user-event';

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
const fn = vi.fn();

describe("Pagination", () => {
  test("Render all the pagination buttons", () => {
    render(<Pagination onChangePage={fn} page={3} />);
    expect(screen.queryByText(/0/i)).toBeFalsy()
    expect(screen.getByText(/1/i)).toBeDefined()
    expect(screen.getByText(/2/i)).toBeDefined()
    expect(screen.getByText(/3/i)).toBeDefined()
    expect(screen.getByText(/4/i)).toBeDefined()
    expect(screen.getByText(/5/i)).toBeDefined()
    expect(screen.queryByText(/6/i)).toBeFalsy()
  })

  test("Render middle buttons", () => {
    render(<Pagination onChangePage={fn} page={6} />);
    expect(screen.queryByText(/0/i)).toBeFalsy()
    expect(screen.getByText(/4/i)).toBeDefined()
    expect(screen.getByText(/5/i)).toBeDefined()
    expect(screen.getByText(/6/i)).toBeDefined()
    expect(screen.getByText(/7/i)).toBeDefined()
    expect(screen.getByText(/8/i)).toBeDefined()
    expect(screen.queryByText(/9/i)).toBeFalsy()
  })

  test("Render initial buttons", () => {
    render(<Pagination onChangePage={fn} page={1} />);
    expect(screen.getAllByRole('button')[0]).toHaveAttribute('data-disabled', "true")
    expect(screen.getAllByRole('button')[1]).toHaveAttribute('data-disabled', "true")
    expect(screen.getByText(/1/i)).toBeDefined()
    expect(screen.getByText(/2/i)).toBeDefined()
    expect(screen.getByText(/3/i)).toBeDefined()
    expect(screen.queryByText(/4/i)).toBeFalsy()
    expect(screen.queryByText(/5/i)).toBeFalsy()
  })
  
  test("Render latest buttons", () => {
    render(<Pagination onChangePage={fn} page={10} />);
    expect(screen.getByText(/10/i)).toBeDefined()
    expect(screen.getByText(/9/i)).toBeDefined()
    expect(screen.getByText(/8/i)).toBeDefined()
    expect(screen.queryByText(/7/i)).toBeFalsy()
    expect(screen.queryByText(/11/i)).toBeFalsy()
    expect(screen.getAllByRole('button')[5]).toHaveAttribute('data-disabled', "true")
    expect(screen.getAllByRole('button')[6]).toHaveAttribute('data-disabled', "true")
  })


  test("test button calls", async () => {
    const user = userEvent.setup();
    const changePage = vi.fn();
    render(<Pagination onChangePage={changePage} page={5} />);
    await user.click(screen.getAllByRole('button')[0]); // first
    expect(changePage).toHaveBeenLastCalledWith(1);
    await user.click(screen.getAllByRole('button')[1]); // prev
    expect(changePage).toHaveBeenLastCalledWith(4);
    await user.click(screen.getAllByRole('button')[2]); // 3
    expect(changePage).toHaveBeenLastCalledWith(3);
    await user.click(screen.getAllByRole('button')[3]); // 4
    expect(changePage).toHaveBeenLastCalledWith(4);
    await user.click(screen.getAllByRole('button')[5]); // 6
    expect(changePage).toHaveBeenLastCalledWith(6);
    await user.click(screen.getAllByRole('button')[6]); // 7
    expect(changePage).toHaveBeenLastCalledWith(7);
    await user.click(screen.getAllByRole('button')[7]); // next
    expect(changePage).toHaveBeenLastCalledWith(6);
    await user.click(screen.getAllByRole('button')[8]); // last
    expect(changePage).toHaveBeenLastCalledWith(10);
    
  })


})