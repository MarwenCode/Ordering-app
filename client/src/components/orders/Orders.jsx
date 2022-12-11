import axios from 'axios';
import React, {useEffect, useState} from 'react';
import { useDispatch, useSelector } from "react-redux";
import cartSlice from '../../redux/cartSlice';
import "./orders.scss"
import { useLocation, useParams } from 'react-router-dom';

const Orders = () => {
  const cart = useSelector((state) => state.cart);
  const [order, setOrder] = useState([])

  const location = useLocation();
console.log(location);
const path = location.pathname.split("/")[2];
console.log(path);




  useEffect(() => {
    const fetchOrder = async() => {
      // const res = await axios.get(`/orders/${path}`);
      const res = await axios.get(`https://ordering-app-api.onrender.com/api/orders/${path}`);
      console.log(res.data);
      setOrder(res.data)
    }
    fetchOrder()
  }, [path])
  

  console.log(order)


  return (
    <div className="orders">
      <div className="left">
        <div className="row">
          <table className="table">
            <tr className="trTitle">
              <th>OrderID</th>
              <th className='customer'>Customer</th>
              <th className='adress'>Address</th>
              <th className='total'>Total</th>
            </tr>
            <tr className="tr">
            <td>
                <span className="id">{order._id}</span>
              </td>
              <td>
                <span className="name">{order.customer}</span>
              </td>
              <td>
                <span className="address">{order.address}</span>
              </td>
              <td>
                <span className="total">${order.total}</span>
              </td>
            </tr>
          </table>
        </div>
        <div className="row">
          {/* <div >
            <img src="/img/paid.png" width={30} height={30} alt="" />
            <span>Payment</span>
            <div className="checkedIcon">
              <img
                className="checkedIcon"
                src="/img/checked.png"
                width={20}
                height={20}
                alt=""
              />
            </div>
          </div> */}
          <div className='inProgress' >
            <img src="/img/bake.png" width={30} height={30} alt="" />
            <span>Preparing</span>
            <div className="checkedIcon">
              <img
                className="checkedIcon"
                src="/img/checked.png"
                width={20}
                height={20}
                alt=""
              />
            </div>
          </div>
          <div  className='undone'>
            <img src="/img/bike.png" width={30} height={30} alt="" />
            <span >On the way</span>
            <div className="checkedIcon">
              <img
                className="checkedIcon"
                src="/img/checked.png"
                width={20}
                height={20}
                alt=""
              />
            </div>
          </div>
          <div className='undone'>
            <img src="/img/delivered.png" width={30} height={30} alt="" />
            <span>Delivered</span>
            <div className="checkedIcon">
              <img
                className="checkedIcon"
                src="/img/checked.png"
                width={20}
                height={20}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
      {/* <div className="right">
        <div className="wrapper">
          <h2 className="title">CART TOTAL</h2>
          <div className="totalText">
            <b className="totalTextTitle">Subtotal:</b>${order.total}
          </div>
          <div className="totalText">
            <b className="totalTextTitle">Discount:</b>$0.00
          </div>
          <div className="totalText">
            <b className="totalTextTitle">Total:</b>${order.total}
          </div>
          <button disabled className="button">
            PAID
          </button>
        </div>
      </div> */}
    </div>
  )
}

export default Orders
