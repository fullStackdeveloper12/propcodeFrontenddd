import React from "react";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";
import { GoogleAuthProvider, signInWithPopup, getAuth } from "firebase/auth";
import { signInSuccess } from "@/redux/user/userSlice";
import { app } from "../../firebase.js";
import { useDispatch } from "react-redux";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Oauth = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleGoogleClick = async () => {
    try {
      const provider = new GoogleAuthProvider();
      const auth = getAuth(app);
      const result = await signInWithPopup(auth, provider);

      // Create payload for backend
      const payload = {
        name: result.user.displayName,
        email: result.user.email,
        photo: result.user.photoURL,
      };

      // Send payload to the backend API
      const response = await axios.post(
        "https://propcodebackendadminpaneltesting.onrender.com/api/googlesignin",
        payload
      );
      console.log("Response", response);
      console.log("Response Data", response.data);

      // Dispatch action to store
      dispatch(signInSuccess(response.data));

      // Navigate to dashboard on success
      navigate("/dashboard");
    } catch (err) {
      console.log("Google OAuth error: ", err);
    }
  };

  return (
    <Link
      className="w-full rounded-full flex items-center justify-center gap-2 text-sm py-2 px-4 border border-gray-300 hover:bg-gray-50 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
      onClick={handleGoogleClick}
    >
      <FcGoogle className="text-[#4285F4] text-xl" />
      <span className="text-[#757575] font-medium">Sign in with Google</span>
    </Link>
  );
};

export default Oauth;
