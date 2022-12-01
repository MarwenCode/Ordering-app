import React from 'react';
import { Link } from "react-router-dom"
import "./navbar.scss";
import { FaShoppingCart } from "react-icons/fa"

const Navbar = () => {
  return (
    <div className='navbar'>
        <div className="left">
        <div className="call">
            
                <img src="/img/telephone.png" alt=""   width="32" height="32"/>

            </div>
            <div className="text">
               <div className="text"> ORDER NOW! </div>
               <div className="text">0145  584 658 </div>

            </div>

        </div>
        <div className="center">
            <div className="title">
              <img src="/img/city.png" />
            </div>
        </div>
       
        <div className="right">
            <div className="cart">
            {/* <img src="/img/cart.png" alt="" width="30px" height="30px" /> */}
           <FaShoppingCart />
          <div className="counter">2</div>

            </div>

        </div>

    </div>
  )
}

export default Navbar