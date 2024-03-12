import axios from "axios";

function fetchProducts(){
    return axios.get("http://localhost:8080/products")
}

export default{
    fetchProducts
}