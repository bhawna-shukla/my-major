'use client'
import React from 'react'
import { EnvelopeIcon, LockClosedIcon } from '@heroicons/react/24/outline'
import { useFormik } from "formik";
import * as Yup from "yup";
import toast from "react-hot-toast";
import axios from "axios";
import { useRouter } from "next/navigation";
import useAppContext from '@/contex/appContex'

const LoginSchema = Yup.object().shape({


  email: Yup.string()
    .email("Please enter a valid email address")
    .required("Email is required"),

  password: Yup.string()
    .min(4, "Password must be at least 8 characters")
    .required("Password is required"),

});

const Login = () => {
  const {setLoggedIn,setCurrentUser} = useAppContext();
  const router = useRouter();

  const loginForm = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: (values, { resetForm }) => {
      console.log(values);
      
       axios .post("http://localhost:5000/user/authenticate", values)
        .then((response) => {
          console.log(response.status);
          localStorage.setItem('user',JSON.stringify(response.data))
          setLoggedIn(true)
          resetForm()
      
          toast.success("Login Successfully");
          router.push("/");
        })
        .catch((err) => {
          console.log(err);
          toast.error("Failed to Login");
        });
    },
    validationSchema: LoginSchema,
  });
  return (
    <div className='bg-slate-200'>


      <div className=" flex justify-center  ml-96 w-full max-w-xl px-20 py-20  sm:pb-16 sm-pt-16 lg:pb-24 xl:pb-32 xl:pt-10  ">
        <div className=" bg-white rounded shadow-2xl shadow-cyan-600 px-7 py-8">
          <h3 className="mb-4  font-sans-serief text-2xl  font-bold text-center text-blue-600 ">
            Welcome Back!
          </h3>


          <div>
            <img className='w-[740px] ' src="https://media.istockphoto.com/id/1281150061/vector/register-account-submit-access-login-password-username-internet-online-website-concept.jpg?s=612x612&w=0&k=20&c=9HWSuA9IaU4o-CK6fALBS5eaO1ubnsM08EOYwgbwGBo=" alt=""
            />            </div>

          <form onSubmit={loginForm.handleSubmit} >


            <div className="mb-1 sm:mb-2">
              <label
                htmlFor="email"
                className="inline-block mb-1 font-medium"
              >
                < EnvelopeIcon className="size-6 text-gray-700" />

              </label>
              {loginForm.errors.email && loginForm.touched.email ? (
                <div className="text-red-500 text-sm">
                  {loginForm.errors.email}
                </div>
              ) : null}
              <input

                placeholder="Enter your  Email   "

                required=""
                type="text"
                className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-400 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                id="email"

                value={loginForm.values.email}
                onChange={loginForm.handleChange}


              />
            </div>
            <div className="mb-1 sm:mb-2">
              <label
                htmlFor="password"
                className="inline-block mb-1 font-medium"
              >
                <LockClosedIcon className='size-6 text-gray-700' />

              </label>
              {loginForm.errors.password && loginForm.touched.password ? (
                <div className="text-red-500 text-sm">
                  {loginForm.errors.password}
                </div>
              ) : null}
              <input
                placeholder="Enter your  Password "
                required=""
                type="password"
                className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-400 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                id="password"
                onChange={loginForm.handleChange}
                value={loginForm.values.password}

              />
            </div>
            <div className="mt-4 mb-2 sm:mb-4">
              <button
                type="submit"
                className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-dark transition duration-200 rounded shadow-md bg-blue-600 hover:bg-blue-300 hover:text-blue-700 focus:shadow-outline focus:outline-none"
              >
                login
              </button>
            </div>
            <p className="text-xs text-indigo-600 sm:text-sm">

            </p>
          </form>
        </div>
      </div>
    </div>

  )
}

export default Login