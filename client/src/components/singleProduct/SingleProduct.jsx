import axios from 'axios';
import React, {useState, useEffect} from 'react';
import { useLocation, useParams } from 'react-router-dom';
import "./singleproduct.scss";
import { useDispatch } from "react-redux";
import {addProduct } from "../../redux/cartSlice"

const SingleProduct = () => {

const [singleProduct, setSingleProduct] = useState([]);

const [price, setPrice] = useState(12);
const [size, setSize] = useState(0);
const [quantity, setQuantity] = useState(1);
// const [extras, setExtras] = useState([]);


const dispatch = useDispatch()

// console.log(extras);
const changePrice = (number) => {
  setPrice(price + number);
};

const handleSize = (sizeIndex) => {
  const number = singleProduct.prices[sizeIndex] - singleProduct.prices[size];
  setSize(sizeIndex);
  changePrice(number);
};

// const handleChangeExtras = (e, option) => {
//   const checked = e.target.checked;

//   if (checked) {
//     changePrice(option.price);
//     setExtras((prev) => [...prev, option]);
//   } else {
//     changePrice(-option.price);
//     setExtras(extras.filter((extra) => extra._id !== option._id));
//   }
// };

const location = useLocation();
console.log(location);
const path = location.pathname.split("/")[2];
console.log(path);



useEffect(() => {
    const fetchSingleProduct = async () => {
        const res = await axios.get(`/products/${path}`);
        setSingleProduct(res.data)
     
    }

    fetchSingleProduct()
}, [path])
console.log(singleProduct)
console.log(singleProduct.extraOptions)


const handleClick = () => {
  dispatch(addProduct({...singleProduct,  price, quantity}));
};

  return (
    <div className='singleProduct'>
          <div className="left">
        <div className="imgContainer">
          <img src={singleProduct.img}  />
        </div>
      </div>
      <div className="right">
        <h1 className="title">{singleProduct.title}</h1>
        <span className="price">${price}</span>
        <p className="desc">{singleProduct.desc}</p>
        <h3 className="choose">Choose the size</h3>
        <div className="sizes">
          <div className="small"  onClick={() => handleSize(0)}>
            <img  src="/img/size.png"/>
            <span className="number">Small</span>
          </div>
          <div className="medium" onClick={() => handleSize(1)}>
            <img src="/img/size.png"  />
            <span className="number">Medium</span>
          </div>
          <div className="large" onClick={() => handleSize(2)}>
            <img src="/img/size.png"  alt="" />
            <span className="number">Large</span>
          </div>
        </div>
        {/* <h3 className="choose">Choose additional ingredients</h3> */}
        <div className="ingredients">
           
          {/* {singleProduct.extraOptions.map((option) => (
            <div className="option" key={option._id} >
              <input
                type="checkbox"
                id={option.text}
                name={option.text}
                className="checkbox"
                onChange={(e) => handleChangeExtras(e, option)}
              />
              <label htmlFor="double">{option.text}</label>
          
            </div>
          ))}  */}

      
        </div>
        <div className="add">
          <input
            type="number"
            defaultValue={1}
            className="quantity"
            onChange={(e) => setQuantity(e.target.value)}
          />
          <button className="button"  onClick={handleClick}  >Add to Cart</button>
        </div>
      </div>

    </div>
  )
}

export default SingleProduct