import axios from "axios";

function fetchProducts() {
    return axios.get("http://localhost:8085/products")
}

function fetchProductById(id) {
    return axios.get("http://localhost:8085/products/"+id)
}

export default {
    fetchProducts,
    fetchProductById
}