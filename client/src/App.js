import React, {useState, useEffect} from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/home/Home";
import "./app.scss"
import SingleProduct from "./components/singleProduct/SingleProduct";

function App() {
  return (
    <Router>
    <div className="container">
      <Navbar />
      <Routes>
          
            <Route path="/" element={<Home />} />
            <Route path="/products/:id" element={<SingleProduct />} />

      
    
      </Routes>
    </div>
    {/* <ToastContainer /> */}
  </Router>
  );
}

export default App;
