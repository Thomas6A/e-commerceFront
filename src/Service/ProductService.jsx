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

function createProduct(produit) {
    return axios({
        method: 'post',
        url: "http://localhost:8085/products",
        headers: {},
        data: {
            "product_name": produit.product_name,
            "product_price": produit.product_price,
            "product_description": produit.product_description,
            "product_image": produit.product_image
        }
    });
}

export default {
    fetchProducts,
    fetchProductById,
    deleteProduct
}