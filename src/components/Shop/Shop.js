import Cart from "../Cart/Cart";
import Products from "../Products/Products";


const Shop = () => {

    return (
        <div id="shop">
            {/* <h1>This is Shop</h1> */}
            <Products></Products>
            <Cart></Cart>
        </div>
    );
};

export default Shop;