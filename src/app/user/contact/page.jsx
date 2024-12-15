"use client"
import React from 'react'
import { useFormik } from "formik";
import * as Yup from "yup";
import toast from "react-hot-toast";
import axios from "axios";
import { useRouter } from "next/navigation";


const ContactSchema = Yup.object().shape({
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
  const contactForm = useFormik({
    initialValues: {
      firstname: "",
      lastname: "",
      email: "",
      phone_number: "",
      detail: "",

    },
    onSubmit: (values, { resetForm }) => {
      console.log(values);
      axios
        .post("http://localhost:5000/contact/add", values)
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
    validationSchema: ContactSchema,
  });

  return (
    <div className='bg-slate-300'>
      <>
        {/* Contact Us */}
        <div className="max-w-[85rem] shadow-2xl shadow-blue-800 px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
          <div className="max-w-2xl lg:max-w-5xl mx-auto">
            <div className="text-center">
              <h1 className="text-6xl  font-[sans-serif] text-gray-800 sm:text-4xl">
                Contact us
              </h1>
              <p className="mt-1 text-2xl  text-blue-700">
                We'd love to talk about how we can help you.
              </p>
            </div>
            <div className="mt-12 grid items-center lg:grid-cols-2 gap-6 lg:gap-16">
              {/* Card */}
              <div className="flex flex-col border rounded-xl p-4 sm:p-6 lg:p-8">
                <h2 className="mb-8 text-2xl font-[Parkinsans] text-gray-800">
                  Fill in the form
                </h2>
                <form onSubmit={contactForm.handleSubmit}>
                  <div className="grid gap-4">
                    {/* Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="hs-firstname-contacts-1" className="sr-only">
                          First Name
                        </label>
                        {contactForm.errors.firstname && contactForm.touched.firstname ? (
                          <div className="text-red-500 text-sm">
                            {contactForm.errors.firstname}
                          </div>
                        ) : null}
                        <input
                          type="text"

                          id="firstname"
                          className="py-3 px-4 block w-full  border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
                          placeholder="First Name"
                          value={contactForm.values.firstname}
                          onChange={contactForm.handleChange}
                        />
                      </div>
                      <div>
                        <label htmlFor="hs-lastname-contacts-1" className="sr-only">
                          Last Name
                        </label>
                        {contactForm.errors.lastname && contactForm.touched.lastname ? (
                          <div className="text-red-500 text-sm">
                            {contactForm.errors.lastname}
                          </div>
                        ) : null}
                        <input
                          type="text"
                          
                          id="lastname"
                          className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
                          placeholder="Last Name"
                          value={contactForm.values.lastname}
                          onChange={contactForm.handleChange}
                        />
                      </div>
                    </div>
                    {/* End Grid */}
                    <div>
                      <label htmlFor="hs-email-contacts-1" className="sr-only">
                        Email
                      </label>
                      {contactForm.errors.email && contactForm.touched.email ? (
                        <div className="text-red-500 text-sm">
                          {contactForm.errors.email}
                        </div>
                      ) : null}
                      <input
                        type="text"
                       
                        id="email"
                        autoComplete="email"
                        className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm "
                        placeholder="Email"
                        value={contactForm.values.email}
                        onChange={contactForm.handleChange}
                      />
                    </div>
                    <div>
                      <label htmlFor="hs-phone-number-1" className="sr-only">
                        Phone Number
                      </label>
                      {contactForm.errors.phone_number && contactForm.touched.phone_number ? (
                        <div className="text-red-500 text-sm">
                          {contactForm.errors.phone_number}
                        </div>
                      ) : null}
                      <input
                        type="text"
                        
                        id="phone_number"
                        className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
                        placeholder="Phone Number"
                        value={contactForm.values.phone_number}
                        onChange={contactForm.handleChange}
                      />
                    </div>
                    <div>
                      <label htmlFor="hs-about-contacts-1" className="sr-only">
                        Details
                      </label>
                      {contactForm.errors.detail && contactForm.touched.detail ? (
                        <div className="text-red-500 text-sm">
                          {contactForm.errors.detail}
                        </div>
                      ) : null}
                      <input
                        id="detail"
                      
                         className="py-3 px-4 block w-full border-gray-600 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
                        placeholder="write the message"
                        
                        value={contactForm.values.detail}
                        onChange={contactForm.handleChange}
                      />
                    </div>
                  </div>
                  {/* End Grid */}
                  <div className="mt-4 grid">
                    <button
                      type="submit"
                      className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
                    >
                      Send inquiry
                    </button>
                  </div>
                  <div className="mt-3 text-center">
                    <p className="text-sm text-gray-500">
                      We'll get back to you in 1-2 business days.
                    </p>
                  </div>
                </form>
              </div>
              {/* End Card */}
              <div className="divide-y divide-gray-200">
                <img src='https://cdn3d.iconscout.com/3d/premium/thumb/customer-service-3d-illustration-download-in-png-blend-fbx-gltf-file-formats--helpline-support-digital-marketing-pack-business-illustrations-4379020.png' alt='' />
                {/* Icon Block */}
                {/* <div className="flex gap-x-7 py-6">
            <svg
              className="shrink-0 size-6 mt-1.5 text-gray-800"
              xmlns="http://www.w3.org/2000/svg"
              width={24}
              height={24}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx={12} cy={12} r={10} />
              <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
              <path d="M12 17h.01" />
            </svg>
            <div className="grow">
              <h3 className="font-semibold text-gray-800">Knowledgebase</h3>
              <p className="mt-1 text-sm text-gray-500">
                We're here to help with any questions or code.
              </p>
              <a
                className="mt-2 inline-flex items-center gap-x-2 text-sm font-medium text-gray-600 hover:text-gray-800 focus:outline-none focus:text-gray-800"
                href="#"
              >
                Contact support
                <svg
                  className="shrink-0 size-2.5 transition ease-in-out group-hover:translate-x-1 group-focus:translate-x-1"
                  width={16}
                  height={16}
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M0.975821 6.92249C0.43689 6.92249 -3.50468e-07 7.34222 -3.27835e-07 7.85999C-3.05203e-07 8.37775 0.43689 8.79749 0.975821 8.79749L12.7694 8.79748L7.60447 13.7596C7.22339 14.1257 7.22339 14.7193 7.60447 15.0854C7.98555 15.4515 8.60341 15.4515 8.98449 15.0854L15.6427 8.68862C16.1191 8.23098 16.1191 7.48899 15.6427 7.03134L8.98449 0.634573C8.60341 0.268455 7.98555 0.268456 7.60447 0.634573C7.22339 1.00069 7.22339 1.59428 7.60447 1.9604L12.7694 6.92248L0.975821 6.92249Z"
                    fill="currentColor"
                  />
                </svg>
              </a>
            </div>
          </div> */}
                {/* End Icon Block */}
                {/* Icon Block */}
                {/* <div className="flex gap-x-7 py-6">
            <svg
              className="shrink-0 size-6 mt-1.5 text-gray-800"
              xmlns="http://www.w3.org/2000/svg"
              width={24}
              height={24}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M14 9a2 2 0 0 1-2 2H6l-4 4V4c0-1.1.9-2 2-2h8a2 2 0 0 1 2 2v5Z" />
              <path d="M18 9h2a2 2 0 0 1 2 2v11l-4-4h-6a2 2 0 0 1-2-2v-1" />
            </svg>
            <div className="grow">
              <h3 className="font-semibold text-gray-800">FAQ</h3>
              <p className="mt-1 text-sm text-gray-500">
                Search our FAQ for answers to anything you might ask.
              </p>
              <a
                className="mt-2 inline-flex items-center gap-x-2 text-sm font-medium text-gray-600 hover:text-gray-800 focus:outline-none focus:text-gray-800"
                href="#"
              >
                Visit FAQ
                <svg
                  className="shrink-0 size-2.5 transition ease-in-out group-hover:translate-x-1 group-focus:translate-x-1"
                  width={16}
                  height={16}
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M0.975821 6.92249C0.43689 6.92249 -3.50468e-07 7.34222 -3.27835e-07 7.85999C-3.05203e-07 8.37775 0.43689 8.79749 0.975821 8.79749L12.7694 8.79748L7.60447 13.7596C7.22339 14.1257 7.22339 14.7193 7.60447 15.0854C7.98555 15.4515 8.60341 15.4515 8.98449 15.0854L15.6427 8.68862C16.1191 8.23098 16.1191 7.48899 15.6427 7.03134L8.98449 0.634573C8.60341 0.268455 7.98555 0.268456 7.60447 0.634573C7.22339 1.00069 7.22339 1.59428 7.60447 1.9604L12.7694 6.92248L0.975821 6.92249Z"
                    fill="currentColor"
                  />
                </svg>
              </a>
            </div>
          </div> */}
                {/* End Icon Block */}
                {/* Icon Block */}
                {/* <div className=" flex gap-x-7 py-6">
            <svg
              className="shrink-0 size-6 mt-1.5 text-gray-800"
              xmlns="http://www.w3.org/2000/svg"
              width={24}
              height={24}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="m7 11 2-2-2-2" />
              <path d="M11 13h4" />
              <rect width={18} height={18} x={3} y={3} rx={2} ry={2} />
            </svg>
            <div className="grow">
              <h3 className="font-semibold text-gray-800">Developer APIs</h3>
              <p className="mt-1 text-sm text-gray-500">
                Check out our development quickstart guide.
              </p>
              <a
                className="mt-2 inline-flex items-center gap-x-2 text-sm font-medium text-gray-600 hover:text-gray-800 focus:outline-none focus:text-gray-800"
                href="#"
              >
                Contact sales
                <svg
                  className="shrink-0 size-2.5 transition ease-in-out group-hover:translate-x-1 group-focus:translate-x-1"
                  width={16}
                  height={16}
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M0.975821 6.92249C0.43689 6.92249 -3.50468e-07 7.34222 -3.27835e-07 7.85999C-3.05203e-07 8.37775 0.43689 8.79749 0.975821 8.79749L12.7694 8.79748L7.60447 13.7596C7.22339 14.1257 7.22339 14.7193 7.60447 15.0854C7.98555 15.4515 8.60341 15.4515 8.98449 15.0854L15.6427 8.68862C16.1191 8.23098 16.1191 7.48899 15.6427 7.03134L8.98449 0.634573C8.60341 0.268455 7.98555 0.268456 7.60447 0.634573C7.22339 1.00069 7.22339 1.59428 7.60447 1.9604L12.7694 6.92248L0.975821 6.92249Z"
                    fill="currentColor"
                  />
                </svg>
              </a>
            </div>
          </div> */}
                {/* End Icon Block */}
                {/* Icon Block */}
                {/* <div className=" flex gap-x-7 py-6">
            <svg
              className="shrink-0 size-6 mt-1.5 text-gray-800"
              xmlns="http://www.w3.org/2000/svg"
              width={24}
              height={24}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M21.2 8.4c.5.38.8.97.8 1.6v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V10a2 2 0 0 1 .8-1.6l8-6a2 2 0 0 1 2.4 0l8 6Z" />
              <path d="m22 10-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 10" />
            </svg>
            <div className="grow">
              <h3 className="font-semibold text-gray-800">
                Contact us by email
              </h3>
              <p className="mt-1 text-sm text-gray-500">
                If you wish to write us an email instead please use
              </p>
              <a
                className="mt-2 inline-flex items-center gap-x-2 text-sm font-medium text-gray-600 hover:text-gray-800 focus:outline-none focus:text-gray-800"
                href="#"
              >
                example@site.com
              </a>
            </div>
          </div> */}
                {/* End Icon Block */}
              </div>
            </div>
          </div>
        </div>
        {/* End Contact Us */}
      </>

    </div>
  )
}

export default Page