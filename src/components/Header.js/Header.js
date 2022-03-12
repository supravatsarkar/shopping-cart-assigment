import React, { useState } from 'react';
import { FaShoppingCart } from 'react-icons/fa';

const Header = ({ cartDisplay, setCartDisplay }) => {

    const [cartState, setCartState] = useState(false);

    const handleCartIcon = (state) => {
        setCartState(!state);
        if (state) {
            setCartDisplay({
                top: '1000px',
            });
        } else {
            setCartDisplay({
                top: '50px',
            });
        }
    }

    return (
        <div id='header'>
            <div className='d-flex justify-content-between align-items-center p-3 bg-secondary text-white'>
                <h2 className='ps-2'>E-commerce</h2>

                <button className='btn btn-secondary' onClick={() => handleCartIcon(cartState)} >
                    <FaShoppingCart id='cartIcon' className='fs-2 pe-2' />
                </button>
            </div>

        </div>
    );
};

export default Header;