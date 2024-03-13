import { Card } from "react-bootstrap";

const CardProducts = ({ product }) => {

    return (
        <>
            <Card style={{ margin: '5%', marginLeft: '3%' }}>
                <Card.Body>
                    <Card.Title style={{ marginLeft: '38%' }}>{product.id}</Card.Title>

                    <Card.Text className='mb-5 mt-5'>
                        {product.product_name}
                    </Card.Text>
                    <Card.Text className='mb-5 mt-5'>
                        {product.product_name}
                    </Card.Text>
                    <Card.Text className='mb-5 mt-5'>
                        {product.product_name}
                    </Card.Text>
                </Card.Body>
            </Card>
        </>
    );
};

export default CardProducts;