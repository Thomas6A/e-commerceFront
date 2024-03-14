import axios from "axios";

function getCartByUser(user){
    return axios.get('http://localhost:8085/cart/'+user.id)
}

function addProductToCart(cart){
    axios.put('http://localhost:8085/cartaddproduct',cart)
}

export default{
    getCartByUser,
    addProductToCart
}