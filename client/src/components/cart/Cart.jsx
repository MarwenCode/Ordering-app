import React, { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { reset } from "../../redux/cartSlice";
import axios from "axios";

import {
  PayPalScriptProvider,
  PayPalButtons,
  usePayPalScriptReducer,
} from "@paypal/react-paypal-js";
import "./cart.scss";

const Cart = () => {
  const cart = useSelector((state) => state.cart);

  console.log(cart);
  const [open, setOpen] = useState(false);
  const [cash, setCash] = useState(true);
  const [adress, setAdress] = useState([]);

  const amount = cart.total;
  const currency = "USD";
  const style = { layout: "vertical" };
  const dispatch = useDispatch();

  const [orders, setOrders] = useState([]);
  const navigate = useNavigate();

  const createOrder = (e) => {
    e.preventDefault();

    const newOrder = {
      address: adress,
      total: cart.total,
      method: 1,
    };

    try {
      const res = axios.post("/orders", newOrder);
      console.log(res);
      setOrders(res.data);
      setAdress(res.data.adress)
      // if (res.status === 201) {
      dispatch(reset());
      navigate(`/orders/${orders._id}`);

      // }
    } catch (error) {
      console.log(error);
    }

    createOrder();
  };

  console.log(orders);

  // Custom component to wrap the PayPalButtons and handle currency changes
  const ButtonWrapper = ({ currency, showSpinner }) => {
    // usePayPalScriptReducer can be use only inside children of PayPalScriptProviders
    // This is the main reason to wrap the PayPalButtons in a new component
    const [{ options, isPending }, dispatch] = usePayPalScriptReducer();

    useEffect(() => {
      dispatch({
        type: "resetOptions",
        value: {
          ...options,
          currency: currency,
        },
      });
    }, [currency, showSpinner]);

    return (
      <>
        {showSpinner && isPending && <div className="spinner" />}
        <PayPalButtons
          style={style}
          disabled={false}
          forceReRender={[amount, currency, style]}
          fundingSource={undefined}
          createOrder={(data, actions) => {
            return actions.order
              .create({
                purchase_units: [
                  {
                    amount: {
                      currency_code: currency,
                      value: amount,
                    },
                  },
                ],
              })
              .then((orderId) => {
                // Your code here after create the order
                return orderId;
              });
          }}
          onApprove={function (data, actions) {
            return actions.order.capture().then(function (details) {
              console.log(details);
              const shipping = details.purchase_units[0].shipping;
              createOrder({
                customer: shipping.name.full_name,
                address: shipping.address.address_line_1,
                total: cart.total,
                method: 1,
              });
            });
          }}
        />
      </>
    );
  };

  return (
    <div className="cart">
      <div className="left">
        <table className="table">
          <tbody>
            <tr className="trTitle">
              <th>Product</th>
              <th>Name</th>
              {/* <th>Extras</th> */}
              <th>Price</th>
              <th>Quantity</th>
              <th>Total</th>
            </tr>
          </tbody>
          <tbody>
            {cart.products.map((product) => (
              <tr className="trTitle" key={product._id}>
                <td>
                  <div className="imageContainer">
                    <img
                      src={product.img}
                      layout="fill"
                      objectFit="cover"
                      alt=""
                    />
                  </div>
                </td>
                <td>
                  <span className="name">{product.title}</span>
                </td>
                {/* <td>
                <span className="extras">
                  {product.extras.map((extra) => (
                    <span key={extra._id}>{extra.text}, </span>
                  ))}
                </span>
              </td> */}
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
          {open ? (
            <div className="paymentMethods">
              <button
                className="payButton"
                // onClick={() => setCash(true)}
                onClick={(e) => createOrder(e)}>
                CASH ON DELIVERY
              </button>
              <PayPalScriptProvider
                options={{
                  "client-id":
                    "AVqxrJSrXwhnhVuyjItFE4Cpbx3aShR5N1yVC-UNb_hdQQEp64FbGu4OI_Hx6y-l79gsJBx4RNqrKP_k",
                  components: "buttons",
                  currency: "USD",
                  "disable-funding": "credit,card,p24",
                }}>
                <ButtonWrapper currency={currency} showSpinner={false} />
              </PayPalScriptProvider>
            </div>
          ) : (
            <button onClick={() => setOpen(true)} className="button">
              CHECKOUT NOW!
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Cart;
