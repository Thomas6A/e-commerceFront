import React from 'react';
import { Button, Form } from 'react-bootstrap';
import PostProductController from '../../Controller/Product/PostProductController';
import { useNavigate } from 'react-router-dom';

const PostProduct = (productObj) => {
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();

        const formData = {
            id: productObj && productObj.id ? productObj.id : null,
            product_name: event.target.elements.product_name.value,
            product_price: event.target.elements.product_price.value,
            product_description: event.target.elements.product_description.value,
            product_image: event.target.elements.product_image.value
        };

        PostProductController(formData);

        handleNavigate();
    };

    const handleNavigate = () => {
        navigate("/");

    }


    return (
        <div>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="product_name" >
                    <Form.Label>Nom</Form.Label>
                    <Form.Control type="text" defaultValue={productObj && productObj.product_name ? productObj.product_name : ""} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="product_price">
                    <Form.Label>Prix</Form.Label>
                    <Form.Control type="number" defaultValue={productObj && productObj.product_price ? productObj.product_price : ""} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="product_description">
                    <Form.Label>Description</Form.Label>
                    <Form.Control type="text" defaultValue={productObj && productObj.product_description ? productObj.product_description : ""} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="product_image">
                    <Form.Label>Url de l'image</Form.Label>
                    <Form.Control type="text" defaultValue={productObj && productObj.product_image ? productObj.product_image : ""} />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Envoyer
                </Button>
            </Form>
        </div>
    );
};

export default PostProduct;