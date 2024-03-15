import { useEffect, useState } from "react";
import CartService from "../../Service/CartService";
import Cart from "../../Model/Cart";

const AddProductToCartController = (product) => {
        try {
            let cart = new Cart();
            cart = JSON.parse(localStorage.getItem("cart"));
            let products = cart.products;
            products.push(product);
            cart.products = products;
            CartService.addProductToCart(cart);
            localStorage.setItem("cart", JSON.stringify(cart))
        } catch (error) {
            console.log("erreur" + error);
        }
}

export default AddProductToCartController;