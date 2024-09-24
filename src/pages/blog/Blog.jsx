import React from "react";
import BreadCrumb from "../../components/BreadCrumb/BreadCrumb.jsx";
import blogvideo from "/Video/blog.mp4";
import { Link } from "react-router-dom";
import queryString from "query-string"; // For parsing and creating query strings
import { Card } from "@/components/ui/card";

const data = [
  {
    id: 1,
    name: "Tech Innovations",
    heading: "The Future of AI in Everyday Life",
    readingTime: "5 min",
    paragraph:
      "Artificial intelligence is becoming more integrated into our daily routines...",
    description:
      "This blog explores the potential future impacts of AI on various sectors...",
    image1:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzDIBfifSb7zbfKlZF9RTYVtbqfNkd3imcZQ&s",
    image2:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzDIBfifSb7zbfKlZF9RTYVtbqfNkd3imcZQ&s",
    date: "2024-09-19",
  },
  {
    id: 2,
    name: "Health & Wellness",
    heading: "The Importance of Mental Health",
    readingTime: "4 min",
    paragraph:
      "Mental health is as important as physical health, and yet it is often neglected...",
    description:
      "A comprehensive look at the importance of mental health awareness...",
    image1:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4LHQPrlsK3g77FnKOdvcDEAUdIpvP4RocYg&s",
    image2:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4LHQPrlsK3g77FnKOdvcDEAUdIpvP4RocYg&s",
    date: "2024-09-18",
  },
  {
    id: 3,
    name: "Travel Diaries",
    heading: "Top 10 Destinations for Solo Travelers",
    readingTime: "6 min",
    paragraph:
      "Solo travel has become a popular trend, allowing individuals to explore the world...",
    description:
      "Discover the top 10 destinations that are perfect for solo adventurers...",
    image1:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5upBT9ESCl3SE8gk554r-hguIeyU6gknnyQ&s",
    image2:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5upBT9ESCl3SE8gk554r-hguIeyU6gknnyQ&s",
    date: "2024-09-17",
  },
  {
    id: 4,
    name: "Business Insights",
    heading: "How to Build a Sustainable Startup",
    readingTime: "7 min",
    paragraph:
      "Building a sustainable startup involves more than just profits, it requires a balance of environmental, social, and financial goals...",
    description:
      "This article delves into the steps for building a business that thrives sustainably...",
    image1:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzDIBfifSb7zbfKlZF9RTYVtbqfNkd3imcZQ&s",
    image2:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzDIBfifSb7zbfKlZF9RTYVtbqfNkd3imcZQ&s",
    date: "2024-09-16",
  },
  {
    id: 5,
    name: "Food & Culture",
    heading: "Exploring Global Culinary Traditions",
    readingTime: "8 min",
    paragraph:
      "Food is a gateway to understanding different cultures around the world...",
    description:
      "An exploration of diverse culinary traditions that have shaped societies globally...",
    image1:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSdYbVH4AbqLJP-mRU-CLgPDgTlUztJn_s7A&s",
    image2:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSdYbVH4AbqLJP-mRU-CLgPDgTlUztJn_s7A&s",
    date: "2024-09-15",
  },
  {
    id: 6,
    name: "Financial Literacy",
    heading: "Tips for Effective Personal Budgeting",
    readingTime: "5 min",
    paragraph:
      "Managing your personal finances effectively is key to financial stability...",
    description:
      "This blog offers practical tips and strategies for creating and sticking to a personal budget...",
    image1:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzajkJdqAp5ATr-nD0C7g9Y5LqZjiZGCeNgA&s",
    image2:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzajkJdqAp5ATr-nD0C7g9Y5LqZjiZGCeNgA&s",
    date: "2024-09-14",
  },
];

const Blog = () => {
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
      <div className="w-full px-4 sm:px-6 lg:px-8 py-5 mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {data.map(
            ({
              id,
              image1,
              name,
              readingTime,
              date,
              heading,
              paragraph,
              description,
            }) => (
              <Link
                to={{
                  pathname: `/${id}`,
                  search: queryString.stringify({
                    id,
                    image1,
                    name,
                    readingTime,
                    date,
                    heading,
                    paragraph,
                    description,
                  }),
                }}
                key={id}
                aria-label={`View details for ${heading}`}
              >
                <div className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300">
                  <Card>
                    <img
                      src={image1}
                      alt={name}
                      className="w-full h-44 sm:h-52 object-cover"
                    />
                    <div className="p-4">
                      <p className="text-gray-600 mb-2 text-sm">
                        {readingTime} | {date}
                      </p>
                      <h2 className="text-lg font-semibold mb-2 truncate">
                        {heading}
                      </h2>
                      <p className="text-gray-700 text-sm line-clamp-3">
                        {paragraph}
                      </p>
                    </div>
                  </Card>
                </div>
              </Link>
            )
          )}
        </div>
      </div>
    </>
  );
};

export default Blog;
