import React from "react";
import Image from 'next/image'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import b_1 from '../public/assets/images/bussiness/b-1.jpg'
import b_2 from '../public/assets/images/bussiness/b-2.jpg'
import b_3 from '../public/assets/images/bussiness/b-3.jpg'
import b_4 from '../public/assets/images/bussiness/b-4.jpg'
 
const BusinessServices = () => {
  var items = [{
    name: "Tech Innovation",
    image: { b_1 },
    head: "Analytics"
  },
  {
    name: "Data and Analytics",
    image: "data:image/jpeg;base64,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",
    head: "Analytics"

  }, {
    name: "Finance consulting",
    image: "data:image/jpeg;base64,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",
    head: "Finance"

  }, {
    name: "Tech Innovation",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTF9J1yXaf7ea6TM7dGD6iVe8aM5rmqMDyCkQ&s",
    head: "Analytics"

  }
  ];

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
      partialVisibilityGutter: 40
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="py-20">
      <div className="container relative">
        <div className="relative">
          <Carousel responsive={responsive}
            swipeable={false}
            draggable={false}
            showDots={false}
            ssr={true} // means to render carousel on server-side.
            infinite={true}
            autoPlaySpeed={3000}
            autoPlay={true}
            keyBoardControl={true}
            customTransition="all 1.5s"
            transitionDuration={500}
            containerClass="carousel-container"
            removeArrowOnDeviceType={["mobile"]}
            dotListClass="custom-dot-list-style"
            // partialVisible={false}
            itemClass="carousel-item"
          >
            <div className=" bg-white border border-gray-200 rounded-lg shadow relative flex flex-col justify-center items-center">
              <div className="relative">
                <div className="w-full h-[280px]">
                  <Image className="rounded-t-lg h-full w-full object-cover" src={b_1} alt="Not found" />
                </div>
                <p className="text-white bg-gray-800 rounded-full py-1 md:px-5 px-3 absolute md:top-7 top-2 right-1 text-xs md:text-lg md:right-5 w-fit lowercase md:uppercase">Analytics</p>
              </div>
              <div className="p-5">
                <a href="#">
                  <h5 className="mb-2 md:text-2xl text-lg font-bold tracking-tight text-gray-900 text-center ">Tech Innovation</h5>
                </a>
                <p className="mb-3 font-normal text-gray-700 border-b-2 border-gray-300 my-5 dark:text-gray-400 text-center text-xs pb-5 md:text-lg">Here are the biggest enterprise technology acquisitions of 2021  order.</p>
                <div className="items-center w-full justify-center flex flex-col mt-5">
                  <a href="#" className="inline-flex  px-3 py-2 text-xs lowercase md:text-sm md:uppercase font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 ">
                    EXPLORE SERVICES
                    <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2 md:mt-1 mt:0.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            <div className=" bg-white border border-gray-200 rounded-lg shadow relative flex flex-col justify-center items-center">
              <div className="relative">
                <div className="w-full h-[280px]">
                  <Image className="rounded-t-lg h-full w-full object-cover" src={b_2} alt="Not found" />
                </div>
                <p className="text-white bg-gray-800 rounded-full py-1 md:px-5 px-3 absolute md:top-7 top-2 right-1 text-xs md:text-lg md:right-5 w-fit lowercase md:uppercase">Analytics</p>
              </div>
              <div className="p-5">
                <a href="#">
                  <h5 className="mb-2 md:text-2xl text-lg font-bold tracking-tight text-gray-900 text-center ">Data and Analytics</h5>
                </a>
                <p className="mb-3 font-normal text-gray-700 border-b-2 border-gray-300 my-5 dark:text-gray-400 text-center text-xs pb-5 md:text-lg">Here are the biggest enterprise technology acquisitions of 2021  order.</p>
                <div className="items-center w-full justify-center flex flex-col mt-5">
                  <a href="#" className="inline-flex  px-3 py-2 text-xs lowercase md:text-sm md:uppercase font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 ">
                    EXPLORE SERVICES
                    <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2 md:mt-1 mt:0.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            <div className=" bg-white border border-gray-200 rounded-lg shadow relative flex flex-col justify-center items-center">
              <div className="relative">
                <div className="w-full h-[280px]">
                  <Image className="rounded-t-lg h-full w-full object-cover" src={b_3} alt="Not found" />
                </div>
                <p className="text-white bg-gray-800 rounded-full py-1 md:px-5 px-3 absolute md:top-7 top-2 right-1 text-xs md:text-lg md:right-5 w-fit lowercase md:uppercase">Analytics</p>
              </div>
              <div className="p-5">
                <a href="#">
                  <h5 className="mb-2 md:text-2xl text-lg font-bold tracking-tight text-gray-900 text-center ">Finance consulting</h5>
                </a>
                <p className="mb-3 font-normal text-gray-700 border-b-2 border-gray-300 my-5 dark:text-gray-400 text-center text-xs pb-5 md:text-lg">Here are the biggest enterprise technology acquisitions of 2021  order.</p>
                <div className="items-center w-full justify-center flex flex-col mt-5">
                  <a href="#" className="inline-flex  px-3 py-2 text-xs lowercase md:text-sm md:uppercase font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 ">
                    EXPLORE SERVICES
                    <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2 md:mt-1 mt:0.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            <div className=" bg-white border border-gray-200 rounded-lg shadow relative flex flex-col justify-center items-center">
              <div className="relative">
                <div className="w-full h-[280px]">
                  <Image className="rounded-t-lg h-full w-full object-cover" src={b_4} alt="Not found" />
                </div>
                <p className="text-white bg-gray-800 rounded-full py-1 md:px-5 px-3 absolute md:top-7 top-2 right-1 text-xs md:text-lg md:right-5 w-fit lowercase md:uppercase">Analytics</p>
              </div>
              <div className="p-5">
                <a href="#">
                  <h5 className="mb-2 md:text-2xl text-lg font-bold tracking-tight text-gray-900 text-center ">Tech Innovation</h5>
                </a>
                <p className="mb-3 font-normal text-gray-700 border-b-2 border-gray-300 my-5 dark:text-gray-400 text-center text-xs pb-5 md:text-lg">Here are the biggest enterprise technology acquisitions of 2021  order.</p>
                <div className="items-center w-full justify-center flex flex-col mt-5">
                  <a href="#" className="inline-flex  px-3 py-2 text-xs lowercase md:text-sm md:uppercase font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 ">
                    EXPLORE SERVICES
                    <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2 md:mt-1 mt:0.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
           
          </Carousel>
          <div className="">
            <div className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 mb-10 absolute w-full top-[0px]">
              <div>
                <h1 className=" md:text-[40px] py-1 md:py-3 text-2xl font-semibold text-gray-800 w-[400px] ">
                  UnderStanding the
                </h1>
                <h1 className=" md:text-[40px] text-2xl font-semibold text-gray-800 w-[400px]">
                  bussiness services.
                </h1>
              </div>
              <div>
                <p className="text-gray-400 w-[375px] md:w-[400px] py-2 font-normal text-base">
                  We strive to develop real-world web solutions that are ideal for small
                  to large projects with bespoke your custom project requirements.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BusinessServices;
