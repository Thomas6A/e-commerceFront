import { useEffect } from "react";
import ProductService from "../../Service/ProductService";
import { useParams } from "react-router";

const DeleteProductController = () => {
    const {product} = useParams();

    useEffect(() => {
        deleteProduct();
    }, [])

    const deleteProduct = async () => {
        try {
            await ProductService.deleteProductById(product);
        } catch (error) {
            console.log("erreur" + error);
        }
    }
}

export default DeleteProductController;