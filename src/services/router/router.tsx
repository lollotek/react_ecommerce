import { createBrowserRouter } from "react-router-dom";
import Error from '@pages/Error.tsx';
import Cart from "@pages/Cart.tsx";
import Main from "@pages/Main";
import Products from "@pages/Products";

export const router = createBrowserRouter([
  {
      path: "/",
      element: <Main />,
      errorElement: <Error />,
      children: [
        {
          path: "/",
          element: <Products />,
        },
        {
          path: "/products/:pageParam?",
          element: <Products />,
        },
        {
          path: "/cart",
          element: <Cart />,
        },
      ],
  },
])
