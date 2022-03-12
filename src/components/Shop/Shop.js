import { useState } from "react";
import Cart from "../Cart/Cart";
import Products from "../Products/Products";


const Shop = ({ cartDisplay, setCartDisplay }) => {


    return (
        <div id="shop">
            {/* <h1>This is Shop</h1> */}

            <Products></Products>
            <Cart setCartDisplay={setCartDisplay} cartDisplay={cartDisplay}></Cart>
        </div>
    );
};

export default Shop;