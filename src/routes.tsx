import type { ReactNode } from "react";
import Catalog from "./pages/Catalog/catalog";
import Cart from "./pages/Cart/Cart";

export interface AppRoute {
  path: string;
  element: ReactNode;
}

export const routes: AppRoute[] = [
  { path: "/", element: <Catalog /> },
  { path: "/cart", element: <Cart /> },
  { path: "*", element: <Catalog /> },
];
