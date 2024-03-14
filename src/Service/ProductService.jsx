import axios from "axios";

function fetchProducts() {
    return axios.get("http://localhost:8085/products")
}

function fetchProductById(id) {
    return axios.get("http://localhost:8085/products/"+id)
}

function deleteProductById(produit) {
    return axios({
        method: 'post',
        url: "http://localhost:8085/products/",
        headers: {}, 
        data: {
            produit
        }
      });
}

export default {
    fetchProducts,
    fetchProductById,
    deleteProductById
}