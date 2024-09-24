import React from "react";
import { Search } from "lucide-react";
import { Link } from "react-router-dom";

const SearchBar = () => {
  return (
    <div className="flex justify-center items-center p-4">
      <div className="relative">
        <div className="bg-[#00375a] w-[600px] mx-auto rounded-t-3xl flex justify-evenly p-3 text-white font-bold">
          <Link to="#">BUY</Link>
          <Link to="#">RENT</Link>
          <Link to="#">COMMERCIAL</Link>
          <Link to="#">PG</Link>
          <Link to="#">PLOTS</Link>
        </div>
        <input
          type="text"
          placeholder="Search by Locality, Landmark, Project, Builder"
          className="w-[700px] px-4 py-4 pl-10 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
    </div>
  );
};

export default SearchBar;
