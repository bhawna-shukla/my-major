"use client"
import React from 'react'

const Signup = () => {
  return (
    <div className=''>

<div className="flex w-full mt-24 max-w-sm mx-auto overflow-hidden bg-sky-500  rounded-lg shadow-lg shadow-blue-950 lg:max-w-4xl">
  <div
    className=" hidden bg-cover lg:block lg:w-1/2"
    style={{
      backgroundImage:
        'url("https://png.pngtree.com/png-vector/20220521/ourmid/pngtree-man-and-woman-using-smartphones-vector-png-image_4656602.png")'
    }}
  />
  <div className="w-full mt-7  px-6 py-8 md:px-8 lg:w-1/2">
    <div className="flex justify-center mx-auto">
      {/* <img
        className="w-auto h-7 sm:h-8"
        src="https://e7.pngegg.com/pngimages/549/560/png-clipart-computer-icons-login-scalable-graphics-email-accountability-blue-logo.png"
        alt=""
      /> */}
    </div>
    <p className="mt-3 text-xl font-sans font-bold text-center text-white ">
      Create your Account
    </p>
   
 
    <div className="mt-7">
      <label
        className="block mb-2 text-md font-medium font-serif text-white"
        htmlFor="LoggingEmailAddress"
      >
        First_Name
      </label>
      <input
        id="firstname"
        className="block w-full px-4 py-2 text-gray-900 bg-white border rounded-lg "
        type="text"
        placeholder='Enter your First Name'
      />
    </div>

    <div className="mt-2">
      <label
        className="block mb-2 text-md font-medium font-serif text-white"
        htmlFor="LoggingEmailAddress"
      >
        Last_Name
      </label>
      <input
        id="lastname"
        className="block w-full px-4 py-2 text-gray-900 bg-white border rounded-lg "
        type="text"
        placeholder='Enter your Last Name'
      />
    </div>
    <div className="mt-2">
      <label
        className="block mb-2 text-md  font-medium font-serif text-white"
        htmlFor="LoggingEmailAddres"
      >
        Email_Address
      </label>
      <input
        id="email"
        className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg "
        type="email"
        placeholder='Enter your Email'
      />
    </div>
    <div className="mt-4">
     
        <label
          className="block mb-2 text-md  font-serif text-white "
          htmlFor="loggingPassword"
        >
          Password
        </label>
       
    
      <input
        id="password"
        className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg "
        type="password"
      />
    </div>
    <div className="mt-6">
      <button className="w-full px-6 py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-800 rounded-lg hover:bg-blue-500 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-50">
        Sign In
      </button>
    </div>
    {/* <div className="flex items-center justify-between mt-4">
      <span className="w-1/5 border-b dark:border-gray-600 md:w-1/4" />
      <a
        href="#"
        className="text-xs text-gray-500 uppercase dark:text-gray-400 hover:underline"
      >
        or sign up
      </a>
      <span className="w-1/5 border-b dark:border-gray-600 md:w-1/4" />
    </div> */}
  </div>
</div>

    </div>
  )
}

export default Signup