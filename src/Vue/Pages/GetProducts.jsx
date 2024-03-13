import React from 'react';
import CardProducts from '../Components/CardProducts';

const GetProducts = (products) => {
    return (
        <>
            <div className='d-flex row justify-content-around'>

                <div className='row'>
                    {products.map(element => (
                        <CardProducts product={element} />
                    ))}
                </div>
            </div>
        </>
    );
};

export default GetProducts;