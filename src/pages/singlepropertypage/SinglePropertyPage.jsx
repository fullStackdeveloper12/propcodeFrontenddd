import React, { useEffect, useState } from "react";
import { HomeIcon } from "lucide-react";
import { IoLogoWhatsapp } from "react-icons/io";
import { IoCall } from "react-icons/io5";
import { Collapse } from "antd";
import { Carousel, Image as AntdImage, Button } from "antd";
import { FaRegFilePdf } from "react-icons/fa";
import { FileImageOutlined, VideoCameraOutlined } from "@ant-design/icons";
import { Image } from "antd";
import { Tabs } from "antd";
import {
  Link,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
} from "react-scroll";
import { MdOutlineBedroomParent } from "react-icons/md";
import img1 from "../../assets/Home/delhi-city-places-small.webp";
import { PhoneInput } from 'react-international-phone';
import 'react-international-phone/style.css';
import ModalForm from "@/components/ModalForm/ModalForm";

const sampleData = {
  bannerimg: [
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYtgarnzwuAWyk2wbFpf_KTzmYyJM9ZA8Tkw&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYGfciVooP2K58w-Th9oYnfnALX1Ms8-pV2A&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYGfciVooP2K58w-Th9oYnfnALX1Ms8-pV2A&s",
  ],
  amenitiesImg: [
    "https://img.lovepik.com/background/20211021/large/lovepik-blue-banner-background-image_500452484.jpg",
    "https://img.lovepik.com/background/20211021/large/lovepik-blue-banner-background-image_500452484.jpg",
    "https://img.lovepik.com/background/20211021/large/lovepik-blue-banner-background-image_500452484.jpg",
  ],
  youtubeid: [
    "vid1",
    "vid2",
    "vid3",
  ],
  typebhk: [
    "1BHK",
    "2BHK",
    "3BHK",
  ],
  sitePlan: [
    "siteplan1.jpg",
    "siteplan2.jpg",
  ],
  siteMap: [
    "sitemap1.jpg",
    "sitemap2.jpg",
  ]
};

const propertiesData =// properties.json
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


export default function SinglePropertyPage() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [filteredData, setFilteredData] = useState([]);
  const [phone, setPhone] = useState('');
  const [open, setOpen] = useState(false);
  const [initialActiveSection, setInitialActiveSection] = useState("");
  const [data, setData] = useState(sampleData);



  useEffect(() => {
    if (activeCategory === 'All') {
      setFilteredData(propertiesData);
    } else {
      setFilteredData(propertiesData.filter(item => item.category === activeCategory));
    }
  }, [activeCategory]);

  
  const amenities = [
    {
      name: "Lounge",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5KUPelm1MaX_U6U2n8_4a3fdWL1N3k1e-iA&s",
    },
    {
      name: "Barbecue",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5KUPelm1MaX_U6U2n8_4a3fdWL1N3k1e-iA&s",
    },
    {
      name: "Creche/Day care",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5KUPelm1MaX_U6U2n8_4a3fdWL1N3k1e-iA&s",
    },
    {
      name: "Yoga/Meditation Area",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5KUPelm1MaX_U6U2n8_4a3fdWL1N3k1e-iA&s",
    },
    {
      name: "Club House",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5KUPelm1MaX_U6U2n8_4a3fdWL1N3k1e-iA&s",
    },
    {
      name: "Gymnasium",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5KUPelm1MaX_U6U2n8_4a3fdWL1N3k1e-iA&s",
    },
    {
      name: "Landscape Garden",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5KUPelm1MaX_U6U2n8_4a3fdWL1N3k1e-iA&s",
    },
    {
      name: "Children's Play Area",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5KUPelm1MaX_U6U2n8_4a3fdWL1N3k1e-iA&s",
    },
  ];



  const prices = [
    { type: "3BHK", size: "1311 sq.ft.", price: "2.04 Cr*" },
    { type: "3BHK", size: "1371 sq.ft.", price: "2.14 Cr" },
    { type: "3BHK", size: "1672 sq.ft.", price: "2.54 Cr" },
  ];

  const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;
  const items = [
    {
      key: "1",
      label: "This is panel header 1",
      children: <p>{text}</p>,
    },
    {
      key: "2",
      label: "This is panel header 2",
      children: <p>{text}</p>,
    },
    {
      key: "3",
      label: "This is panel header 3",
      children: <p>{text}</p>,
    },
  ];
  const onChange = (key) => {
    console.log(key);
  };

  const contentStyle = {
    margin: 0,
    height: "160px",
    color: "#fff",
    lineHeight: "160px",
    textAlign: "center",
    background: "#364d79",
  };

  const onChangee = (currentSlide) => {
    console.log(currentSlide);
  };
  const imageData = [
    {
      src: "https://media.istockphoto.com/id/1135793300/photo/3d-rendering-of-corporate-buildings-with-sunlight.jpg?s=2048x2048&w=is&k=20&c=A7BbiP8-IxwjbZOgK_ahFnSjTvESZj-KSEPaqBZ9bQ0=",
      alt: "Corporate Building",
    },
    {
      src: "https://media.istockphoto.com/id/1135793300/photo/3d-rendering-of-corporate-buildings-with-sunlight.jpg?s=2048x2048&w=is&k=20&c=A7BbiP8-IxwjbZOgK_ahFnSjTvESZj-KSEPaqBZ9bQ0=",
      alt: "Corporate Building",
    },
    {
      src: "https://media.istockphoto.com/id/1135793300/photo/3d-rendering-of-corporate-buildings-with-sunlight.jpg?s=2048x2048&w=is&k=20&c=A7BbiP8-IxwjbZOgK_ahFnSjTvESZj-KSEPaqBZ9bQ0=",
      alt: "Corporate Building",
    },
  ];
  const { TabPane } = Tabs;

  useEffect(() => {
    Events.scrollEvent.register("begin", (to, element) => {
      console.log("begin", to, element);
    });

    Events.scrollEvent.register("end", (to, element) => {
      console.log("end", to, element);
    });

    scrollSpy.update();

    return () => {
      Events.scrollEvent.remove("begin");
      Events.scrollEvent.remove("end");
    };
  }, []);

  const handleSetActive = (to) => {
    console.log(to);
  };

  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };



  return (
    <>
      <div className="relative w-full h-96 lg:block md:block hidden">
        <Carousel
          infinite={true}
          waitForAnimate={true}
          autoplay
          dots={false}
          autoplaySpeed={2000}
          slidesToShow={1}
          slidesToScroll={1}
          draggable
        >
          {data?.bannerimg?.map((item, index) => (
            <div key={index} className="h-96">
              <AntdImage
                src={item}
                preview={false}
                className="w-full h-full object-cover"
                height={`100%`}
                width={`100%`}
              />
            </div>
          ))}
        </Carousel>

        <div>
          <div className="absolute z-2 bottom-3 right-4">
            <button
              onClick={showModal}
              type="button"
              className="border px-8 py-3 rounded text-xs text-black bg-white cursor-pointer transition-colors duration-300 hover:text-[#115585] hover:border-[#115585]"
            >
              <FaRegFilePdf className="inline-block mr-2 text-base animate-blink" />
              Download Brochure
            </button>
          </div>

          {/* Modal Form */}
          <ModalForm isOpen={isModalOpen} onClose={closeModal} />
        </div>
        {/* Photos Button */}
        <div
          className="absolute z-2 bottom-4 left-4"
          onClick={() => {
            setInitialActiveSection("Projects");
            setOpen(true);
          }}
        >
          <Button
            icon={<FileImageOutlined />}
            className="hover:bg-[#115585] transition-colors"
            style={{
              borderColor: "transparent",
              color: "initial",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = "#115585";
              e.currentTarget.style.color = "#115585";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = "transparent";
              e.currentTarget.style.color = "initial";
            }}
          >
            {data?.bannerimg?.length +
              data?.amenitiesImg?.length +
              data?.youtubeid?.length +
              data?.typebhk?.length +
              data?.sitePlan?.length +
              data?.siteMap?.length}{" "}
            photos
          </Button>
        </div>
        {/* Videos Button */}
        <div className="absolute z-2 bottom-4 left-36">
          <Button
            onClick={() => {
              setInitialActiveSection("Videos");
              setOpen(true);
            }}
            icon={<VideoCameraOutlined />}
            className="hover:bg-[#115585] transition-colors"
            style={{
              borderColor: "transparent",
              color: "initial",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = "#115585";
              e.currentTarget.style.color = "#115585";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = "transparent";
              e.currentTarget.style.color = "initial";
            }}
          >
            Video
          </Button>
        </div>
      </div>

      <div>
        <div className="container mx-auto p-6 gap-8 flex flex-col lg:flex-row">
          {/* Left Section (Property Details) */}
          <div className="flex-1 overflow-auto">
            {/* Nav Section - Now Sticky */}
            <div className="bg-white lg:block hidden  mb-5 border sticky top-0 z-4 ;lg:block shadow-lg">
              <ul className="flex justify-around items-center">
                <li className="hover:bg-[#52a5be] p-3 hover:text-white cursor-pointer">
                  <Link
                    activeClass="active"
                    to="home"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    onSetActive={handleSetActive}
                  >
                    Home
                  </Link>
                </li>
                <li className="hover:bg-[#52a5be]  p-3 hover:text-white cursor-pointer">
                  <Link
                    activeClass="active"
                    to="overview"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    onSetActive={handleSetActive}
                  >
                    Overview
                  </Link>
                </li>
                <li className="hover:bg-[#52a5be]  p-3 hover:text-white cursor-pointer">
                  <Link
                    activeClass="active"
                    to="highlights"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    onSetActive={handleSetActive}
                  >
                    Highlights
                  </Link>
                </li>
                <li className="hover:bg-[#52a5be]  p-3 hover:text-white cursor-pointer">
                  <Link
                    activeClass="active"
                    to="amenities"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    onSetActive={handleSetActive}
                  >
                    Amenities
                  </Link>
                </li>
                <li className="hover:bg-[#52a5be]  p-3 hover:text-white cursor-pointer">
                  <Link
                    activeClass="active"
                    to="price"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    onSetActive={handleSetActive}
                  >
                    Price
                  </Link>
                </li>
                <li className="hover:bg-[#52a5be]  p-3 hover:text-white cursor-pointer">
                  <Link
                    activeClass="active"
                    to="gallery"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    onSetActive={handleSetActive}
                  >
                    Gallery
                  </Link>
                </li>
                <li className="hover:bg-[#52a5be]  p-3 hover:text-white cursor-pointer">
                  <Link
                    activeClass="active"
                    to="floorplan"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    onSetActive={handleSetActive}
                  >
                    Floor Plan
                  </Link>
                </li>
                <li className="hover:bg-[#52a5be]  p-3 hover:text-white cursor-pointer">
                  <Link
                    activeClass="active"
                    to="location"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    onSetActive={handleSetActive}
                  >
                    Location
                  </Link>
                </li>
                <li className="hover:bg-[#52a5be]  p-3 hover:text-white cursor-pointer">
                  <Link
                    activeClass="active"
                    to="faq"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    onSetActive={handleSetActive}
                  >
                    FAQs
                  </Link>
                </li>
              </ul>
            </div>

            {/* Nav Section End */}

            <div id="left-parent" className="flex flex-col">
              {/* Property Card */}
              <Element name="home" className="element">
                <div className="bg-white border rounded-lg shadow-lg  overflow-hidden mb-6">
                  <div className="flex flex-col lg:flex-row w-full p-5">
                    <div className="my-auto w-full lg:w-1/2">
                      <Carousel afterChange={onChangee} autoplay>
                        {imageData.map((image, index) => (
                          <div key={index}>
                            <img
                              className="h-80 w-full object-cover"
                              src={image.src}
                              alt={image.alt}
                            />
                          </div>
                        ))}
                      </Carousel>
                    </div>
                    <div className="p-6 flex flex-col lg:w-1/2 justify-between">
                      <div className="flex justify-between">
                        <h2 className="text-3xl font-bold text-gray-900 mb-2">
                          Antalia Hills
                        </h2>
                        <div className="flex flex-col gap-2 h-10 w-20">
                          <img
                            src="https://tse4.mm.bing.net/th?id=OIP.x7WnkIHcNbE6yvxtU6yUKAHaDB&pid=Api&P=0&h=180"
                            alt="logo"
                            className="w-full"
                          />
                          <div className="flex gap-4">
                            <div>
                              <IoLogoWhatsapp
                                size={30}
                                className="text-green-600"
                              />
                            </div>
                            <div>
                              <IoCall size={30} className="text-blue-600" />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center mb-4">
                        {[...Array(5)].map((_, i) => (
                          <svg
                            key={i}
                            className="h-5 w-5 text-yellow-400"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>
                      <p className="text-2xl font-bold text-yellow-500 mb-2">
                        ₹ 1.02 - 2.10 Cr* onwards
                      </p>
                      <p className="text-lg text-gray-600 mb-4">
                        Chhattarpur, South Delhi, New Delhi
                      </p>

                      <div className="grid grid-cols-2 gap-4 bg-blue-50 p-4 rounded-md">
                        <div className="flex items-center">
                          <HomeIcon className="h-6 w-6 text-blue-900 mr-2" />
                          <div>
                            <p className="text-sm text-gray-500">Configuration</p>
                            <p className="font-medium">3 & 4 BHK</p>
                          </div>
                        </div>
                        <div className="flex items-center">
                          <HomeIcon className="h-6 w-6 text-blue-900 mr-2" />
                          <div>
                            <p className="text-sm text-gray-500">Size</p>
                            <p className="font-medium">3300 sq.ft</p>
                          </div>
                        </div>
                        <div className="flex items-center">
                          <HomeIcon className="h-6 w-6 text-blue-900 mr-2" />
                          <div>
                            <p className="text-sm text-gray-500">Launch Date</p>
                            <p className="font-medium">October 2024</p>
                          </div>
                        </div>
                        <div className="flex items-center">
                          <HomeIcon className="h-6 w-6 text-blue-900 mr-2" />
                          <div>
                            <p className="text-sm text-gray-500">Configuration</p>
                            <p className="font-medium">3 & 4 BHK</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Element>

              {/* Description Section */}
              <Element name="overview" className="element">
                <div className="bg-white p-6 rounded-lg shadow-lg">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">
                    Antalia Hills
                  </h2>
                  <p className="text-gray-600 mb-4">
                    Welcome to [Your Real Estate Company Name]. We specialize in
                    providing exceptional property services to help you find your
                    dream home or investment opportunity.
                  </p>
                  <p className="text-gray-600 mb-4">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Vestibulum ante ipsum primis in faucibus orci luctus et
                    ultrices posuere cubilia curae; Donec vel libero nec est
                    facilisis gravida. Nulla facilisi. Donec feugiat, arcu id
                    aliquam congue, velit libero aliquet felis, non cursus odio
                    nisi vitae libero.
                  </p>
                  <p className="text-gray-600">
                    Pellentesque habitant morbi tristique senectus et netus et
                    malesuada fames ac turpis egestas. Aliquam erat volutpat.
                  </p>
                </div>
              </Element>

              {/* Highlight Section */}
              <Element name="highlights" className="element">
                <div className="bg-white py-8 px-4 lg:mt-16 mt-8">
                  <div className="max-w-7xl mx-auto">
                    <h2 className="text-2xl md:text-3xl font-bold text-[#082e6c] mb-6">
                      Whiteland Blissville 76 Highlights
                    </h2>
                    <div className="flex flex-col md:flex-row gap-6">
                      <div className="flex-1 flex items-stretch">
                        <img
                          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5KUPelm1MaX_U6U2n8_4a3fdWL1N3k1e-iA&s"
                          alt="Clubhouse"
                          className="w-full h-full object-cover rounded-lg shadow-md"
                        />
                      </div>
                      <div className="flex-1 flex flex-col justify-between space-y-4">
                        <div className="bg-gray-100 p-4 rounded-lg shadow flex-grow">
                          Master design architecture by{" "}
                          <strong>Hafeez Contractor</strong>
                        </div>
                        <div className="bg-gray-100 p-4 rounded-lg shadow flex-grow">
                          Exquisite landscape design by Oracle landscapes &
                          world-renowned <strong>Chris Jones.</strong>
                        </div>
                        <div className="bg-gray-100 p-4 rounded-lg shadow flex-grow">
                          Super efficient spacious internal layouts.
                        </div>
                        <div className="bg-gray-100 p-4 rounded-lg shadow flex-grow">
                          Breathtaking views overlooking the Aravali range.
                        </div>
                        <div className="bg-gray-100 p-4 rounded-lg shadow flex-grow">
                          Vastu compliant architecture.
                        </div>
                        <div className="bg-gray-100 p-4 rounded-lg shadow flex-grow">
                          State-of-the-art Clubhouse.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Element>

              {/* Amenities Section */}
              <Element name="amenities" className="element">
                <div className="max-w-6xl lg:mt-16 mt-8 p-4">
                  <h2 className="text-2xl font-semibold text-[#083e62] text-left mb-6">
                    Whiteland Blissville 76 Amenities Gallery
                  </h2>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    {amenities.map((amenity, index) => (
                      <div
                        key={index}
                        className="relative overflow-hidden rounded-sm shadow-lg"
                      >
                        <img
                          src={amenity.image}
                          alt={amenity.name}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute bottom-0 left-0 right-0 bg-[#082e62] text-xs text-white text-center p-1">
                          {amenity.name}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </Element>

              {/* Price List Section */}
              <div>
                <div className="lg:w-[70%] w-[85%] rounded-2xl lg:p-4 p-1 lg:my-16 my-4">
                  <div className="p-4">
                    <h2 className="lg:p-4 p-1 bg-[#E9E9ED] font-bold lg:text-3xl">
                      Whiteland Blissville 76 Price List
                    </h2>
                    <div className="overflow-x-auto">
                      <table className="min-w-full table-auto border-collapse border border-gray-300 lg:mt-5 mt-3">
                        <thead>
                          <tr className="bg-[#115585] text-left">
                            <th className="lg:px-4 lg:py-2 px-2 py-1 text-[10px] lg:text-lg text-white">BEDROOMS</th>
                            <th className="lg:px-4 lg:py-2 px-2 py-1 text-[10px] lg:text-lg text-white">SIZES</th>
                            <th className="lg:px-4 lg:py-2 px-2 py-1 text-[10px] lg:text-lg text-white">PRICE</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td className="border lg:px-4 lg:py-2 px-2 py-1 text-[10px] lg:text-lg">3 BHK (ZEFA)</td>
                            <td className="border lg:px-4 lg:py-2 px-2 py-1 text-[10px] lg:text-lg">2678 Sq. Ft. Onwards</td>
                            <td className="border lg:px-4 lg:py-2 px-2 py-1 text-[10px] lg:text-lg bg-[#52abbe] text-white cursor-pointer" onClick={showModal}>On Request</td>
                          </tr>
                          <tr>
                            <td className="border lg:px-4 lg:py-2 px-2 py-1 text-[10px] lg:text-lg">3.5 BHK (FAIA)</td>
                            <td className="border lg:px-4 lg:py-2 px-2 py-1 text-[10px] lg:text-lg">3497 Sq. Ft. Onwards</td>
                            <td className="border lg:px-4 lg:py-2 px-2 py-1 text-[10px] lg:text-lg bg-[#52abbe] text-white cursor-pointer" onClick={showModal}>On Request</td>
                          </tr>
                          <tr>
                            <td className="border lg:px-4 lg:py-2 px-2 py-1 text-[10px] lg:text-lg">
                              3.5 BHK + Maid's Room (FAIA)
                            </td>
                            <td className="border lg:px-4 lg:py-2 px-2 py-1 text-[10px] lg:text-lg">4053 Sq. Ft. Onwards</td>
                            <td className="border lg:px-4 lg:py-2 px-2 py-1 text-[10px] lg:text-lg bg-[#52abbe] text-white cursor-pointer" onClick={showModal}>On Request</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
              {/* Price List Section */}


              {/* Floor Plan Section */}
              <Element name="floorplan" className="element">
                <div className="flex flex-col items-start mx-auto max-w-7xl p-4">
                  <h2 className="text-2xl md:text-3xl font-bold text-[#082e6c] mb-4">
                    Our Plans
                  </h2>
                  <Tabs defaultActiveKey="1" className="w-full">
                    <TabPane tab="Plan 1" key="1">
                      <div className="flex justify-center items-center border-4 border-black w-80 h-80">
                        <Image
                          width={300}
                          height={300}
                          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5KUPelm1MaX_U6U2n8_4a3fdWL1N3k1e-iA&s"
                          alt="Plan 1"
                          className="shadow-md object-cover"
                        />
                      </div>
                    </TabPane>
                    <TabPane tab="Plan 2" key="2">
                      <div className="flex justify-center items-center border-4 border-black w-80 h-80">
                        <Image
                          width={300}
                          height={300}
                          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5KUPelm1MaX_U6U2n8_4a3fdWL1N3k1e-iA&s"
                          alt="Plan 2"
                          className="shadow-md object-cover"
                        />
                      </div>
                    </TabPane>
                  </Tabs>
                </div>
              </Element>

              {/* Location Advantage Section */}
              <Element name="location" className="element">
                <div className="bg-white py-8 px-4 lg:mt-16 mt-8">
                  <div className="max-w-7xl mx-auto">
                    <h2 className="text-2xl md:text-3xl font-bold text-[#082e6c] mb-6">
                      Whiteland Blissville 76 Location Advantages
                    </h2>
                    <div className="flex flex-col md:flex-row gap-6">
                      <div className="flex-1 flex items-stretch">
                        <img
                          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5KUPelm1MaX_U6U2n8_4a3fdWL1N3k1e-iA&s"
                          alt="Location"
                          className="w-full h-full object-cover rounded-lg shadow-md"
                        />
                      </div>
                      <div className="flex-1 flex flex-col justify-between space-y-4">
                        <div className="bg-gray-100 p-4 rounded-lg shadow flex-grow">
                          Close proximity to major business hubs
                        </div>
                        <div className="bg-gray-100 p-4 rounded-lg shadow flex-grow">
                          Easy access to public transportation
                        </div>
                        <div className="bg-gray-100 p-4 rounded-lg shadow flex-grow">
                          Nearby shopping centers and entertainment venues
                        </div>
                        <div className="bg-gray-100 p-4 rounded-lg shadow flex-grow">
                          Top-rated schools in the vicinity
                        </div>
                        <div className="bg-gray-100 p-4 rounded-lg shadow flex-grow">
                          Lush green surroundings
                        </div>
                        <div className="bg-gray-100 p-4 rounded-lg shadow flex-grow">
                          Proximity to healthcare facilities
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Element>

              {/* FAQs Section */}
              <Element name="faq" className="element">
                <div className="lg:mt-16 mt-8">
                  <h2 className="my-4 text-2xl font-bold text-[#082e6e]">
                    FAQ's
                  </h2>
                  <Collapse
                    items={items}
                    defaultActiveKey={["1"]}
                    onChange={onChange}
                  />
                </div>
              </Element>
            </div>
          </div>

          {/* Right Section (Sticky Form) */}
          <div className="w-full lg:w-1/3 lg:sticky lg:top-24 h-auto lg:h-screen lg:block hidden flex-shrink-0">
            <div className="shadow-lg lg:w-[90%] mx-auto flex flex-col bg-[#52abbe] my-20 px-4 lg:px-0 lg:my-0">
              <div className="h-[50px] w-[100px] mx-auto flex items-center mt-8  relative overflow-hidden ">
                <img
                  src="https://tse4.mm.bing.net/th?id=OIP.x7WnkIHcNbE6yvxtU6yUKAHaDB&pid=Api&P=0&h=180"
                  className="h-full w-full"
                />
              </div>
              <form className="flex flex-col gap-3 lg:px-8 px-3 lg:py-5 py-3">
                <h3 className="text-white text-xl text-center">
                  White Bliss
                </h3>
                <h3 className="text-white text-xl text-center">
                  Sector 70 , Gurgaon
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
                  rows="3"
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
                  className=" rounded py-2 text-white bg-[#115585] hover:border-bg-[#52abbe] hover:bg-[#082e6c] hover:text-white"
                />
              </form>

            </div>
          </div>
        </div>

        {/* gallery */}
        <div className="p-6">
          <h2 className="text-2xl text-center md:text-3xl font-bold text-[#082e6c] mt-16 mb-6">
            Gallery
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {[1, 2, 3].map((index) => (
              <div
                key={index}
                className="relative bg-gray-200 rounded-lg overflow-hidden shadow-md aspect-w-4 aspect-h-3" // Aspect ratio classes
              >
                <Image
                  src={`https://picsum.photos/400/300?random=${index}`} // Replace with your actual image URLs
                  alt={`Gallery Image ${index}`}
                  layout="fill" // Makes the image fill its container
                  objectFit="cover" // Ensures the image covers the container without distortion
                />
              </div>
            ))}
          </div>
        </div>
        {/* gallery */}
      </div>

      {/* Carousel */}
      <div className="flex flex-col lg:flex-row w-full lg:w-[99%] mx-auto pt-5 items-center">
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
        {/* <div className="w-full lg:w-1/2 p-6 flex justify-start lg:justify-end">
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
        </div> */}
      </div>
      <div className="w-full lg:w-[98%]  mx-auto mt-0 zz px-4 lg:px-0 mb-16">
        <Carousel
          arrows={true}
          waitForAnimate={true}
          infinite={true}
          autoplay
          dots={false}
          autoplaySpeed={2000}
          slidesToShow={4}
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
      {/* Carousel */}
    </>
  );
}