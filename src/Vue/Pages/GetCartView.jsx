import { Button, Col, Container, Row } from "react-bootstrap";
import CardProducts from "../Components/CardProducts";
import RemoveProductToCartController from "../../Controller/Cart/RemoveProductToCartController";
import RemoveAllProductToCartController from "../../Controller/Cart/RemoveAllProductController";

const GetCartView = (CartUser) => {

    const handleRemoveClick = (product) => {
        RemoveProductToCartController(product);
        window.location.reload();
    };

    const handleRemoveAllClick = () => {
        RemoveAllProductToCartController();
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
            <Button onClick={() => handleRemoveAllClick()} variant="primary" >Vider le panier</Button>
        </Container>
    );
};

export default GetCartView;