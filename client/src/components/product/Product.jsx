import React from 'react';
import { Link } from "react-router-dom"
import "./product.scss"

const Product = ({pizza}) => {
  return (
    <div className="product">
     <Link to={`products/${pizza._id}`}>
     <img src={pizza.img} alt=""  className='img'/>
     
     </Link>
     
  
    <h1 className="title">{pizza.title} </h1>
    <span className="price">{pizza.price} </span>
    <p className="desc">{pizza.desc} </p>
  </div>
  )
}

export default Product  