import { useEffect, useState } from "react";
import ProductService from "../../Service/ProductService";
import Product from "../../Model/Product";
import GetProductById from "../../Vue/Pages/GetProductById";
import { useParams } from "react-router";

const GetProductByIdController = () => {
    const [product, setProduct] = useState([]);
    const {id_product} = useParams();

    useEffect(() => {
        fetchProduct();
    }, [])

    const fetchProduct = async () => {
        try {
            let response = await ProductService.fetchProductById(id_product);
            let product = new Product();
            console.log(id_product);
            console.log(response.data);
            product.setId(response.data.id);
            product.setName(response.data.product_name);
            product.setPrice(response.data.product_price);
            product.setDescription(response.data.product_description);
            product.setImage(response.data.product_image);
            setProduct(product);
        } catch (error) {
            console.log("erreur" + error);
        }
    }
    return (GetProductById(product))
}

export default GetProductByIdController;