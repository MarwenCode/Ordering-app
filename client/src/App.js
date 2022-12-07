import React, {useState, useEffect} from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/home/Home";
import "./app.scss"
import SingleProduct from "./components/singleProduct/SingleProduct";
import Cart from './components/cart/Cart';
import Orders from './components/orders/Orders';
import Admin from './pages/admin/Admin';

function App() {
  return (
    <Router>
    <div className="container">
      <Navbar />
      <Routes>
          
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="/products/:id" element={<SingleProduct />} />
            <Route path="/orders/:id" element={<Orders />} />

      
    
      </Routes>
    </div>
    {/* <ToastContainer /> */}
  </Router>
  );
}

export default App;
