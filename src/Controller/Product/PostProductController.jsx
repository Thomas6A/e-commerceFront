import ProductService from '../../Service/ProductService';

const PostProductController = (formData) => {

    try {
        ProductService.createProduct(formData);
    } catch (error) {
        console.log("erreur" + error);
    }
};

export default PostProductController;