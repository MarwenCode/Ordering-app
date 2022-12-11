import React, { useState, useEffect } from "react";
import Product from "../product/Product";
import "./products.scss"
import axios from "axios";

const Products = () => {
  const [products, setProducts] = useState([]);

    useEffect(() => {
      const fetchProducts = async () => {
        // const res = await axios.get("/products");
        const res = await axios.get("https://ordering-app-api.onrender.com/api/products");
        console.log(res);
        setProducts(res.data);
      };

      fetchProducts();
    }, []);

//fetch methode

//   useEffect(() => {
//     const fetchProducts = async () => {
//       const res = await fetch("/products");
//       const data = await res.json();
//       setProducts(data);
//     };
//     fetchProducts();
//   }, []);

//   console.log(products);

  return (
    <div className="products">
      <h1 className="title">THE BEST PIZZA IN TOWN</h1>
      <p className="desc">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut blandit arcu
        in pretium molestie. Interdum et malesuada fames acme. Lorem ipsum dolor
        sit amet, consectetur adipiscing elit.
      </p>
      <div className="wrapper">
        {products.map((pizza, index) => (
          <Product key={index} pizza={pizza} />
        ))}
      </div>
    </div>
  );
};

export default Products;
