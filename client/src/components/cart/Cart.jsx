import React, { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import "./cart.scss"


const Cart = () => {
    const cart = useSelector(state => state.cart)

    console.log(cart);
  return (
    <div className="cart">
    <div className="left">
      <table className="table">
      <tbody>
          <tr className="trTitle">
            <th>Product</th>
            <th>Name</th>
            <th>Extras</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Total</th>
          </tr>
        </tbody>
        <tbody>
          {cart.products.map((product) => (
            <tr className="tr" key={product._id}>
              <td>
                <div className="imgContainer">
                  <img
                    src="img"
                    layout="fill"
                    objectFit="cover"
                    alt=""
                  />
                </div>
              </td>
              <td>
                <span className="name">{product.title}</span>
              </td>
              <td>
                {/* <span className={styles.extras}>
                  {product.extras.map((extra) => (
                    <span key={extra._id}>{extra.text}, </span>
                  ))}
                </span> */}
              </td>
              <td>
                <span className="price">${product.price}</span>
              </td>
              <td>
                <span className="quantity">{product.quantity}</span>
              </td>
              <td>
                <span className="total">
                  ${product.price * product.quantity}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    <div className="right">
      <div className="wrapper">
        <h2 className="title">CART TOTAL</h2>
        <div className="totalText">
          <b className="totalTextTitle">Subtotal:</b>${cart.total}
        </div>
        <div className="totalText">
          <b className="totalTextTitle">Discount:</b>$0.00
        </div>
        <div className="totalText">
          <b className="totalTextTitle">Total:</b>${cart.total}
        </div>
        {/* {open ? (
          <div className={styles.paymentMethods}>
            <button
              className={styles.payButton}
              // onClick={() => setCash(true)}
              onClick={createOrder}
            >
              CASH ON DELIVERY
            </button>
        <PayPalScriptProvider 
        options={{ 
          "client-id": "AVqxrJSrXwhnhVuyjItFE4Cpbx3aShR5N1yVC-UNb_hdQQEp64FbGu4OI_Hx6y-l79gsJBx4RNqrKP_k",
          components: "buttons",
          currency: "USD",
         "disable-funding": "credit,card,p24",
        
        
        }}
        
        
        >
          <ButtonWrapper
          currency={currency} showSpinner={false} 
      
           
          />
      </PayPalScriptProvider>
          </div>
        ) : (
          <button onClick={() => setOpen(true)} className={styles.button}>
            CHECKOUT NOW!
          </button>
        )} */}
          </div>
      </div>
    </div>
  )
}

export default Cart