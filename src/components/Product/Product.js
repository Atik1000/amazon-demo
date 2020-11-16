import React from 'react';
import './Product.css';

const Product = (props) => {
    //console.log(props)
    const {name,img,seller,price,stock}=props.product;
    const handleAddProduct=props.handleAddProduct;
    return (
        <div className='product'>
            <div>
                <img src={img} alt=""/>
            </div>
      <div>
      <h4 className='product-name'>{name}</h4>
            
            <p> <small>by:{seller}</small> </p> 
            <p>${price}</p>
            <br/>
            <p><small> only {stock} left in stock -order soon</small> </p>
            <button className='main-button' onClick={()=>handleAddProduct(props.product)}>Add cart</button>
      </div>
        </div>
    );
};

export default Product;