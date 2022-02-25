import React from 'react';

const Product = (props) => {
    const { product, onAdd } = props;
    return (
        <div className='card h-25 w-25 mx-auto'>
            <div className="card-body">
                <img className="img-fluid rounded" src={product.image} alt={product.name} />
            </div>

            <h5>{product.name}</h5>
            <p>{product.description}</p>
            <div className="card-footer">
                <p className='lead'>${product.price}</p>
                <button className='btn btn-primary' onClick={() => onAdd(product)}>Add To Cart</button>
            </div>
        </div>
    );
}

export default Product