"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
// import { useParams, Link } from "react-router-dom";
// import classes from './template.module.css'

const Planning = () => {
  const [product, setProduct] = useState([]);

  const fetchProduct = async () => {
    const res = await fetch("http://localhost:5000/services/getbycategory/planning");

    console.log(res.status);

    const data = await res.json();
    console.log(data);
    if (res.status === 200) {
      // const data = await res.json();
      console.log(data);
      setProduct(data);
    }
  };
  useEffect(() => {
    fetchProduct();
  }, []);

  const displayProduct = () => {
    return product.map((obj) => (
      <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <Link 
         href={"/view/" + obj._id}>
        <img
          className="p-8 rounded-t-lg"
          src={obj.image}
          alt=""
        />
      </Link>
      <div className="px-5 pb-5">
        <Link
         href={"/view/" + obj._name}>
          <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
            Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport
          </h5>
        </Link>
        <a
            href="#"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Add to cart
          </a>
        
      </div>
    </div>
    
    ));
  };

  return (
    <div className="">
    <div className="container m-14  ">
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 p-8  ">
          {" "}
          {displayProduct()}{" "}
        </div>
        <section className="bg-white ">
  <div className="container px-6 py-10 mx-auto">
   
   
  </div>
</section>







       
      </div>
    </div>

    
  );
};







export default Planning;