import React from 'react'
// import img from '../../../../public/image/image1.jpg' 

const Service = () => {
  return (
    <div >
    
          <>
  {/* Hero */}
  <div className=" bg-[url('https://img.freepik.com/premium-vector/colorful-backgrounds-with-abstract-geometric-pattern-design_181182-39430.jpg?semt=ais_hybrid')] bg-cover h-screen">

    <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 py-24 space-y-8">
    
      {/* Title */}
      <div className="max-w-3xl text-center mx-auto">
      {/* <img src="https://www.shutterstock.com/shutterstock/videos/1094383495/thumb/7.jpg?ip=x480" alt=""/> */}

        <h1 className="block font-medium font-[Protest Revolution] mt-28 text-violet-800 text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
            Welcome ! Business Services
        </h1>
      </div>
      {/* End Title */}
      <div className="max-w-3xl text-center mx-auto">
        <p className="text-xl text-blue-600 font-[Oswald]">
          
Services are intangible products or activities provided by a business to meet the needs of customers, offering value through performance, expertise, or assistance rather than a physical product.
        </p>
      </div>
      {/* Buttons */}
      <div className="text-center">
        <a
          className="inline-flex justify-center items-center gap-x-3 text-center bg-gradient-to-tl from-blue-600 to-violet-600 shadow-lg shadow-transparent hover:shadow-blue-700/50 border border-transparent text-white text-sm font-medium rounded-full focus:outline-none focus:shadow-blue-700/50 py-3 px-6"
          href="#"
        >
          Get started
         
        </a>
      </div>
      {/* End Buttons */}
    </div>
  </div>
  {/* End Hero */}
</>






      <section className=" mt-9  z-10 font-serif">
        <div className="flex flex-col md:flex-row items-center max-w-8xl px-6  mx-auto">
        <img
              src="https://i.pinimg.com/736x/80/6b/0a/806b0a0a1cde5d64a3cf036db41f1b72.jpg"
              className="g-image"
            />
         
          <div className=" ml-28  w-full md:w-5/2 flex flex-col justify-center md:justify-end">
          <h1 className='m-2 text-6xl  text-pink-600 font-bold  '>Planning</h1>
          <p className=' text-lg text-gray-800 font-serif'>Planning helps guide you or your team toward achieving goals efficiently, with fewer surprises or setbacks along the way.</p>
         
          <a className=' flex justify-center mt-9  w-72 border-2 p-2 rounded-xl text-lg text-white bg-pink-700  hover:bg-pink-500'
          href='/browseplanning'>
            
            Click Here
            </a>
          </div>
          {/* <div className="w-full md:w-1/2 py-1">
            
          </div> */}
        </div>
      </section>


      <section className="mt-9 z-10 font-serif">
        <div className="flex flex-col md:flex-row items-center max-w-8xl px-6  mx-auto">

         
          <div className="w-full md:w-1/2 flex flex-col justify-center md:justify-end">
          <h1 className='m-2 ml-5  text-6xl  text-blue-800 font-bold  '>Managing</h1>
          <p className='ml-5 mr-8 text-lg text-gray-800 font-serif'>These services can be offered across various industries and sectors, including business, healthcare, technology, finance and more.</p>
          <a className=' flex justify-center mt-9  ml-4 w-72 border-2 p-2 rounded-xl text-lg text-white bg-blue-900  hover:bg-blue-500'
          href='/user/managing'>Click Here</a>
     
          </div>
          <div className="w-full md:w-1/2 py-1">
            <img
              src="https://png.pngtree.com/png-clipart/20240111/original/pngtree-business-office-cutout-flat-meeting-elements-png-image_14086304.png"
              className="g-image"
            />
          </div>
        </div>
      </section>


      <section className=" mt-9 z-10 font-serif">
        <div className="flex flex-col md:flex-row items-center max-w-8xl px-6  mx-auto">
        <img
              src="https://designtemplate.tech/thu-jan-12-2023-11-22-am45464.webp"
              className="g-image"
            />
         
          <div className="w-full md:w-5/2 flex flex-col  justify-center md:justify-end">
          <h1 className='m-2 ml-5  text-6xl  text-sky-500 font-bold  '>Launching</h1>
          <p className='ml-5 mr-3 text-lg text-gray-800 font-serif'>These services are designed to ensure a successful and smooth launch by planning, executing, and managing various aspects of the launch process.</p>
           <a className=' flex justify-center mt-9 ml-4 w-72 border-2 p-2 rounded-xl text-lg text-white bg-sky-500  hover:bg-sky-300'
           href='/user/launching'>Click Here</a>
     
          </div>
          {/* <div className="w-full md:w-1/2 py-1">
           
          </div> */}
        </div>
      </section>
      
    </div>
  )
}

export default Service