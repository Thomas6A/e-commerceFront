import React from 'react';
import CardProducts from '../Components/CardProducts';
import { Button, Col, Container, Row } from 'react-bootstrap';
import FormProductController from '../../Controller/Product/FormProductController';
import PostProduct from './PostProduct';

const GetProducts = (products) => {


    return (
        <Container>
            <Button variant="secondary" href={'/form/null'} >ajouter produit</Button>
            <Row className="justify-content-center">
                {products.length !== 0 ? (
                    products.map(product => (
                        <Col key={product.id} md={4}>
                            <CardProducts product={product} />
                        </Col>
                    ))
                ) : (
                    <Col>
                        <h2>Aucun produit trouvé</h2>
                    </Col>
                )}

            </Row>
        </Container>
    );
};

export default GetProducts;