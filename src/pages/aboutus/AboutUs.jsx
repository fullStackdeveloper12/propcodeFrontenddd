import React from 'react';
import BreadCrumb from '../../components/BreadCrumb/BreadCrumb.jsx';
import contactvideo from "/Video/contact.mp4"
import TeamMemberCard from '@/components/TeamMemberCard/TeamMemberCard.jsx';



const AboutUs = () => {
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
                ABOUT US
            </h1>
            <div className="absolute bottom-2 lg:left-[7%] left-[8%]">
            <BreadCrumb />
            </div>
        </div>
        <div className="bg-white py-15 px-4 md:px-15">
        {/* Container for the content */}
        <h2 className="text-4xl font-bold text-center mt-5   text-blue-900">
          Our Company
        </h2>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-10">
          {/* Left side - Image */}
          <div className="flex justify-center">
            <img
              src="https://media.istockphoto.com/id/2025050583/photo/diverse-team-posing-in-a-bright-modern-office.jpg?s=2048x2048&w=is&k=20&c=iGXXJtdj4HbkNyhKn6xmeR1RerFLnB_NV4IOQOmdkkw="
              alt="Company Team"
              className="rounded-lg shadow-lg max-w-full"
            />
          </div>

          {/* Right side - Text Content */}
          <div className="space-y-5 py-20">
            <blockquote className="text-2xl font-semibold text-gray-800">
              "The best deals are built on trust and teamwork."
            </blockquote>
            <p className="text-lg text-gray-700">
              Our "About Us" page invites you on a journey through the heart and
              soul of
              <span className="font-bold"> [Your Company Name]</span>, a company
              deeply rooted in
              <span className="font-bold"> [industry]</span> and dedicated to
              <span className="font-bold"> [mission]</span>. Explore our rich
              history, tracing our evolution.
            </p>

            <ul className="list-none space-y-3">
              <li className="flex items-center">
                <span className="text-blue-600 mr-2">✔</span>
                Property Listings & Searches
              </li>
              <li className="flex items-center">
                <span className="text-blue-600 mr-2">✔</span>
                Insights & Analytics
              </li>
              <li className="flex items-center">
                <span className="text-blue-600 mr-2">✔</span>
                Connect with Trusted Agents
              </li>
            </ul>

            <button className="bg-blue-600 text-white px-5 py-3 rounded-lg hover:bg-blue-700 transition">
              Know More
            </button>
          </div>
        </div>
        {/* member section */}
        <TeamMemberCard />

        {/* together section */}
        <div className="bg-blue-300 py-16 px-4 md:px-20 text-center">
          {/* Container for the content */}
          <div className="max-w-3xl mx-auto space-y-6">
            {/* Quote */}
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              "Together, we achieve."
            </h2>

            {/* Description */}
            <p className="text-lg md:text-xl text-white">
              Our "About Us" page invites you on a journey through the heart and
              soul of <span className="font-bold">[Your Company Name]</span>, a
              company deeply rooted.
            </p>

            {/* Call-to-action button */}
            <button className="bg-blue-800 text-white px-8 py-3 rounded-lg hover:bg-blue-900 transition">
              Know More
            </button>
          </div>
        </div>
      </div>
        </>
    );
};

export default AboutUs;