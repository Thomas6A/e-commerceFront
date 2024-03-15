import axios from "axios";

function getCartByUser(user){
    return axios.get('http://localhost:8085/cart/'+user.id)
}

function addProductToCart(cart){
    axios.put('http://localhost:8085/cartaddproduct',cart)
}

function removeProductToCart(cart){
    axios.put('http://localhost:8085/cartdeleteproduct',cart)
}

export default{
    getCartByUser,
    addProductToCart,
    removeProductToCart
}