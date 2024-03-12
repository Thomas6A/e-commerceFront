import { useEffect, useState } from "react";
import ProductService from "../../Service/ProductService";
import GetProducts from "../../Vue/Pages/GetProducts";

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
                let product = new products();
                product.setId(data.id);
                product.setName(data.product_name);
                product.setPrice(data.product_price);
                product.setDescription(data.product_description);
                product.setImage(data.product_image);
            })
            setProducts(listProducts);
        } catch (error) {
            console.log("erreur" + error);
        }
    }
    return (GetProducts(products))
}

export default GetProductsController;