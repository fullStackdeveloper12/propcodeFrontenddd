import React from "react";
import BreadCrumb from "../../../components/BreadCrumb/BreadCrumb.jsx";
import blogvideo from "/Video/blog.mp4";
import DOMPurify from "dompurify";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

const SingleBlog = () => {
  const query = new URLSearchParams(window.location.search);

  //   const id = query.get("id");
  const name = query.get("name");
  const heading = query.get("heading");
  const readingTime = query.get("readingTime");
  const date = query.get("date");
  const image1 = query.get("image1");
  //   const paragraph = query.get("paragraph");
  const description = query.get("description");

  return (
    <>
    <div className="w-[100%] lg:h-[50vh] h-60  relative">
        <video
          src={blogvideo}
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        />
        <h1 className="font-bold absolute top-[65%] left-[50%] text-white lg:text-6xl text-3xl transform -translate-x-[50%] -translate-y-[50%] tracking-[3px]">
          BLOGS
        </h1>
        <div className="absolute bottom-2 lg:left-[7%] left-[8%]">
          <BreadCrumb />
        </div>
      </div>
    <div className="w-[90%] sm:w-[85%] lg:w-[85%] p-5 mx-auto">
      
      <div className="relative flex flex-col lg:flex-row gap-10 mt-10">
        <div className="w-full lg:w-1/4 p-5 lg:sticky top-10 lg:top-36">
          <div className="flex flex-col gap-5 items-center">
            <p className="text-gray-600 mb-2 font-sans font-semibold">SHARE</p>
            <div className="w-px h-16 bg-gray-400 mb-2"></div>
            <div className="flex flex-row lg:flex-col space-y-0 lg:space-y-4 space-x-4 lg:space-x-0">
              <a
                href="#"
                className="text-gray-500 transition-all duration-500 hover:bg-black hover:text-white border p-4 rounded-full"
              >
                <FaFacebookF size={24} />
              </a>
              <a
                href="#"
                className="text-gray-500 transition-all duration-500 hover:bg-black hover:text-white border p-4 rounded-full"
              >
                <FaTwitter size={24} />
              </a>
              <a
                href="#"
                className="text-gray-500 transition-all duration-500 hover:bg-black hover:text-white border p-4 rounded-full"
              >
                <FaInstagram size={24} />
              </a>
              <a
                href="#"
                className="text-gray-500 transition-all duration-500 hover:bg-black hover:text-white border p-4 rounded-full"
              >
                <FaLinkedinIn size={24} />
              </a>
            </div>
          </div>
        </div>

        <div className="w-full lg:w-3/4 p-5">
          <h4 className="border flex items-center justify-center bg-black text-white font-semibold p-2 rounded-full w-40">
            {name}
          </h4>
          <h2 className="mt-5 text-2xl sm:text-3xl md:text-4xl font-bold break-words">
            {heading}
          </h2>
          <p className="mt-5 text-sm sm:text-base">
            {readingTime} | {new Date(date).toLocaleDateString()}
          </p>
          <img
            src={image1}
            alt={name}
            className="w-full h-48 sm:h-72 md:h-96 mt-5 rounded-lg object-cover"
          />
          <div className="mt-5">
            <div
              className="blog-content mt-4 text-sm sm:text-base leading-relaxed"
              dangerouslySetInnerHTML={{
                __html: DOMPurify.sanitize(description),
              }}
            />
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default SingleBlog;
