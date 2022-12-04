import React from 'react';
import "./product.scss"

const Product = ({pizza}) => {
  return (
    <div className="product">
  
      <img src={pizza.img} alt=""  className='img'/>
  
    <h1 className="title">{pizza.title} </h1>
    <span className="price">{pizza.price} </span>
    <p className="desc">{pizza.desc} </p>
  </div>
  )
}

export default Product