import axios from "axios";

function fetchProducts() {
    return axios.get("http://localhost:8085/products")
}

function fetchProductById(id) {
    return axios.get("http://localhost:8085/products/" + id)
}

function deleteProduct(produit) {
    return axios({
        method: 'delete',
        url: "http://localhost:8085/products",
        headers: {},
        data: {
            "id": produit.id
        }
    });
}

export default {
    fetchProducts,
    fetchProductById,
    deleteProduct
}