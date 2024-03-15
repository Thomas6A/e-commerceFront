import { Button, Col, Container, Row } from "react-bootstrap";
import CardProducts from "../Components/CardProducts";
import RemoveProductToCartController from "../../Controller/Cart/RemoveProductToCartController";

const GetCartView = (CartUser) => {

    const handleRemoveClick = (product) => {
        RemoveProductToCartController(product);
        window.location.reload();
    };

    return (
        <Container>
            <Row className="justify-content-center">
                {console.log(CartUser)}
                {CartUser.products.map(product => (
                    <Col key={product.id} md={4}>
                        <CardProducts product={product} />
                        <Button onClick={() => handleRemoveClick(product)} variant="primary" >Retirer du panier</Button>
                    </Col>
                ))}
            </Row>
        </Container>
    );
};

export default GetCartView;