import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import GetProductsController from './Controller/Product/GetProductsController';
import { useEffect, useState } from 'react';
import CartService from './Service/CartService';
import User from "./Model/User";
import Cart from "./Model/Cart";
import GetCart from './Controller/Cart/GetCartController';
import GetProductByIdController from './Controller/Product/GetProductByIdController';
import GetCartController from './Controller/Cart/GetCartController';
import FormProductController from './Controller/Product/FormProductController';

function App() {

  useEffect(() => {
    let user = new User();
    user.setId(1);
    user.setUsername("username");
    user.setPassword("password");
    user.setRoles("roles");
    fetchCart(user);
  }, [])

  const fetchCart = async (user) => {
    try {
        let response = await CartService.getCartByUser(user);
        let cart = new Cart();
        cart.setId(response.data.id)
        cart.setUser(response.data.user)
        cart.setProducts(response.data.products)
        localStorage.setItem("cart", JSON.stringify(cart))
        console.log(localStorage.getItem("cart").length);
        console.log(JSON.stringify(cart));
    } catch (error) {
        console.log("erreur " + error);
    }
}



  return <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<GetProductsController />} />
        <Route path="/Cart" element={<GetCartController />} />
        <Route path={"/:id_product"} element={<GetProductByIdController />} />
        <Route path={"/form/:product"} element={<FormProductController />} />
      </Routes>
    </BrowserRouter>
  </>
}

export default App;
