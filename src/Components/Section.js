import React from 'react';
import Product from './Product';

const Section = (props) => {
    const { products, onAdd } = props;
    return (
        <main className="">
            <h1 className='display-6 mt-5'>Products</h1>
            <div className="row pt-3">
                {products.map((product) => (
                    <Product key={product.id} product={product} onAdd={onAdd}></Product>
                ))}
            </div>
        </main>
    );
}

export default Section