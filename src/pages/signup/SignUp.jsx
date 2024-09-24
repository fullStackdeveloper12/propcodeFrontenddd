import React, { useState } from "react";
import { ChevronDownIcon } from "lucide-react";
import { Link } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import Oauth from "@/components/oauth/Oauth";

const SignUp = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: "",
    phonenumber: "",
    email: "",
    password: "",
    role: "",
  });

  // Handle input changes
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Make the API call to register the user (adjust the URL to match your API)
      const response = await axios.post(
        "https://propcodebackendadminpaneltesting.onrender.com/api/auth/signup",
        formData
      );
      toast.success("User registered successfully!");
      setFormData({
        username: "",
        phonenumber: "",
        email: "",
        password: "",
        role: "",
      });
      navigate("/signin");
      console.log(response.data);
    } catch (error) {
      // Handle error
      toast.error("Registration failed. Please try again.");
      console.error(error);
    }
  };

  return (
    <>
      <div className="bg-black">
        <div className="bg-[#d3e0ff] z-[40] min-h-screen flex items-center justify-center p-4">
          <div className="w-full max-w-4xl bg-white rounded-2xl overflow-hidden  flex flex-col lg:flex-row shadow-lg">
            <div className="lg:w-1/2 lg:block md:block hidden bg-[#082e6c] text-white  flex-col justify-evenly items-center p-6">
              <div className="flex items-center gap-2 mb-6">
                <img src="" alt="Logo" className="w-10 h-10" />
                <h1 className="bg-[#52a5be] text-2xl lg:text-3xl p-1 rounded">
                  PROP<span className="bg-[#082e6c]">CODES</span>
                </h1>
              </div>
              <div className="my-6 lg:block md:block hidden">
                <img
                  src="https://economictimes.indiatimes.com/thumb/msid-54865485,width-1200,height-900,resizemode-4,imgsize-59263/rely-on-experts-if-buying-real-estate-in-another-city.jpg?from=mdr"
                  alt="Image"
                  className="max-w-full h-auto"
                />
              </div>
              <div className="text-center">
                <p className="text-2xl lg:text-3xl mb-4">
                  "Find Your best place here"
                </p>
                <p className="text-sm lg:text-base font-light max-w-md">
                  A home is not just a place, it's a feeling. It's where you
                  find peace, joy, and a sense of belonging. Discover your
                  perfect home with us.
                </p>
              </div>
            </div>
            <div className="lg:w-1/2 flex flex-col gap-6 items-center p-6 lg:p-8">
              <div className="text-center">
                <h2 className="text-[#52a5be] text-2xl lg:text-3xl font-semibold mb-2">
                  Sign Up
                </h2>
                <p className="text-[#888]">Please enter your credentials</p>
              </div>
              <form
                className="w-full max-w-md flex flex-col gap-4"
                onSubmit={handleSubmit}
              >
                <input
                  className="rounded-full w-full text-center text-sm py-2 px-4 border border-gray-300 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200 transition-all"
                  placeholder="Enter your full name"
                  name="username"
                  value={formData.username}
                  onChange={handleChange}
                  required
                />
                <input
                  className="rounded-full w-full text-center text-sm py-2 px-4 border border-gray-300 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200 transition-all"
                  placeholder="Enter mobile number"
                  name="phonenumber"
                  value={formData.phonenumber}
                  onChange={handleChange}
                  required
                />
                <input
                  className="rounded-full w-full text-center text-sm py-2 px-4 border border-gray-300 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200 transition-all"
                  placeholder="Enter your email id"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                />
                <input
                  className="rounded-full w-full text-center text-sm py-2 px-4 border border-gray-300 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200 transition-all"
                  type="password"
                  placeholder="Enter your Password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                />
                <div className="relative">
                  <select
                    className="rounded-full w-full text-sm py-2 px-4 border border-gray-300 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200 transition-all appearance-none"
                    name="role"
                    value={formData.role}
                    onChange={handleChange}
                  >
                    <option value="" disabled>
                      Select your role
                    </option>
                    <option value="builder">Builder</option>
                    <option value="broker">Broker</option>
                    <option value="agent">Agent</option>
                  </select>
                  <ChevronDownIcon
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none"
                    size={20}
                  />
                </div>
                <button className="w-full py-2 bg-blue-900 text-white rounded-xl hover:bg-[#082e6c] transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                  Sign Up
                </button>
                <p className="text-center text-sm">OR</p>
                <Oauth />
                <p className="text-center text-sm">
                  Already have an account?{" "}
                  <Link to="/signin" className="text-blue-600 hover:underline">
                    Sign in
                  </Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
