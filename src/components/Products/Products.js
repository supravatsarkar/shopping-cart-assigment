import React, { useEffect, useState } from 'react';
import { BsFillCartPlusFill } from "react-icons/bs";
import { FcRating } from "react-icons/fc";

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
                        <div className="product card h-100 shadow" data-bs-toggle="tooltip" data-bs-placement="top" title={product?.name}>
                            <img src={product?.img} className="card-img-top img-fluid" alt="..." />
                            <div className="card-body p-2">
                                <h5 className="card-title fs-6" >{product?.name.slice(0, 50)}...</h5>
                                <div className='d-flex justify-content-between align-items-center'>
                                    <small className='text-muted'>{product.category}</small>
                                    <small className='d-flex justify-content-between align-items-center'>
                                        <FcRating />
                                        {product.star}
                                    </small>
                                </div>
                            </div>
                            <div class="card-footer d-flex justify-content-between align-items-center">

                                <p className="card-text fw-bolder m-0">${product?.price}</p>
                                <BsFillCartPlusFill className='fs-4 deleteFromCartIcon' onClick={() => handleAddToCart(product)} />
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default Products;