import Cart from "../../Model/Cart";
import CartService from "../../Service/CartService";

const RemoveProductToCartController = (product) => {
    try {
        let cart = new Cart();
        cart = JSON.parse(localStorage.getItem("cart"));
        let products = cart.products;
        const index = products.indexOf(product);
        products.splice(index,1);
        cart.products = products;
        console.log(cart);
        CartService.removeProductToCart(cart);
        localStorage.setItem("cart", JSON.stringify(cart))
    } catch (error) {
        console.log("erreur" + error);
    }
}

export default RemoveProductToCartController;