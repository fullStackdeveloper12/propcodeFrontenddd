import React from 'react'
import { IoLogoWhatsapp } from "react-icons/io";
import { FaPhoneAlt } from "react-icons/fa";
import { Link } from 'react-router-dom';
import BreadCrumb from '../../components/BreadCrumb/BreadCrumb.jsx';
import contactvideo from "/Video/contact.mp4"


const Project = () => {
  


  return (
    <>
    <div className='w-[100%] lg:h-[50vh] h-60  relative'>
            <video
                src={contactvideo}
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-full object-cover"
            />
            <h1 className='font-bold absolute top-[65%] left-[50%] text-white lg:text-6xl text-3xl transform -translate-x-[50%] -translate-y-[50%] tracking-[3px]'>
                PROJECTS
            </h1>
            <div className="absolute bottom-2 lg:left-[7%] left-[8%]">
            <BreadCrumb />
            </div>
        </div>
    <section className="w-full py-[50px]">
      <div className="lg:w-[85%] w-full mx-auto lg:mt-32 mt-8">
        <div className="w-11/12 lg:w-[100%]  shadow-xl mx-auto hover:scale-105 hover:shadow-2xl transition-all duration-300 ease-in-out delay-100 flex flex-col lg:flex-row p-4 rounded-[8px] justify-between border">
          <div className="w-full lg:w-[30%]  ">
            <Link to="/projects/antara-hills">
              <div className="rounded-xl overflow-hidden h-full p-2">
                <img
                  className="rounded-[8px] overflow-hidden h-full w-full"
                  loading="lazy"
                  src="https://www.amoghbuildtech.com/_next/image?url=%2Fapi%2Fimages%2F1724929116320-whiteland%20blissville...jpg&w=256&q=75"
                />
              </div>
            </Link>
          </div>
          <div className="w-full lg:w-[70%] p-4 flex flex-col gap-2 justify-evenly">
            <div className="flex justify-between gap-8 w-full items-center">
              <div className='w-full'>
              <Link to="/projects/antara-hills" className="">
                <p className="font-bold lg:text-5xl  text-4xl text-black">
                  Antalia Hills
                </p>
              </Link>
              </div>
              <div className="lg:block hidden">
                <img
                  className="w-full h-full"
                  src="https://www.amoghbuildtech.com/_next/image?url=%2Fapi%2Fimages%2F1724912261312-signature-global.jpg&w=256&q=75"
                />
              </div>
            </div>
            <div className="w-full flex lg:flex-row flex-col gap-6 lg:items-center justify-between">
              <p className="text-[#002a68] text-4xl font-bold">
                ₹ 2.02 - 2.63 Cr* onwards
              </p>
              <div className=" flex flex-row gap-3">
                <a className="">
                  <IoLogoWhatsapp className="text-green-600 text-3xl hover:scale-105" />
                </a>
                <a className="">
                  <FaPhoneAlt className="text-[#002a68] text-2xl hover:scale-105" />
                </a>
              </div>
            </div>
            <div className="space-y-1">
              <div className="text-2xl text-[#555555]">
                3 BHK Apartment
              </div>
              <div className="text-[#555555] text-2xl">
                Chattarpur, South Delhi, New Delhi
              </div>
              
            </div>
            <div>
                <h3 className='text-[#52a5be] text-sm mb-2 font-bold'>DESCRIPTION</h3>
                <Link to="/projects/antara-hills">
                <p className='text-sm text-[#555555] lg:text-base'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere molestiae eaque sunt blanditiis, nostrum saepe, laboriosam quidem ipsum vero deserunt laudantium hic maxime corrupti reprehenderit dolorum possimus ex veritatis tempora?Lorem ipsum dolor sit amet consectetur....</p>
                </Link>
              </div>
          </div>
        </div>      
      </div>


      <div className="lg:w-[85%] w-full mx-auto lg:mt-20 mt-8">
        <div className="w-11/12 lg:w-[100%]  shadow-xl mx-auto hover:scale-105 hover:shadow-2xl transition-all duration-300 ease-in-out delay-100 flex flex-col lg:flex-row p-4 rounded-[8px] justify-between border">
          <div className="w-full lg:w-[30%]  ">
            <a href="">
              <div className="rounded-xl overflow-hidden h-full p-2">
                <img
                  className="rounded-[8px] overflow-hidden h-full w-full"
                  loading="lazy"
                  src="https://www.amoghbuildtech.com/_next/image?url=%2Fapi%2Fimages%2F1724929116320-whiteland%20blissville...jpg&w=256&q=75"
                />
              </div>
            </a>
          </div>
          <div className="w-full lg:w-[70%] p-4 flex flex-col gap-2 justify-evenly">
            <div className="flex justify-between gap-8 w-full items-center">
              <div className='w-full'>
              <a className="">
                <p className="font-bold lg:text-5xl  text-4xl text-black">
                  Antalia Hills
                </p>
              </a>
              </div>
              <div className="lg:block hidden">
                <img
                  className="w-full h-full"
                  src="https://www.amoghbuildtech.com/_next/image?url=%2Fapi%2Fimages%2F1724912261312-signature-global.jpg&w=256&q=75"
                />
              </div>
            </div>
            <div className="w-full flex lg:flex-row flex-col gap-6 lg:items-center justify-between">
              <p className="text-[#002a68] text-4xl font-bold">
                ₹ 2.02 - 2.63 Cr* onwards
              </p>
              <div className=" flex flex-row gap-3">
                <a className="">
                  <IoLogoWhatsapp className="text-green-600 text-3xl hover:scale-105" />
                </a>
                <a className="">
                  <FaPhoneAlt className="text-[#002a68] text-2xl hover:scale-105" />
                </a>
              </div>
            </div>
            <div className="space-y-1">
              <div className="text-2xl text-[#555555]">
                3 BHK Apartment
              </div>
              <div className="text-[#555555] text-2xl">
                Chattarpur, South Delhi, New Delhi
              </div>
              
            </div>
            <div>
                <h3 className='text-[#52a5be] text-sm mb-2 font-bold'>DESCRIPTION</h3>
                <p className='text-sm text-[#555555] lg:text-base'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere molestiae eaque sunt blanditiis, nostrum saepe, laboriosam quidem ipsum vero deserunt laudantium hic maxime corrupti reprehenderit dolorum possimus ex veritatis tempora?Lorem ipsum dolor sit amet consectetur....</p>
              </div>
          </div>
        </div>      
      </div>


      <div className="lg:w-[85%] w-full mx-auto lg:mt-20 mt-8">
        <div className="w-11/12 lg:w-[100%]  shadow-xl mx-auto hover:scale-105 hover:shadow-2xl transition-all duration-300 ease-in-out delay-100 flex flex-col lg:flex-row p-4 rounded-[8px] justify-between border">
          <div className="w-full lg:w-[30%]  ">
            <a href="">
              <div className="rounded-xl overflow-hidden h-full p-2">
                <img
                  className="rounded-[8px] overflow-hidden h-full w-full"
                  loading="lazy"
                  src="https://www.amoghbuildtech.com/_next/image?url=%2Fapi%2Fimages%2F1724929116320-whiteland%20blissville...jpg&w=256&q=75"
                />
              </div>
            </a>
          </div>
          <div className="w-full lg:w-[70%] p-4 flex flex-col gap-2 justify-evenly">
            <div className="flex justify-between gap-8 w-full items-center">
              <div className='w-full'>
              <a className="">
                <p className="font-bold lg:text-5xl  text-4xl text-black">
                  Antalia Hills
                </p>
              </a>
              </div>
              <div className="lg:block hidden">
                <img
                  className="w-full h-full"
                  src="https://www.amoghbuildtech.com/_next/image?url=%2Fapi%2Fimages%2F1724912261312-signature-global.jpg&w=256&q=75"
                />
              </div>
            </div>
            <div className="w-full flex lg:flex-row flex-col gap-6 lg:items-center justify-between">
              <p className="text-[#002a68] text-4xl font-bold">
                ₹ 2.02 - 2.63 Cr* onwards
              </p>
              <div className=" flex flex-row gap-3">
                <a className="">
                  <IoLogoWhatsapp className="text-green-600 text-3xl hover:scale-105" />
                </a>
                <a className="">
                  <FaPhoneAlt className="text-[#002a68] text-2xl hover:scale-105" />
                </a>
              </div>
            </div>
            <div className="space-y-1">
              <div className="text-2xl text-[#555555]">
                3 BHK Apartment
              </div>
              <div className="text-[#555555] text-2xl">
                Chattarpur, South Delhi, New Delhi
              </div>
              
            </div>
            <div>
                <h3 className='text-[#52a5be] text-sm mb-2 font-bold'>DESCRIPTION</h3>
                <p className='text-sm text-[#555555] lg:text-base'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere molestiae eaque sunt blanditiis, nostrum saepe, laboriosam quidem ipsum vero deserunt laudantium hic maxime corrupti reprehenderit dolorum possimus ex veritatis tempora?Lorem ipsum dolor sit amet consectetur....</p>
              </div>
          </div>
        </div>      
      </div>


      <div className="lg:w-[85%] w-full mx-auto lg:mt-20 mt-8">
        <div className="w-11/12 lg:w-[100%]  shadow-xl mx-auto hover:scale-105 hover:shadow-2xl transition-all duration-300 ease-in-out delay-100 flex flex-col lg:flex-row p-4 rounded-[8px] justify-between border">
          <div className="w-full lg:w-[30%]  ">
            <a href="">
              <div className="rounded-xl overflow-hidden h-full p-2">
                <img
                  className="rounded-[8px] overflow-hidden h-full w-full"
                  loading="lazy"
                  src="https://www.amoghbuildtech.com/_next/image?url=%2Fapi%2Fimages%2F1724929116320-whiteland%20blissville...jpg&w=256&q=75"
                />
              </div>
            </a>
          </div>
          <div className="w-full lg:w-[70%] p-4 flex flex-col gap-2 justify-evenly">
            <div className="flex justify-between gap-8 w-full items-center">
              <div className='w-full'>
              <a className="">
                <p className="font-bold lg:text-5xl  text-4xl text-black">
                  Antalia Hills
                </p>
              </a>
              </div>
              <div className="lg:block hidden">
                <img
                  className="w-full h-full"
                  src="https://www.amoghbuildtech.com/_next/image?url=%2Fapi%2Fimages%2F1724912261312-signature-global.jpg&w=256&q=75"
                />
              </div>
            </div>
            <div className="w-full flex lg:flex-row flex-col gap-6 lg:items-center justify-between">
              <p className="text-[#002a68] text-4xl font-bold">
                ₹ 2.02 - 2.63 Cr* onwards
              </p>
              <div className=" flex flex-row gap-3">
                <a className="">
                  <IoLogoWhatsapp className="text-green-600 text-3xl hover:scale-105" />
                </a>
                <a className="">
                  <FaPhoneAlt className="text-[#002a68] text-2xl hover:scale-105" />
                </a>
              </div>
            </div>
            <div className="space-y-1">
              <div className="text-2xl text-[#555555]">
                3 BHK Apartment
              </div>
              <div className="text-[#555555] text-2xl">
                Chattarpur, South Delhi, New Delhi
              </div>
              
            </div>
            <div>
                <h3 className='text-[#52a5be] text-sm mb-2 font-bold'>DESCRIPTION</h3>
                <p className='text-sm text-[#555555] lg:text-base'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere molestiae eaque sunt blanditiis, nostrum saepe, laboriosam quidem ipsum vero deserunt laudantium hic maxime corrupti reprehenderit dolorum possimus ex veritatis tempora?Lorem ipsum dolor sit amet consectetur....</p>
              </div>
          </div>
        </div>      
      </div>
    </section>
  </>
  )
}

export default Project
