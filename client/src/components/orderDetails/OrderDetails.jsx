import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { reset } from "../../redux/cartSlice";
import "./orderdetails.scss"
import axios from "axios";


const OrderDetails = () => {
    const cart = useSelector((state) => state.cart);
    const [customer, setCustomer] = useState("");
    const [address, setAddress] = useState("");
    // const [orders, setOrders] = useState([]);


    const createOrder = async(e) => {
        e.preventDefault();
    
        const newOrder = {
          customer:customer,
          address: address,
          total: cart.total,
          method: 1,
        };
    
        try {
          // const res = await axios.post("/orders", newOrder);
          const res = await axios.post("https://ordering-app-api.onrender.com/api/orders", newOrder);
          console.log(res);
        //   setOrders(res.data);
        //   setAdress(res.data.adress)
          // if (res.status === 201) {
        //   dispatch(reset());
        //   navigate(`/orders/${orders._id}`);

        //  res &&   window.location.replace(`/orders/${res.data._id}`)
           
            
        
        window.location.replace(`/orders/${res.data._id}`)
      
    
          // }
        } catch (error) {
          console.log(error);
        }
    
        createOrder();
      };
    
    //   console.log(orders);






  return (
    <div className="orderdetails">
      <div className="wrapper">
        <h1 className="title">Order details</h1>
        <div className="item">
          <label className="label">Name Surname</label>
          <input
            placeholder="John Doe"
            type="text"
            className="input"
            value={customer}
            onChange={(e) => setCustomer(e.target.value)}
          />
        </div>
        <div className="item">
          <label className="label">Phone Number</label>
          <input
            type="text"
            placeholder="+1 234 567 89"
            className="input"
          />
        </div>
        <div className="item">
          <label className="label">Address</label>
          <textarea
            rows={5}
            placeholder="Elton St. 505 NY"
            type="text"
            className="textarea"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
        </div>
        <button className="button"  onClick={(e) => createOrder(e)}>
          Order
        </button>
      </div>
    </div>
  )
}

export default OrderDetails