import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { signOut, updateUser } from "@/redux/user/userSlice";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { Modal } from "antd"; // Import Ant Design Modal
import "react-toastify/dist/ReactToastify.css";

const EditModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const { currentUser } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username:
      currentUser?.data?.createdUser?.username ||
      currentUser?.validUser?.username ||
      "",
    email:
      currentUser?.data?.createdUser?.email ||
      currentUser?.validUser?.email ||
      "",
    phonenumber: currentUser?.validUser?.phonenumber || "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put(
        "https://propcodebackendadminpaneltesting.onrender.com/api/auth/updateprofile",
        formData,
        {
          headers: {
            Authorization: `Bearer ${currentUser.token}`,
          },
        }
      );
      dispatch(updateUser(response.data.data));
      toast.success("Profile updated successfully!");
      onClose(); // Close the modal after update
    } catch (err) {
      console.error("Error updating profile:", err);
      toast.error("Error updating profile. Please try again.");
    }
  };

  const handleDelete = () => {
    Modal.confirm({
      title: "Confirm Deletion",
      content:
        "Are you sure you want to delete your profile? This action cannot be undone.",
      okText: "Delete",
      okType: "danger",
      cancelText: "Cancel",
      onOk: async () => {
        try {
          await axios.delete(
            "https://propcodebackendadminpaneltesting.onrender.com/api/deleteprofile",
            {
              headers: {
                Authorization: `Bearer ${currentUser.token}`,
              },
            }
          );
          dispatch(signOut());
          navigate("/");
          toast.success("Profile deleted successfully!");
        } catch (err) {
          console.error("Error deleting profile:", err);
          toast.error("Error deleting profile. Please try again.");
        }
      },
    });
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-lg w-96 p-6">
        <h2 className="text-xl font-semibold mb-4">Edit Profile</h2>
        <form onSubmit={handleUpdate}>
          <label className="block text-sm font-medium text-gray-700">
            Username
          </label>
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
            required
            className="mt-1 p-2 border rounded w-full"
          />
          <label className="block text-sm font-medium text-gray-700 mt-4">
            Email
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="mt-1 p-2 border rounded w-full"
          />
          <label className="block text-sm font-medium text-gray-700 mt-4">
            Phone Number
          </label>
          <input
            type="text"
            name="phonenumber"
            value={formData.phonenumber}
            onChange={handleChange}
            required
            className="mt-1 p-2 border rounded w-full"
          />
          <div className="mt-6 flex justify-between">
            <button
              type="button"
              className="text-gray-500 hover:text-gray-700"
              onClick={onClose}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
            >
              Update
            </button>
          </div>
        </form>
        <button
          onClick={handleDelete}
          className="mt-4 text-red-600 hover:text-red-800"
        >
          Delete Profile
        </button>
      </div>
    </div>
  );
};

export default EditModal;
