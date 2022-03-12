import { useState } from "react";
import Cart from "../Cart/Cart";
import Products from "../Products/Products";


const Shop = ({ cartDisplay, setCartDisplay, cart, setCart }) => {

    // const [cart, setCart] = useState([]);


    return (
        <div id="shop">
            {/* <h1>This is Shop</h1> */}

            <Products setCart={setCart} cart={cart} setCartDisplay={setCartDisplay}></Products>
            <Cart setCart={setCart} cart={cart} setCartDisplay={setCartDisplay} cartDisplay={cartDisplay}></Cart>
        </div>
    );
};

export default Shop;