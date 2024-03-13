import React from 'react';
import CardProducts from '../Components/CardProducts';
import { Col, Container, Row } from 'react-bootstrap';

const GetProducts = (products) => {
    return (
        <Container>
            <Row className="justify-content-center">
                {products.map(product => (
                    <Col key={product.id} md={4}>
                        <CardProducts product={product} />
                    </Col>
                ))}
            </Row>
        </Container>
    );
};

export default GetProducts;