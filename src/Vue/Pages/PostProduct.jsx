import React from 'react';
import { Button, Form } from 'react-bootstrap';

const PostProduct = () => {
    return (
        <div>
            <Form>
                <Form.Group className="mb-3" controlId="product_name" >
                    <Form.Label>Nom</Form.Label>
                    <Form.Control type="email" defaultValue="" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="product_price">
                    <Form.Label>Prix</Form.Label>
                    <Form.Control type="number" defaultValue="" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="product_description">
                    <Form.Label>Description</Form.Label>
                    <Form.Control type="text" defaultValue="" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="product_image">
                    <Form.Label>Url de l'image</Form.Label>
                    <Form.Control type="text" defaultValue="" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Envoyer
                </Button>
            </Form>
        </div>
    );
};

export default PostProduct;