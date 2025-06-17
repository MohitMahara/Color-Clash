import React, { useState } from "react";
import { AuthHeader } from "./AuthHeader";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { UseAuth } from "../../contexts/authContext";
import {toast} from "react-hot-toast";

export const LoginPage = () =>{

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const {userInfo, setUserInfo} = UseAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) =>{
    e.preventDefault();

    try {
       const res = await axios.post(`${import.meta.env.VITE_SERVER_API}/api/v1/auth/login`, {
        email, password
       });

       if(res.data.success){

          setUserInfo({
            ...userInfo,
            user: res.data.user,
            token: res.data.token,
        });

        localStorage.setItem("colorclash", JSON.stringify(res.data));
        toast.success(res.data.msg);

        setTimeout(() => {
          navigate('/');

        }, 1500)
       }
    } catch (error) {
       toast.error(error.message);
    }
  }

  return (
    <>
    <AuthHeader/>
    <div className="bg-gray-100 flex items-center justify-center h-screen">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Login</h2>
        <form>
          <div className="mb-4">
            <label className="block text-gray-700">Email</label>
            <input 
              type="email" 
              className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Password</label>
            <input 
              type="password" 
              className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
         
          <button  type="submit"   className="w-full bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600 transition" onClick={handleSubmit}>
            Log in
          </button>
        </form>
        <p className="text-sm text-gray-600 mt-4 text-center">
          Don't have an account? <Link to="/register" className="text-blue-500">Register</Link>
        </p>
      </div>
    </div>
    </>
  )
}