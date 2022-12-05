import React from 'react';
import "./orders.scss"

const Orders = () => {
  return (
    <div className="orders">
      <div className="left">
        <div className="row">
          <table className="table">
            <tr className="trTitle">
              <th>Order ID</th>
              <th>Customer</th>
              <th>Address</th>
              <th>Total</th>
            </tr>
            <tr className="tr">
            <td>
                <span className="id">{}</span>
              </td>
              <td>
                <span className="name">{}</span>
              </td>
              <td>
                <span className="address">{}</span>
              </td>
              <td>
                <span className="total">${}</span>
              </td>
            </tr>
          </table>
        </div>
        <div className="row">
          <div >
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
          </div>
          <div >
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
          <div >
            <img src="/img/bike.png" width={30} height={30} alt="" />
            <span>On the way</span>
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
          <div >
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
      <div className="right">
        <div className="wrapper">
          <h2 className="title">CART TOTAL</h2>
          <div className="totalText">
            <b className="totalTextTitle">Subtotal:</b>$79.60
          </div>
          <div className="totalText">
            <b className="totalTextTitle">Discount:</b>$0.00
          </div>
          <div className="totalText">
            <b className="totalTextTitle">Total:</b>$79.60
          </div>
          <button disabled className="button">
            PAID
          </button>
        </div>
      </div>
    </div>
  )
}

export default Orders