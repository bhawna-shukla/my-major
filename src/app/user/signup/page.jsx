'use client'
import React from 'react'
import { useFormik } from "formik";
import * as Yup from "yup";
import toast from "react-hot-toast";
import axios from "axios";
import { useRouter } from "next/navigation";
import { UserCircleIcon} from '@heroicons/react/24/outline'



const SignupSchema = Yup.object().shape({
  firstname: Yup.string()
    .min(2, "Name must be at least 2 characters")
    .max(50, "Name must be at most 50 characters")
    .required("Name is required"),

  lastname: Yup.string()
    .min(2, "Name must be at least 2 characters")
    .max(50, "Name must be at most 50 characters")
    .required("Name is required"),

  email: Yup.string()
    .email("Please enter a valid email address")
    .required("Email is required"),

});


const Page = () => {
  const router = useRouter();
  const signupForm = useFormik({
    initialValues: {
      firstname: "",
      lastname: "",
      email: "",
      password:"",

    },
    onSubmit: (values, { resetForm }) => {
      console.log(values);
      axios
        .post("http://localhost:5000/user/add", values)
        .then((response) => {
          console.log(response.status);
          resetForm();
          toast.success("User Added Successfully");
          router.push("/user/login");
        })
        .catch((err) => {
          console.log(err);
          toast.error("Failed to add User");
        });
    },
    validationSchema: SignupSchema,
  });

  return (




    <div  >




      <div className="flex w-full  mt-12 max-w-sm mx-auto overflow-hidden bg-sky-700  border border-gray-400 rounded-lg shadow-lg shadow-black lg:max-w-4xl">
        
        <div
          className="hidden bg-no-repeat bg-right-top  lg:block lg:w-1/2"
          style={{
            backgroundImage:
              'url("https://static.vecteezy.com/system/resources/thumbnails/011/345/227/small_2x/teenage-showing-how-to-sign-up-3d-cartoon-character-illustration-png.png")'
          }}
        />
        <div className="w-full px-6 py-8 md:px-8 lg:w-1/2">
        
          <UserCircleIcon className=' ml-28  size-28 text-white '/>
          
          
         <form onSubmit={signupForm.handleSubmit}>
          <div className="mt-4">
            <label
              className="block mb-2 text-md font-medium font-sans text-gray-600 dark:text-white "
              htmlFor="text"
            >
              First Name
            </label>
            {signupForm.errors.firstname && signupForm.touched.firstname ? (
                        <div className="text-red-500 text-sm">
                          {signupForm.errors.firstname}
                        </div>
                      ) : null}
            <input
              id="firstname"
              className="block w-full px-4 py-2 bg-transparent  border-b-2 rounded-lg  "
              type="text"

              value={signupForm.values.firstname}
              onChange={signupForm.handleChange}
            />
          </div>

          <div className="mt-4">
            <label
              className="block mb-2 text-md font-medium font-sans text-gray-600 dark:text-gray-200"
              htmlFor="text"
            >
              Last Name
            </label>

            {signupForm.errors.lastname && signupForm.touched.lastname ? (
                        <div className="text-red-500 text-sm">
                          {signupForm.errors.lastname}
                        </div>
                      ) : null}
            <input
              id="lastname"
              className="block w-full px-4 py-2 bg-transparent  border-b-2 rounded-lg  "
              type="text"
              value={signupForm.values.lastname}
              onChange={signupForm.handleChange}
            />
          </div>

          <div className="mt-4">
            <label
              className="block mb-2 text-md font-medium font-sans text-gray-600 dark:text-gray-200"
              htmlFor="text"
            >
              Email
            </label>

            {signupForm.errors.email && signupForm.touched.email ? (
                        <div className="text-red-500 text-sm">
                          {signupForm.errors.email}
                        </div>
                      ) : null}
            <input
              id="email"
              className="block w-full px-4 py-2 bg-transparent  border-b-2 rounded-lg  "
              type="email"
              value={signupForm.values.email}
              onChange={signupForm.handleChange}
            />
          </div>
          <div className="mt-4">
            <div className="flex justify-between">
              <label
                className="block mb-2 text-md font-medium font-sans text-white"
                htmlFor="password"
              >
                Password
              </label>
              {signupForm.errors.password && signupForm.touched.password ? (
                        <div className="text-red-500 text-sm">
                          {signupForm.errors.password}
                        </div>
                      ) : null}
            <input
              id="password"
              className="block w-full px-4 py-2 text-gray-700 bg-transparent  border-b-2 rounded-lg  "
              type="password"
              value={signupForm.values.password}
              onChange={signupForm.handleChange}
            />
             
            </div>
          </div>
          <div className="mt-6">
            <button className="w-full px-6 py-3 text-lg font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-800 rounded-lg hover:bg-gray-500 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-50">
              Sign Up
            </button>
          </div>
          <div className="flex items-center justify-between mt-4">
            <span className="w-1/5 border-b dark:border-gray-600 md:w-1/4" />
            <a
              href="#"
              className="text-xs text-gray-500 uppercase dark:text-gray-400 hover:underline"
            >
              or sign In
            </a>
            <span className="w-1/5 border-b dark:border-gray-600 md:w-1/4" />
          </div>
      </form>
        </div>
      </div>



    </div>

  )
}

export default Page