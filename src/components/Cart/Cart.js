import React, { useState } from 'react';
import { FaWindowClose } from 'react-icons/fa';


const Cart = ({ cartDisplay, setCartDisplay }) => {

    const closeButton = () => {
        setCartDisplay('none');
    }
    return (
        <div style={{ display: cartDisplay }}>
            <div id="cart" className='shadow-lg border border-2 rounded bg-white p-3'>
                <h2 className='text-center'>Your Cart</h2>
                <FaWindowClose onClick={closeButton} id="cartCloseBtn" className='fs-2 m-0 p-0' />
            </div>
        </div>
    );
};

export default Cart;