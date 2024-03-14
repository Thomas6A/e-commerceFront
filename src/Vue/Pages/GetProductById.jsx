import React from 'react';
import CardProducts from '../Components/CardProducts';
import { Col, Container, Row } from 'react-bootstrap';

const GetProductById = (product) => {
    return (
        <Container>
            <Row className="justify-content-center">
                    <Col key={product.id} md={4}>
                        <CardProducts product={product} />
                    </Col>
            </Row>
        </Container>
    );
};

export default GetProductById;