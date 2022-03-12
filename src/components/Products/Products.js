import React, { useEffect, useState } from 'react';
import { FaShoppingCart } from 'react-icons/fa';

const Products = ({ setCartDisplay, setCart, cart }) => {
    const [products, setProducts] = useState([]);

    // products load 
    useEffect(() => {
        fetch('/products.JSON')
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setProducts(data);
            });
    }, [])

    const handleAddToCart = (product) => {
        const findItem = cart.find(prod => prod.key === product.key);
        if (!findItem) {
            const newProduct = { ...product, quantity: 1 };
            setCart([...cart, newProduct]);
        } else {
            findItem.quantity++;

        }

        setCartDisplay({
            top: '50px',
        });
    }
    return (
        <div id='products'>
            <div class="row row-cols-1 row-cols-2 row-cols-md-3 row-cols-lg-5 g-4">

                {
                    products?.map((product, index) => <div key={index} class="col">
                        <div className="product card h-100 shadow-lg" data-bs-toggle="tooltip" data-bs-placement="top" title={product?.name}>
                            <img src={product?.img} className="card-img-top img-fluid" alt="..." />
                            <div className="card-body ">
                                <h5 className="card-title fs-6" >{product?.name.slice(0, 50)}...</h5>
                                <p className="card-text fw-bolder">${product?.price}</p>
                                <button className="btn btn-primary" onClick={() => handleAddToCart(product)}>Add to Cart <FaShoppingCart /></button>
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default Products;