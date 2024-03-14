import { useEffect } from 'react';
import ProductService from '../../Service/ProductService';

const PostProductController = () => {

    useEffect(() => {
        fetchProducts();
    }, [])

    const fetchProducts = async () => {
        try {
            await ProductService.createProduct();
        } catch (error) {
            console.log("erreur" + error);
        }
    }

    return "/post";
};

export default PostProductController;