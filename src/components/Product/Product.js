import { faCartPlus, faCoffee } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Product.css';

const Product = ({ product, handleAddToCart }) => {
    // const { product, handleAddToCart } = props;
    const { name, price, img, seller, ratings} = product;
    
    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className='product_details'>
                <p className='product_name'>{name}</p>
                <p>Price: ${price}</p>
                <p><small>Manufacturer : {seller}</small></p>
                <p><small>Rating : {ratings} star</small></p>
            </div>
            <button onClick={() => handleAddToCart(product)} className='btn_cart'>
                <p>Add to Cart <FontAwesomeIcon icon={faCartPlus}></FontAwesomeIcon></p>
                
            </button>
        </div>
    );
};

export default Product;