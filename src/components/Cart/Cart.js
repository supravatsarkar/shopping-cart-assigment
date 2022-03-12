import React, { useState } from 'react';
import { FaWindowClose } from 'react-icons/fa';
import { AiFillDelete } from "react-icons/ai";


const Cart = ({ cartDisplay, setCartDisplay, cart, setCart }) => {

    const closeButton = () => {
        setCartDisplay({
            top: '1000px',
        });
    }
    console.log(cart);

    const handleRemoveButton = (ProductId) => {
        const restProducts = cart?.filter(product => product.key !== ProductId);
        setCart([...restProducts]);
    }

    let total = 0;
    cart.forEach(product => {
        total += product.price;
    })
    return (
        <div id="cart" className='shadow-lg border border-2 rounded bg-white p-3' style={cartDisplay}>
            {/* close botton  */}
            <FaWindowClose onClick={closeButton} id="cartCloseBtn" className='fs-2 m-0 p-0' />

            <h2 className='text-center fs-5'>Your Cart: {cart.length}</h2>
            <div>
                {
                    cart?.map((cartProduct, index) => <div key={index}>
                        <div class=" shadow mb-2" >
                            <div class="row g-0">
                                <div class="col-md-2">
                                    <img src={cartProduct?.img} class="img-fluid rounded-circle bg-secondary border border-primary" alt="..." />
                                </div>
                                <div class="col-md-6">
                                    <p class="text-muted" style={{ fontSize: '14px' }}>{cartProduct?.name?.slice(0, 20)}..</p>
                                </div>
                                <div className='col-md-3'>
                                    <p className='text-primary '>${cartProduct?.price}</p>
                                </div>
                                <div className='col-md-1'>
                                    <AiFillDelete className='deleteFromCartIcon text-danger fs-5' onClick={() => handleRemoveButton(cartProduct.key)} />
                                </div>
                            </div>
                        </div>

                    </div>)
                }
            </div>
            <hr />
            <p className='fs-6 fw-bolder'>Total: {total.toFixed(2)}</p>
        </div>
    );
};

export default Cart;


