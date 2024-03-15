import Cart from "../../Model/Cart";
import CartService from "../../Service/CartService";

const RemoveAllProductToCartController = (product) => {
    try {
        let cart = new Cart();
        cart = JSON.parse(localStorage.getItem("cart"));
        cart.products = [];
        CartService.removeAllProductToCart(cart);
        localStorage.setItem("cart", JSON.stringify(cart))
    } catch (error) {
        console.log("erreur" + error);
    }
}

export default RemoveAllProductToCartController;