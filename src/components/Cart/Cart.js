import React, { useState } from 'react';
import { FaWindowClose } from 'react-icons/fa';


const Cart = ({ cartDisplay, setCartDisplay, cart }) => {

    const closeButton = () => {
        setCartDisplay({
            top: '1000px',
        });
    }
    console.log(cart);
    return (
        <div id="cart" className='shadow-lg border border-2 rounded bg-white p-3' style={cartDisplay}>
            {/* close botton  */}
            <FaWindowClose onClick={closeButton} id="cartCloseBtn" className='fs-2 m-0 p-0' />

            <h2 className='text-center'>Your Cart: {cart.length}</h2>
            <div>
                {
                    cart?.map((cartProduct, index) => <div key={index}>
                        <div class="card mb-3" >
                            <div class="row g-0">
                                <div class="col-md-4">
                                    <img src={cartProduct?.img} class="img-fluid rounded-start" alt="..." />
                                </div>
                                <div class="col-md-8">
                                    <div class="card-body">
                                        <h5 class="card-title"></h5>
                                        <p class="card-text">{cartProduct?.name?.slice(0, 20)}..</p>
                                        <p className="card-text">${cartProduct?.price}</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>)
                }
            </div>
            <hr />
            <p>Total: </p>
        </div>
    );
};

export default Cart;


