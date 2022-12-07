import React, { useState, useEffect } from "react";
import "./admin.scss";
import axios from "axios";


const Admin = () => {
    const [products, setProducts] = useState([]);
    const [order, setOrder] = useState([])

    // fetch products

    useEffect(() => {
      const fetchProducts = async () => {
        const res = await axios.get("/products");
        console.log(res);
        setProducts(res.data);
      };

      fetchProducts();
    }, []);

    console.log(products)

    //delete product
    const deleteProduct = async (productId) => {
      try {
        await axios.delete(`/products/${productId}`);
        setProducts(products.filter((product) => product._id !== productId))
        
      } catch (error) {
        console.log(error)
      }
    }




 // fetch orders 
    useEffect(() => {
      const fetchOrder = async() => {
        const res = await axios.get("/orders");
        console.log(res.data);
        setOrder(res.data)
      }
      fetchOrder()
    }, [])
    
  
    console.log(order)





  return (
    <div className="admin">
    <div className="ProductsItem">
      <h1 className="title">Products</h1>
      <table className="table">
        <tbody>
          <tr className="trTitle">
            {/* <th>Image</th> */}
            <th>Id</th>
            <th>Title</th>
            <th>Price</th>
            <th>Action</th>
          </tr>
        </tbody>
        {products.map((product) => (
          <tbody key={product._id}>
            <tr className="trTitle">
              {/* <td>
                <img
                  src={product.img}
                  width={50}
                  height={50}
                  objectFit="cover"
                  alt=""
                />
              </td> */}
              <td>{product._id.slice(0, 5)}...</td>
              <td>{product.title}</td>
              <td>${product.prices[0]}</td>
              <td>
                <button className="button">Edit</button>
                <button
                  className="button"
                  onClick={() => deleteProduct(product._id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          </tbody>
        ))}
      </table>
    </div>
    <div className="OrdersItem">
      <h1 className="title">Orders</h1>
      <table className="tableOrder">
        <tbody>
          <tr className="trTitleOrder">
            <th>Id</th>
            <th>Customer</th>
            <th>Total</th>
            {/* <th>Payment</th> */}
            {/* <th>Status</th> */}
            <th>Action</th>
          </tr>
        </tbody>
        {order.map((order) => (
          <tbody key={order._id}>
            <tr className="trTitle">
              <td>{order._id.slice(0, 5)}...</td>
              <td>{order.customer}</td>
              <td>${order.total}</td>
              <td>
                {/* {order.method === 0 ? <span>cash</span> : <span>paid</span>} */}
              </td>
              {/* <td>{status[order.status]}</td> */}
              <td>
                <button >
                  Next Stage
                </button>
              </td>
            </tr>
          </tbody>
        ))}
      </table>
    </div>
  </div>
  )
}

export default Admin