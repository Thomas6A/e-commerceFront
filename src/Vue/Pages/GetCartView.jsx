import { Col, Container, Row } from "react-bootstrap";
import CardProducts from "../Components/CardProducts";

const GetCartView = (CartUser) => {
    return (
        <Container>
            <Row className="justify-content-center">
                {console.log(CartUser)}
                {CartUser.products.map(product => (
                    <Col md={4}>
                        <CardProducts product={product} />
                    </Col>
                ))}
            </Row>
        </Container>
    );
};

export default GetCartView;