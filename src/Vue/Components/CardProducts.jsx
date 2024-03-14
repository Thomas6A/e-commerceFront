import { Button, Card } from "react-bootstrap";
import AddProductToCartController from "../../Controller/Cart/AddProductToCart";
import DeleteProductController from "../../Controller/Product/DeleteProductController";

const CardProducts = ({ product }) => {

    const handleAddClick = () => {
        AddProductToCartController(product);
        window.location.reload();
    };
  
    const handleDeleteClick = () => {
        DeleteProductController(product);
        window.location.reload();
    };

    return (
        <>
            <Card style={{ width: '18rem', margin: '1rem' }}>
                <Card.Img variant="top" src="https://pbs.twimg.com/profile_images/1173267077/jmdoudoux_400x400.jpg" />
                <Card.Body>
                    <Card.Title>{product.product_name}</Card.Title>
                    <Card.Text>{product.product_description}</Card.Text>
                    <Button onClick={handleAddClick} variant="primary" >Ajouter au panier</Button>
                    <Button variant="primary" href={"/" + product.id}>Voir produits</Button>
                    <Button variant="danger" onClick={handleDeleteClick}>Supprimer produit</Button>
                </Card.Body>
            </Card>
        </>
    );
};

export default CardProducts;