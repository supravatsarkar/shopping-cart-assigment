import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';

const Header = ({ cartDisplay, setCartDisplay }) => {
    const openCart = () => {
        setCartDisplay('');
    }
    return (
        <div id='header'>
            <div className='d-flex justify-content-between align-items-center p-3 bg-secondary text-white'>
                <h2 className='ps-2'>E-commerce</h2>

                <FaShoppingCart id='cartIcon' className='fs-2 pe-2' onClick={openCart} />
            </div>

        </div>
    );
};

export default Header;