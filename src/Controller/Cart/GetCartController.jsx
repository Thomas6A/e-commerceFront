import Cart from "../../Model/Cart";
import GetCartView from "../../Vue/Pages/GetCartView";

const GetCartController = () => {
    let cart = new Cart();
    cart = JSON.parse(localStorage.getItem("cart"));
    console.log(cart);

    return (GetCartView(cart))
}

export default GetCartController;