import { useParams } from "react-router-dom";
import PostProduct from "../../Vue/Pages/PostProduct";

const FormProductController = () => {
    const { product } = useParams();

    const productObj = JSON.parse(decodeURIComponent(product));

    console.log(productObj);

    return (PostProduct(productObj));
};

export default FormProductController;