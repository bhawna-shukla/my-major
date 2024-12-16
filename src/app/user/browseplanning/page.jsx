'use client'
import React, { useState, useEffect } from "react";
import Link from "next/link";
const Browseplanning = () => {
  const [product, setProduct] = useState([]);

  const fetchProduct = async () => {
    const res = await fetch("http://localhost:5000/service/getbycategory/planning");

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

      <div className="">
        <div className=" ml-9 max-w-sm bg-white border border-gray-00 rounded-lg shadow-md shadow-gray-400 hover:scale-105 hover:duration-75 ">

          <Link href={"/view/" + obj._id}
            className="rounded-t-lg"  >
            <img
              src={obj.image}
              alt="" />

            <div className="flex items-center justify-between ">
              <span class=" mt-4 mb-3 ml-2 text-2xl font-semibold font-[sans-serif] text-pink-700  ">{obj.filename} </span>
              <a href="#" class="mr-3 text-white bg-pink-700 hover:bg-pink-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-pink-600 dark:hover:bg-pink-900 dark:focus:ring-blue-800">Add to cart</a>
            </div>


          </Link>


        </div>

      </div>

    ));
  };













  return (
    <div className="grid sm:grid-cols-2  lg:grid-cols-3 gap-10 p-8  ">

      {displayProduct()}
    </div>
  )
};


export default Browseplanning