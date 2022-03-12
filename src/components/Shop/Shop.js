import React, { useEffect, useState } from 'react';

const Shop = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('/products.JSON')
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setProducts(data);
            });
    }, [])
    return (
        <div style={{ border: '2px solid black', width: '80%' }}>
            <h1>This is Shop</h1>
            {
                products?.map((product, index) => <p key={index}>{product?.name}</p>)
            }
        </div>
    );
};

export default Shop;