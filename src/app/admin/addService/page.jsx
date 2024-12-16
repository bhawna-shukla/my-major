"use client";
import React from "react";
import { useFormik } from "formik";
import toast from "react-hot-toast";
import axios from 'axios'

const AddService = () => {

  const productForm = useFormik({

    initialValues: {
      name: "",
      content:"",
      image: " ",
      servicecategory: "",
      description: "",
      

    },
    onSubmit: (values, { resetForm }) => {
      console.log(values);
      axios
        .post("http://localhost:5000/service/add", values)
        .then((response) => {
          console.log(response.status);
          resetForm();
          toast.success("Product Added Successfully");
        })
        .catch((err) => {
          console.log(err);
          toast.error("Failed to add Product");
        });
    },
  });
  return (
    <div>
      <div className=" mx-auto max-w-xl py-9 lg:px-24 border rounded-lg shadow-sm mt-2 mb-2">
        <h1 className="  text-3xl font-semibold text-gray-700 text-center mb-2 ">
          Add Services
        </h1>

        <form onSubmit={productForm.handleSubmit}>
          <div className=" shadow-lg px-8 border border-black rounded-lg pt-5 pb-6 mb-2  flex flex-col">
            <div className="-mx-4 md:flex mb-2">
              <div className="md:w-1/2 px-3 mb-6 md:mb-0">
                <label
                  className=" text-xl font-semibold mb-2"
                  htmlFor="company"
                >
                 Name
                </label>
                {productForm.errors.name && productForm.touched.name ? (
                  <div className="text-red-500 text-sm">
                    {productForm.errors.name}
                  </div>
                ) : null}

                <input
                  className="w-full bg-gray-100 border rounded py-3 px-4 mb-3"
                  type="text"
                  placeholder=""
                  id="name"
                  onChange={productForm.handleChange}
                  value={productForm.values.name}
                />
                
              </div>
              <div className="md:w-1/2 px-3">
                <label className=" text-xl font-semibold mb-2" htmlFor="title">
                 Content
                </label>
                {productForm.errors.content && productForm.touched.content ? (
                  <div className="text-red-500 text-sm">
                    {productForm.errors.title}
                  </div>
                ) : null}

                <input
                  className="w-full bg-gray-100 border rounded py-3 px-4 mb-3"

                  type="text"
                  placeholder=""
                  id="content"
                  onChange={productForm.handleChange}
                  value={productForm.values.content}
                />
              </div>
              
            </div>
            <div className="-mx-4 md:flex mb-6">
              <div className="md:w-full px-3">
                <label
                  className=" text-xl font-semibold mb-2"
                  htmlFor="application-link"
                >
                 Service Category
                </label>
                {productForm.errors.servicecategory &&
                productForm.touched.servicecategory ? (
                  <div className="text-red-500 text-sm">
                    {productForm.errors.servicecategory}
                  </div>
                ) : null}
                <input
                  className="w-full bg-gray-100 border rounded py-3 px-4 mb-3"
                  type="text"
                  placeholder=""
                  id="servicecategory"
                  onChange={productForm.handleChange}
                  value={productForm.values.servicecategory}
                />
              </div>
              <div className="-mx-4 md:flex mb-6">
              <div className="md:w-full px-3">
                <label
                  className=" text-xl font-semibold mb-2"
                  htmlFor="application-link"
                >
                  Description
                </label>
                {productForm.errors.description &&
                productForm.touched.description ? (
                  <div className="text-red-500 text-sm">
                    {productForm.errors.description}
                  </div>
                ) : null}
                <input
                  className="w-full bg-gray-100 border rounded py-3 px-4 mb-3"
                  type="text"
                  placeholder=""
                  id="description"
                  onChange={productForm.handleChange}
                  value={productForm.values.description}
                />
              </div>
            </div>
            </div>
           
           
            
            <div>
              <label
                style={{ fontFamily: "" }}
                htmlFor="category"
                className="text-xl font-semibold mb-2"
              >
                Image URL
              </label>
              <div className="mt-2">
                <input  
                  id="image"
                  value={productForm.values.image}
                  onChange={productForm.handleChange}
                  type="text"
                  autoComplete="category"
                  required=""
                  className=" w-full bg-gray-100 border rounded py-3 px-4 mb-3"
                />
              </div>
            </div>
            
            <button
              type="submit"
              className="py-3 px-4 inline-flex justify-center items-center gap-x-2 text-lg font-semibold rounded-lg border border-transparent bg-blue-300 text-white hover:bg-sky-500 "
            >
              Add Product
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddService;