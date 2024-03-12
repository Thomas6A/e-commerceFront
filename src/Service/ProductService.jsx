import axios from "axios";

function fetchProducts(){
    return axios.get("http://localhost:8085/products")
}

export default{
    fetchProducts
}