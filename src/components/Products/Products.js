import React, { useEffect, useState } from 'react';
const Products = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('/products.JSON')
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setProducts(data);
            });
    }, [])
    return (
        <div id='products'>
            <div class="row row-cols-1 row-cols-2 row-cols-md-5 g-4">

                {
                    products?.map((product, index) => <div key={index} class="col">
                        <div className="card h-100 shadow-lg" data-bs-toggle="tooltip" data-bs-placement="top" title={product?.name}>
                            <img src={product?.img} className="card-img-top img-fluid" alt="..." />
                            <div className="card-body ">
                                <h5 className="card-title " >{product?.name.slice(0, 50)}...</h5>
                                <p className="card-text"></p>
                                <button className="btn btn-primary">Add to Cart</button>
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default Products;