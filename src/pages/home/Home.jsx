import React, { useState } from 'react';
import bgImage from "../../assets/Home/homebg.webp";
import { Carousel } from 'antd';
import aboutvideo from "/Video/vdo.mp4";
import img1 from "../../assets/Home/delhi-city-places-small.webp";
import img2 from "../../assets/Home/gurgaon-city-places-large.webp";
import SearchBar from "../../components/SearchBar/SearchBar"
import { MdOutlineBedroomParent } from "react-icons/md";
import {
  CalendarOutlined,
  SmileOutlined,
  TeamOutlined,
  ProjectOutlined,
} from "@ant-design/icons";
import { useInView } from "react-intersection-observer";
import CountUp from "react-countup";
import Builder from '../../components/Builder';
import { useEffect } from 'react';









const HeroImageArray = [
  {
    "slug": "example-project-1",
    "video": aboutvideo,
    "label": "Project 1",
    "date": "2024-01-01"
  },
  {
    "slug": "example-project-2",
    "video": aboutvideo,
    "label": "Project 2",
    "date": "2024-02-01"
  },
  {
    "slug": "example-project-3",
    "video": aboutvideo,
    "label": "Project 3",
    "date": "2024-03-01"
  }
];



const propertiesData=// properties.json
[
  {
    "slug": "modern-apartment",
    "images": [img1],
    "price": "$1,200",
    "name": "Modern Apartment",
    "location": "Downtown City",
    "bhk": "2 BHK",
    "isComplete": true
  },
  {
    "slug": "luxury-villa",
    "images": [img1],
    "price": "$3,500",
    "name": "Luxury Villa",
    "location": "Beachside",
    "bhk": "4 BHK",
    "isComplete": true
  },
  {
    "slug": "cozy-cottage",
    "images": [img1],
    "price": "$850",
    "name": "Cozy Cottage",
    "location": "Suburban Area",
    "bhk": "1 BHK",
    "isComplete": true
  },
  {
    "slug": "spacious-office",
    "images": [img1],
    "price": "$2,000",
    "name": "Spacious Office",
    "location": "Business District",
    "bhk": "N/A",
    "isComplete": true
  },
  {
    "slug": "charming-bungalow",
    "images": [img1],
    "price": "$1,500",
    "name": "Charming Bungalow",
    "location": "Countryside",
    "bhk": "3 BHK",
    "isComplete": false
  },
  {
    "slug": "downtown-studio",
    "images": [img1],
    "name": "Downtown Studio",
    "location": "Central City",
    "bhk": "Studio",
    "isComplete": true
  }
]



// const testimonials = [
//   {
//     name: "Shubham Sharma",
//     rating: "★ ★ ★ ★ ★",
//     text: "I’ve been writing CSS for over 20 years, and up until 2017, the way I wrote it changed frequently. It’s not a coincidence Tailwind was released the same year. It might look wrong, but spend time with it and you’ll realise semantic CSS was a 20 year mistake.",
//     imageUrl: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ"
//   },
//   {
//     name: "Shubham Sharma",
//     rating: "★ ★ ★ ★ ★",
//     text: "I’ve been writing CSS for over 20 years, and up until 2017, the way I wrote it changed frequently. It’s not a coincidence Tailwind was released the same year. It might look wrong, but spend time with it and you’ll realise semantic CSS was a 20 year mistake.",
//     imageUrl: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ"
//   },
//   {
//     name: "Shubham Sharma",
//     rating: "★ ★ ★ ★ ★",
//     text: "I’ve been writing CSS for over 20 years, and up until 2017, the way I wrote it changed frequently. It’s not a coincidence Tailwind was released the same year. It might look wrong, but spend time with it and you’ll realise semantic CSS was a 20 year mistake.",
//     imageUrl: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ"
//   },
//   // Add more testimonials here
// ];

const Home = () => {
  const [arrowsVisible, setArrowsVisible] = useState(false);
  const { ref, inView } = useInView({
    threshold: 0,
    triggerOnce: true,
  });

  const [activeCategory, setActiveCategory] = useState('All');
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    if (activeCategory === 'All') {
      setFilteredData(propertiesData);
    } else {
      setFilteredData(propertiesData.filter(item => item.category === activeCategory));
    }
  }, [activeCategory]);

  const handleCategoryClick = (category) => {
    setActiveCategory(category);
  };

  const counterData = [
    { icon: <CalendarOutlined />, value: 8, title: "Years Experience" },
    { icon: <SmileOutlined />, value: 1000, title: "Happy Clients" },
    { icon: <TeamOutlined />, value: 40, title: "Builders" },
    { icon: <ProjectOutlined />, value: 100, title: "Projects" },
  ];
  return (
    <>
      {/* Section-I */}
      <div className='relative h-full w-full lg:h-[100vh]'>
        <img src={bgImage} alt="Background" className='w-full h-full' />
        <div className='absolute top-[55%] left-1/2 transform -translate-x-1/2 w-full max-w-md px-4'>
          <SearchBar />
        </div>
      </div>
      {/* Section-I */}
      <hr className='mt-20 w-[90%] md:w-[40%] lg:w-[20%] text-center mx-auto font-bold' style={{ borderTop: '3px solid #b5b5b5' }} />
      {/* Major Builders */}
      <Builder/>
      {/* Major Builders */}
      
      {/* Section-II */}
      <div className='flex flex-col lg:flex-row lg:w-[88%] w-[95%] mx-auto lg:gap-16 gap-4 items-center mt-14 p-6 lg:px-0'>
        <div className="w-full lg:w-1/2">
          <p className="text-[#002a68] text-sm mb-2 font-bold">PROPCODES</p>
          <h1 className="text-[#0B090A] text-2xl md:text-4xl lg:text-4xl font-bold">
            Best Real Estate Company in  Gurgaon
          </h1>
          <p className="text-[#555555] text-base lg:text-base mt-4 font-normal">
            Propcodes is the best real estate company in Gurugram, India. We provide commercial space, residential flats, apartments & homes for rent and sale at affordable property rates.
          </p>

          <div
            className="mt-8  w-full  cursor-pointer rounded-2xl overflow-hidden"
            onMouseEnter={() => setArrowsVisible(true)}
            onMouseLeave={() => setArrowsVisible(false)}
          >
            <Carousel
              arrows={arrowsVisible}
              infinite={true}
              waitForAnimate={true}
              autoplay
              autoplaySpeed={2000}
              slidesToShow={1}
              slidesToScroll={1}
              draggable
            >
              {HeroImageArray.map((item, index) => (
                <div className="w-full h-full" key={index}>
                  <video
                    src={item.video}
                    autoPlay
                    muted
                    loop
                    width="100%"
                    height="auto"
                    style={{ borderRadius: "20px", height: '300px', objectFit: 'cover' }} // Adjust height here
                    className="w-full h-auto object-cover"
                  />
                </div>
              ))}
            </Carousel>
          </div>
        </div>
        <div className='flex flex-col gap-4 w-full lg:w-[50%] lg:mt-0 mt-4'>
          <h2 className='font-bold text-4xl lg:text-4xl'>Our Content</h2>
          <p className='text-sm text-[#555555] lg:text-base'>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam veniam aspernatur voluptatibus doloribus aut ducimus, quos harum accusamus distinctio quo praesentium necessitatibus inventore tempore molestias impedit. Accusantium dolorem hic impedit. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam veniam aspernatur voluptatibus doloribus aut ducimus, quos harum accusamus distinctio quo praesentium necessitatibus inventore tempore molestias impedit. Accusantium dolorem hic impedit. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam veniam aspernatur voluptatibus doloribus aut ducimus, quos harum accusamus distinctio quo praesentium necessitatibus inventore tempore molestias impedit. Accusantium dolorem hic impedit. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam veniam aspernatur voluptatibus doloribus aut ducimus, quos harum accusamus distinctio quo praesentium necessitatibus inventore tempore molestias impedit. Accusantium dolorem hic impedit.
          </p>
          <button className='border border-blue-400 rounded-full px-4 py-2 w-40 text-blue-400 mt-4'>
            Read More
          </button>
        </div>
      </div>
      {/* Section-II */}

      {/* Section-III */}
      <div id="most-popular-places" className="lg:p-20 p-4">
        <div className='flex flex-col gap-2'>
          <h2 className="text-black text-2xl md:text-4xl font-bold">
            Popular Cities
          </h2>
          <span className='w-60' style={{ borderTop: "4px solid #002a68" }}></span>
        </div>
        <div
          id="row-1"
          className="flex lg:flex-row flex-col gap-8 justify-between mt-8"
        >
          <div className="lg:w-[40%] w-full relative group">
            {/* Image Container */}
            <div className="relative overflow-hidden rounded h-[382px]"> {/* Fixed height */}
              <img
                src={img2}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                height={382}
                width={646}
                alt="Gurgaon"
              />
              <div className="absolute bottom-4 left-4 text-white text-2xl font-bold z-10">
                GURGAON
              </div>
            </div>
            {/* Hover Text */}
            <div className="mt-2 opacity-100 lg:opacity-0 lg:group-hover:opacity-100 transition-opacity duration-300">
              <div className="text-white text-xl font-bold">
                <p className='text-[#555555] text-base lg:text-base mt-4 font-normal'>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia nemo doloremque modi vel tempora! Accusantium ratione cum pariatur, fugiat saepe, facere molestias facilis blanditiis iure, autem error magnam architecto fuga.
                </p>
              </div>
            </div>
          </div>

          <div className="lg:w-[40%] w-full relative group">
            {/* Image Container */}
            <div className="relative overflow-hidden rounded h-[382px]"> {/* Fixed height */}
              <img
                src={img1}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                height={382}
                width={311}
                alt="Delhi"
              />
              <div className="absolute bottom-4 left-4 text-white text-2xl font-bold z-10">
                DELHI
              </div>
            </div>
            {/* Hover Text */}
            <div className="mt-2 opacity-100 lg:opacity-0 lg:group-hover:opacity-100 transition-opacity duration-300">
              <div className="text-white text-xl font-bold">
                <p className='text-[#555555] text-base lg:text-base mt-4 font-normal'>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia nemo doloremque modi vel tempora! Accusantium ratione cum pariatur, fugiat saepe, facere molestias facilis blanditiis iure, autem error magnam architecto fuga.
                </p>
              </div>
            </div>
          </div>

          <div className="lg:w-[40%] w-full relative group">
            {/* Image Container */}
            <div className="relative overflow-hidden rounded h-[382px]"> {/* Fixed height */}
              <img
                src={img2}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                height={382}
                width={311}
                alt="Noida"
              />
              <div className="absolute bottom-4 left-4 text-white text-2xl font-bold z-10">
                NOIDA
              </div>
            </div>
            {/* Hover Text */}
            <div className="mt-2 opacity-100 lg:opacity-0 lg:group-hover:opacity-100 transition-opacity duration-300">
              <div className="text-white text-xl font-bold">
                <p className='text-[#555555] text-base lg:text-base mt-4 font-normal'>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia nemo doloremque modi vel tempora! Accusantium ratione cum pariatur, fugiat saepe, facere molestias facilis blanditiis iure, autem error magnam architecto fuga.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Section-III */}

      {/* Section IV */}
      <div className="flex flex-col lg:flex-row w-full lg:w-4/5 mx-auto pt-5 items-center">
        <div className="w-full lg:w-1/2 p-6">
          <h3 className="text-[#002a68] text-sm mb-2 font-bold">
            CHECKOUT OUR NEW
          </h3>
          <h3 className="text-[#0B090A] text-2xl my-2 md:text-4xl lg:text-4xl font-bold">
            Latest Listed Properties
          </h3>
          <p className="text-[#555555] text-base lg:text-base mt-4 font-normal">
            Be it residential or commercial, we as told before, are your one stop solution. Go explore
          </p>
        </div>
        <div className="w-full lg:w-1/2 p-6 flex justify-start lg:justify-end">
          <button
            className={`min-w-[15%] p-3 text-sm border ${
              activeCategory === 'All'
                ? 'bg-[#002a68] text-white'
                : 'border-[#002a68] text-[#002a68] bg-white'
            } rounded-[24px] cursor-pointer mr-6`}
            onClick={() => handleCategoryClick('All')}
          >
            All
          </button>
          <button
            className={`min-w-[30%] p-3 text-sm ${
              activeCategory === 'residential'
                ? 'bg-[#002a68] text-white'
                : 'border border-[#002a68] text-[#002a68] bg-white'
            } rounded-[24px] cursor-pointer mr-6`}
            onClick={() => handleCategoryClick('residential')}
          >
            Residential
          </button>
          <button
            className={`min-w-[30%] p-3 text-sm ${
              activeCategory === 'commercial'
                ? 'bg-[#002a68] text-white'
                : 'border border-[#002a68] text-[#002a68] bg-white'
            } rounded-[24px] cursor-pointer mr-6`}
            onClick={() => handleCategoryClick('commercial')}
          >
            Commercial
          </button>
        </div>
      </div>

      <div className="w-full lg:w-4/5 mx-auto mt-0 zz px-4 lg:px-0">
        <Carousel
          arrows={true}
          waitForAnimate={true}
          infinite={true}
          autoplay
          dots={false}
          autoplaySpeed={2000}
          slidesToShow={3}
          slidesToScroll={1}
          draggable
          responsive={[
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
              },
            },
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 2,
              },
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
              },
            },
          ]}
          className="overflow-visible"
        >
          {filteredData?.length > 0 ? (
            filteredData?.filter((el) => el?.isComplete === true).map((item, index) => (
              <div key={index} className="px-2 py-4">
                <div className="h-full border bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 ease-out hover:scale-105">
                  <a href={`/projects/${item?.slug}`}>
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block h-full"
                    >
                      <div className="carousel-slide p-4 flex flex-col h-full">
                        <div className="relative w-full h-80 mb-4">
                          <img
                            src={img1}
                            // layout="fill"
                            // objectFit="cover"
                            alt={item.images[0]}
                            className="rounded-xl w-full h-full"
                          />
                        </div>
                        <p className="font-bold text-[#002a68] text-xl">
                          {item.price} <span className="text-base">Onwards</span>
                        </p>
                        <p className="font-medium text-[#2B2B2B] text-base mt-2">
                          {item.name}
                        </p>
                        <p className="text-black mt-1">{item.location}</p>
                        <p className="flex items-center mt-2 text-black">
                          <MdOutlineBedroomParent className="text-[20px] mr-1" /> {item.bhk}
                        </p>
                      </div>
                    </a>
                  </a>
                </div>
              </div>
            ))
          ) : (
            <div className="no-data-message text-center w-full">
              <p className="font-bold text-[#2B2B2B] text-xl">
                No data available for {activeCategory}
              </p>
            </div>
          )}
        </Carousel>
      </div>
      {/* Section IV */}



      {/* Section V */}
       {/* Counter */}
       <div id="why-choose-us" className="bg-[#EAEAEA] lg:p-20 lg:mt-32 mt-20 p-4">
       <h3 className='font-bold text-center text-4xl'>Trusted By Over 52+ Builders</h3>
        <div id="counter" ref={ref} className="mt-16 text-center">
          <div className="flex flex-wrap justify-evenly gap-8">
            {counterData.map((item, index) => (
              <div
                className="flex flex-col items-center w-full sm:w-1/2 md:w-1/3 lg:w-40"
                key={index}
              >
                <div className="bg-white lg:w-40 p-4 rounded-lg w-full max-w-xs shadow-lg text-center h-full">
                  <div className="text-4xl text-blue-500 mb-4">{item.icon}</div>
                  <div className="text-3xl font-bold mb-2">
                    {inView ? <CountUp end={item.value} duration={2.5} /> : "0"}
                    {item.title === "Years Experience" ? "+" : null}
                  </div>
                  <div className="text-gray-600">{item.title}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
        </div>
      {/* Section V */}


      {/**section VI */}
      <div className="m-auto flex flex-col lg:flex-row w-4/5 mt-28 justify-between gap-12 item-center mb-16">
          <div className="w-full">
            <h3 className="text-[#002a68] text-sm font-bold">
              TESTIMONIALS
            </h3>
            <h3 className="font-bold text-4xl lg:text-4xl my-4">
              Look What Our Customers Say!
            </h3>

            <p className="text-sm text-[#555555] lg:text-base">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem at fuga ad quidem quaerat! Veritatis fugit hic perspiciatis deleniti et voluptates adipisci ullam magnam unde esse? Libero quis ab ad.Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem at fuga ad quidem quaerat! Veritatis fugit hic perspiciatis deleniti et voluptates adipisci ullam magnam unde esse? Libero quis ab ad.
            </p>
          </div>

          <div className="w-full lg:w-1/2 ">
            <Carousel
              arrows={false}
              waitForAnimate={true}
              infinite={true}
              autoplay
              autoplaySpeed={5000}
              slidesToShow={1}
              slidesToScroll={1}
              draggable
            >
              <div className="h-[450px] w-[350px] rounded-3xl bg-white overflow-hidden border">
                <div className="h-[22%] bg-[#002a68]"></div>
                <div className="mx-auto w-32 h-32 relative -mt-16 border-4 border-white rounded-full overflow-hidden">
                  <img
                    className="object-cover object-center h-32"
                    src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ"
                    alt="Woman looking front"
                  />
                </div>
                <p className="text-xl text-black text-center">Lily</p>
                <p className="text-xl text-[#002a68] text-center">★ ★ ★ ★ ★</p>
                <div>
                  <p className="p-5">
                    I’ve been writing CSS for over 20 years, and up until 2017,
                    the way I wrote it changed frequently. It’s not a
                    coincidence Tailwind was released the same year. It might
                    look wrong, but spend time with it and you’ll realise
                    semantic CSS was a 20 year mistake.
                  </p>
                </div>
              </div>
            </Carousel>
          </div>
        </div>
      {/**section VI */}
      
      
    </>
  );
}

export default Home;
