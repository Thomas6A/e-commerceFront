import { useEffect, useState } from "react";
import ProductService from "../../Service/ProductService";
import GetProducts from "../../Vue/Pages/GetProducts";
import Product from "../../Model/Product";

const GetProductsController = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetchProducts();
    }, [])

    const fetchProducts = async () => {
        try {
            let response = await ProductService.fetchProducts();
            const listProducts = [];
            response.data.forEach(data => {
                let product = new Product();
                product.setId(data.id);
                product.setName(data.product_name);
                product.setPrice(data.product_price);
                product.setDescription(data.product_description);
                product.setImage(data.product_image);
                listProducts.push(product);
            })
            setProducts(listProducts);
        } catch (error) {
            console.log("erreur" + error);
        }
    }
    return (GetProducts(products))
}

export default GetProductsController;