import { Suspense, lazy } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Navbar } from "./components/Navbar/Navbar";
import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer";
import { ItemDetailContainer } from "./components/ItemDetailContainer/ItemDetailContainer";
import { Cart } from "./components/Cart/Cart";

import { Home } from "./components/views/Home/Home";

import './app.css'
import CartContextProvider from "./components/context/CartContext";

const Error404 = lazy(()=> import('./components/views/Error404/Error404'));

export const App = () => {
  return (
    <>
      <CartContextProvider>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/category/:idCategory' element={<ItemListContainer />}/>
            <Route path='/item/:idItem' element={<ItemDetailContainer />}/>
            <Route path='/cart' element={<Cart />} />
            <Route path='*' element={<Suspense fallback={<>...</>}><Error404 /></Suspense>} />
          </Routes>
        </BrowserRouter>
      </CartContextProvider>
    </>
  );
};
