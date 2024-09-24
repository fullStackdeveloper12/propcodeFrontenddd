import React, { useState } from 'react'
import { FaBuilding, FaClock, FaLocationDot, FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { RiComputerLine, RiInstagramFill } from "react-icons/ri";
import { FaYoutube } from "react-icons/fa";
import { FaSquareFacebook } from "react-icons/fa6";
import { IoLogoWhatsapp } from "react-icons/io";
import BreadCrumb from '../../components/BreadCrumb/BreadCrumb.jsx';
import { PhoneInput } from 'react-international-phone';
import 'react-international-phone/style.css';
import contactvideo from "/Video/contact.mp4"



const ContactUs = () => {
    const [phone, setPhone] = useState('');

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
            <h1 className='font-bold text-center absolute top-[65%] left-[50%] text-white lg:text-6xl text-3xl transform -translate-x-[50%] -translate-y-[50%] tracking-[3px]'>
                CONTACT US
            </h1>
            <div className="absolute bottom-2 lg:left-[7%] left-[8%]">
            <BreadCrumb />
            </div>

        </div>

        <div className="lg:w-[90%]   mx-auto flex items-center justify-center lg:flex-row flex-col lg:mt-28 mt-8 ">
        <div className="lg:w-[55%] w-[90%] mx-auto lg:p-0 p-3">
          <div className="lg:p-4 p-2 shadow-lg lg:w-[90%] mx-auto flex flex-col lg:gap-6 gap-2 mb-16">
            <h2 className="text-center text-[#082e62] lg:text-5xl text-3xl font-bold">
              Get in touch-were here to help
            </h2>
            <p className="text-sm text-[#555555] lg:text-base">
              Were here to help! Whether you have questions, feedback, or just
              want to say hello, feel free to reach out. Our team is deligated
              to providing promt and friendly support. Simply fill want to say
              hello, feel free to reach out. Our team is deligated to providing
              promt and friendly support. Simply fill
            </p>

            <div>
              <div className="flex items-center mb-4">
                <div className="text-blue-500">
                  <FaLocationDot className="text-[#52abbe]" />
                </div>
                <div className="ml-4">
                  <h4 className="font-bold text-lg text-[#082e62] ">Address</h4>
                  <p className="text-sm text-[#555555] lg:text-base">
                    Office no 412, Vipul Business Park, Sector 48, Gurugram,
                    Haryana, 122001
                  </p>
                </div>
              </div>
              <div className="flex items-center mb-4">
                <div className="text-blue-500">
                  <FaPhoneAlt className="text-[#52abbe]" />
                </div>
                <div className="ml-4">
                  <h4 className="font-bold text-lg text-[#082e62] ">Phone No.</h4>
                  <p className="text-sm text-[#555555] lg:text-base">9999999999</p>
                </div>
              </div>
              <div className="flex items-center mb-4">
                <div className="text-blue-500">
                  <MdEmail className="text-[#52abbe]" />
                </div>
                <div className="ml-4">
                  <h4 className="font-bold text-lg text-[#082e62] ">E-mail</h4>
                  <p className="text-gray-600">propcodes@gmail.com</p>
                </div>
              </div>
            </div>
            <div className="h-[2px] bg-[#999]"></div>
            <div className="space-y-2 space-x-6">
              <h3 className="font-bold text-2xl lg:text-3xl text-[#082e62] ">Follow Us :</h3>
              <div className="flex space-x-4 lg:text-4xl text-xl text-[#52abbe]">
                <FaSquareFacebook />
                <FaYoutube />
                <RiInstagramFill />
                <IoLogoWhatsapp />
              </div>
            </div>
          </div>
        </div>
        <div className="lg:w-[45%] lg:px-4">
          <div className="shadow-lg lg:w-[90%] mx-auto flex flex-col bg-[#52abbe] my-20 px-4 lg:px-0 lg:my-0">
            <div className="h-32 w-32 mx-auto rounded-full relative -mt-16 border-[6px] border-white overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1499856871958-5b9627545d1a"
                className="object-cover object-center h-32"
              />
            </div>
            <form className="flex flex-col gap-3 lg:px-8 px-3 lg:py-5 py-3">
              <h3 className="text-white text-xl text-center">
                Please enter your details
              </h3>

              <label></label>
              <input
                className="rounded outline-none p-2"
                placeholder="Enter your Name"
              />
              <label></label>
              <PhoneInput
                defaultCountry="in"
                value={phone}
                onChange={(phone) => setPhone(phone)}
              />
              <label></label>
              <input
                className="rounded outline-none p-2"
                placeholder="Enter your Email"
                type="email"
              />
              <label></label>
              <textarea
                placeholder="message"
                className="p-2 resize-none outline-none rounded-lg"
                rows="5"
              ></textarea>
              <label className="flex gap-2">
                <input type="checkbox" value="" className="text-center" /> 
                <p className='text-white'>
                I am
                agree with term & condition
                </p>
              </label>
              <input
                type="submit"
                value={"Call now"}
                className=" rounded py-2 text-white bg-blue-900 hover:border-bg-[#52abbe] hover:bg-[#082e6c] hover:text-white"
              />
            </form>

          </div>
        </div>
      </div>


      <div className="max-w-7xl mx-4 sm:mx-auto md:mx-auto lg:mx-auto xl:mx-auto  bg-white shadow-xl rounded-lg mb-16">
          <div className="rounded-t-lg  flex lg:flex-row flex-col gap-4">
            <div className="p-6 lg:w-[30%]">
              <h2 className="text-3xl font-semibold pb-4 text-[#082e62] ">
                Head Office Gurugram
              </h2>
              <div className="flex gap-2 items-center">
                <span>
                  <FaBuilding />
                </span>
                <p className="text-sm text-[#555555] lg:text-base mt-2">
                  Unit No 226 & 227, 2nd Floor,<br/> Suncity Success Towers, Golf
                  Course Ext. <br/> Road, Sector 65, Gurugram
                </p>
              </div>
              <div className="flex gap-2 items-center mt-4">
                <span>
                  <FaClock />
                </span>
                <time className="text-sm text-[#555555] lg:text-base">10:00 AM to 7:00 PM</time>
              </div>
            </div>
            <div className="flex lg:w-[70%] gap-2">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3508.8801749172653!2d77.03340377618728!3d28.42287227577999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d187579660c63%3A0x674a84fc35ac4661!2sVIPUL%20BUSINESS%20PARK%2C%20Central%20Park%20II%2C%20Sector%2048%2C%20Gurugram%2C%20Haryana%20122022!5e0!3m2!1sen!2sin!4v1725809432890!5m2!1sen!2sin"
                allowfullscreen="true"
                ar
                loading="lazy"
                className="block w-full p-4"
                referrerpolicy="no-referrer-when-downgrade"
                height="400"
              ></iframe>
            </div>
          </div>
        </div>
        </>
    )
}

export default ContactUs
