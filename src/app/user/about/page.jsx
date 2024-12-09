import React from 'react'

const About = () => {
  return (
    <div>
      <div className="relative isolate overflow-hidden shadow-black bg-gray-900 py-24 sm:py-32">
    <img
      src="https://img.freepik.com/free-photo/group-people-working-out-business-plan-office_1303-15779.jpg"
      alt=""
      className="absolute inset-0 -z-10 h-full w-full object-cover object-right md:object-center"
    />
    <div
      className="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl"
      aria-hidden="true"
    >
      <div
        className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"
        style={{
          clipPath:
            "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"
        }}
      />
    </div>
    <div
      className="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu"
      aria-hidden="true"
    >
      <div
        className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"
        style={{
          clipPath:
            "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"
        }}
      />
    </div>
    <div className=" mx-auto max-w-7xl px-6 lg:px-8">
      <div className="mx-auto max-w-2xl lg:mx-0">
        <h2 className="text-5xl font-semibold tracking-tight text-gray-900 sm:text-7xl">
          About Us
        </h2>
        <p className="mt-8 text-pretty text-lg font-medium text-gray-300 sm:text-xl/8">
        At hONUK, we are committed to nurturing the next generation of innovative startups and empowering entrepreneurs to turn their ideas into successful, sustainable businesses. Founded in 2024, our mission is to provide a collaborative environment that fosters creativity, growth, and success for emerging businesses in a wide range of industries.

Our vision is to be the leading hub for innovation, helping startups overcome challenges and achieve long-term success. We provide a comprehensive suite of services and resources tailored to support every stage of the startup journey, from ideation to scale-up.
        </p>
      </div>
      <div className="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none">
        <div className="grid grid-cols-1 gap-x-8 gap-y-6 text-base/7 font-semibold text-white sm:grid-cols-2 md:flex lg:gap-x-10">
          <a href="#">
            Open roles <span aria-hidden="true">→</span>
          </a>
          <a href="#">
            Internship program <span aria-hidden="true">→</span>
          </a>
          <a href="#">
            Our values <span aria-hidden="true">→</span>
          </a>
          <a href="#">
            Meet our leadership <span aria-hidden="true">→</span>
          </a>
        </div>
        <dl className="mt-16 grid grid-cols-1 gap-8 sm:mt-20 sm:grid-cols-2 lg:grid-cols-4">
          <div className="flex flex-col-reverse gap-1">
            <dt className="text-base/7 text-gray-300">Offices worldwide</dt>
            <dd className="text-4xl font-semibold tracking-tight text-white">
              12
            </dd>
          </div>
          <div className="flex flex-col-reverse gap-1">
            <dt className="text-base/7 text-gray-300">Full-time colleagues</dt>
            <dd className="text-4xl font-semibold tracking-tight text-white">
              300+
            </dd>
          </div>
          <div className="flex flex-col-reverse gap-1">
            <dt className="text-base/7 text-gray-300">Hours per week</dt>
            <dd className="text-4xl font-semibold tracking-tight text-white">
              40
            </dd>
          </div>
          <div className="flex flex-col-reverse gap-1">
            <dt className="text-base/7 text-gray-300">Paid time off</dt>
            <dd className="text-4xl font-semibold tracking-tight text-white">
              Unlimited
            </dd>
          </div>
        </dl>
      </div>
    </div>
  </div>



  
  </div>


  )
}

export default About



