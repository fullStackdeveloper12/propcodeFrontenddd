import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ForgotPassword = () => {
  const [formData, setFormData] = useState({ email: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "https://propcodebackendadminpaneltesting.onrender.com/api/auth/forgotpassword",
        formData
      );
      console.log(response.data);
      setFormData({ email: "" });
      toast.success("Check your email for the reset link!");
    } catch (err) {
      console.error("Error sending reset link:", err);
      toast.error("Failed to send reset link. Please try again.");
    }
  };

  return (
    <>
      <div className="bg-black">
        <div className="bg-[#d3e0ff] z-[40] min-h-screen flex items-center justify-center p-4">
          <div className="w-full max-w-4xl bg-white rounded-2xl overflow-hidden flex flex-col lg:flex-row shadow-lg">
            <div className="lg:w-1/2 lg:block md:block hidden bg-[#082e6c] text-white flex-col justify-evenly items-center p-6">
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
            <div className="lg:w-1/2 flex flex-col gap-8 items-center p-6 lg:p-8">
              <div className="text-center">
                <h2 className="text-[#082e6c] text-2xl lg:text-3xl font-semibold mb-2">
                  Reset Password
                </h2>
                <p className="text-[#888]">
                  Please enter your email to receive a reset link
                </p>
              </div>
              <form
                className="w-full max-w-md flex flex-col gap-8"
                onSubmit={handleSubmit}
              >
                <input
                  className="rounded-full w-full text-center text-sm py-2 px-4 border border-gray-300 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200 transition-all"
                  placeholder="Enter your email id"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                />
                <button className="w-full py-2 bg-blue-900 text-white rounded-xl hover:bg-[#082e6c] transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                  Send Reset Link
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ForgotPassword;
