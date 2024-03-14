import React from 'react';
import CardProducts from '../Components/CardProducts';
import { Col, Container, Row } from 'react-bootstrap';

const GetProducts = (products) => {
    return (
        <Container>
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