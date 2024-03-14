import ProductService from "../../Service/ProductService";

const DeleteProductController = (product) => {

    try {
        ProductService.deleteProduct(product);
    } catch (error) {
        console.log("erreur" + error);
    }
}


export default DeleteProductController;