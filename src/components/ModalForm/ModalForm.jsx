import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { PhoneInput } from "react-international-phone";
import "react-international-phone/style.css";

const ModalForm = ({ isOpen, onClose }) => {
  const [phone, setPhone] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    if (!username) newErrors.username = "Username is required";
    if (!phone || phone.length < 10)
      newErrors.phone = "Valid phone number is required";
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email))
      newErrors.email = "Valid email is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // Proceed with form submission or further logic
      console.log({ username, phone, email });
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogTrigger></DialogTrigger>
      <DialogContent className="max-w-lg mx-auto p-6 max-sm:w-[90%] rounded-sm">
        <DialogHeader>
          <DialogTitle className="text-center text-xl sm:text-2xl">
            Rent Duniya
          </DialogTitle>
          <p className="text-center text-sm sm:text-base">Sector 48, Gurgaon</p>
          <DialogDescription>
            <form onSubmit={handleSubmit}>
              <div className="w-full max-w-full">
                <div className="bg-white rounded px-4 pt-6 pb-8">
                  <div className="mb-4">
                    <label
                      className="flex flex-start text-gray-700 text-sm font-bold mb-2"
                      htmlFor="username"
                    >
                      Username
                    </label>
                    <input
                      className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                        errors.username ? "border-red-500 " : ""
                      }`}
                      id="username"
                      type="text"
                      placeholder="Name"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                    />
                    {errors.username && (
                      <p className="text-red-500 text-xs text-left my-2">
                        {errors.username}
                      </p>
                    )}
                  </div>

                  {/* Phone Number Input */}
                  <div className="mb-6">
                    <label
                      className="flex flex-start text-gray-700 text-sm font-bold mb-2"
                      htmlFor="telephone"
                    >
                      Phone Number
                    </label>
                    <PhoneInput
                      id="telephone"
                      defaultCountry="in"
                      value={phone}
                      onChange={setPhone}
                      className={`shadow ${
                        errors.phone ? "border-red-500" : ""
                      }`}
                    />
                    {errors.phone && (
                      <p className="text-red-500 text-xs text-left my-2">
                        {errors.phone}
                      </p>
                    )}
                  </div>

                  {/* Email Input */}
                  <div className="mb-6">
                    <label
                      className="flex flex-start text-gray-700 text-sm font-bold mb-2"
                      htmlFor="email"
                    >
                      E-mail
                    </label>
                    <input
                      className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                        errors.email ? "border-red-500" : ""
                      }`}
                      id="email"
                      type="email"
                      placeholder="Email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                    {errors.email && (
                      <p className="text-red-500 text-xs text-left my-2">
                        {errors.email}
                      </p>
                    )}
                  </div>

                  {/* Message Textarea */}
                  <div className="mb-6">
                    <label
                      className="flex flex-start text-gray-700 text-sm font-bold mb-2"
                      htmlFor="message"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      placeholder="Enter your message"
                    ></textarea>
                  </div>

                  {/* Submit Button */}
                  <div className="flex items-center justify-between">
                    <button
                      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                      type="submit"
                    >
                      Submit
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default ModalForm;
