import React from 'react';
import { FaFacebook, FaSquareXTwitter } from "react-icons/fa6";
import { IoLogoYoutube } from "react-icons/io";
import { FaInstagramSquare } from "react-icons/fa";
import { Carousel } from 'antd';

const TeamMemberCard = () => {
  const profiles = [
    {
      name: "John Doe",
      designation: "Principal",
      imageUrl: "https://media.istockphoto.com/id/1364388471/photo/multiracial-male-principal-standing-outdoors-on-campus.webp?a=1&b=1&s=612x612&w=0&k=20&c=U82QwrAO4OZAbvDsxEAGWUtwTo0VSkvM2omMIFZXN8U=",
      socialLinks: {
        instagram: "https://instagram.com/johndoe",
        facebook: "https://facebook.com/johndoe",
        youtube: "https://youtube.com/johndoe",
        twitter: "https://twitter.com/johndoe"
      }
    },
    {
      name: "John Doe",
      designation: "Principal",
      imageUrl: "https://media.istockphoto.com/id/1364388471/photo/multiracial-male-principal-standing-outdoors-on-campus.webp?a=1&b=1&s=612x612&w=0&k=20&c=U82QwrAO4OZAbvDsxEAGWUtwTo0VSkvM2omMIFZXN8U=",
      socialLinks: {
        instagram: "https://instagram.com/johndoe",
        facebook: "https://facebook.com/johndoe",
        youtube: "https://youtube.com/johndoe",
        twitter: "https://twitter.com/johndoe"
      }
    },
    {
      name: "John Doe",
      designation: "Principal",
      imageUrl: "https://media.istockphoto.com/id/1364388471/photo/multiracial-male-principal-standing-outdoors-on-campus.webp?a=1&b=1&s=612x612&w=0&k=20&c=U82QwrAO4OZAbvDsxEAGWUtwTo0VSkvM2omMIFZXN8U=",
      socialLinks: {
        instagram: "https://instagram.com/johndoe",
        facebook: "https://facebook.com/johndoe",
        youtube: "https://youtube.com/johndoe",
        twitter: "https://twitter.com/johndoe"
      }
    },{
      name: "John Doe",
      designation: "Principal",
      imageUrl: "https://media.istockphoto.com/id/1364388471/photo/multiracial-male-principal-standing-outdoors-on-campus.webp?a=1&b=1&s=612x612&w=0&k=20&c=U82QwrAO4OZAbvDsxEAGWUtwTo0VSkvM2omMIFZXN8U=",
      socialLinks: {
        instagram: "https://instagram.com/johndoe",
        facebook: "https://facebook.com/johndoe",
        youtube: "https://youtube.com/johndoe",
        twitter: "https://twitter.com/johndoe"
      }
    },{
      name: "John Doe",
      designation: "Principal",
      imageUrl: "https://media.istockphoto.com/id/1364388471/photo/multiracial-male-principal-standing-outdoors-on-campus.webp?a=1&b=1&s=612x612&w=0&k=20&c=U82QwrAO4OZAbvDsxEAGWUtwTo0VSkvM2omMIFZXN8U=",
      socialLinks: {
        instagram: "https://instagram.com/johndoe",
        facebook: "https://facebook.com/johndoe",
        youtube: "https://youtube.com/johndoe",
        twitter: "https://twitter.com/johndoe"
      }
    },{
      name: "John Doe",
      designation: "Principal",
      imageUrl: "https://media.istockphoto.com/id/1364388471/photo/multiracial-male-principal-standing-outdoors-on-campus.webp?a=1&b=1&s=612x612&w=0&k=20&c=U82QwrAO4OZAbvDsxEAGWUtwTo0VSkvM2omMIFZXN8U=",
      socialLinks: {
        instagram: "https://instagram.com/johndoe",
        facebook: "https://facebook.com/johndoe",
        youtube: "https://youtube.com/johndoe",
        twitter: "https://twitter.com/johndoe"
      }
    },
    // ... other profile objects
  ];

  

  return (
    <div className="py-10">
      <Carousel
        arrows={false}
        autoplay
        dots={false}
        autoplaySpeed={3000}
        slidesToShow={4}
        slidesToScroll={1}
        draggable
        responsive={[
          {
            breakpoint: 1024,
            settings: { slidesToShow: 3 },
          },
          {
            breakpoint: 768,
            settings: { slidesToShow: 2 },
          },
          {
            breakpoint: 480,
            settings: { slidesToShow: 1 },
          },
        ]}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        {profiles.map((profile, index) => (
          <div key={index} className="px-2">
            <div className=" rounded-lg  overflow-hidden">
              <img
                src={profile.imageUrl}
                className="w-full h-64 object-cover object-center"
                alt={profile.name}
              />
              <div className="p-6" style={{background:"transparent"}}>
                <h2 className="text-2xl font-bold  text-center text-gray-800">{profile.name}</h2>
                <p className="text-gray-600 text-center">{profile.designation}</p>
                <div className="mt-4 flex justify-center gap-4 bg-[#52a5be] py-2 rounded-full text-white">
                  <FaInstagramSquare size={20}/>
                  <FaFacebook size={20}/>
                  <IoLogoYoutube size={20}/>
                  <FaSquareXTwitter size={20}/>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default TeamMemberCard;