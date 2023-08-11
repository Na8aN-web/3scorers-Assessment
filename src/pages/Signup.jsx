import React, { useState } from "react";
import logo from "../assets/logo.png";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Signup = () => {
  const navigate = useNavigate();
  const [signupError, setSignupError] = useState("");
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    username: "",
    password: "",
    repeat_password: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(process.env.REACT_APP_SIGNUP_URL, {
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        username: formData.username,
        password: formData.password,
        repeat_password: formData.repeat_password,
      });

      navigate("/dashboard/overview");
      localStorage.setItem("accesstoken", response.data.token);
      localStorage.setItem("user", JSON.stringify(response.data.data));
    } catch (error) {
      if (error.response && error.response.data && error.response.data.data) {
        setSignupError(error.response.data.data);
      } else {
        setSignupError("An error occurred during signup.");
      }
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  return (
    <div className="flex flex-col md:flex-row justify-center items-center h-screen w-full">
      <div className="w-full md:w-1/2 bg-bgGreen h-screen flex justify-center overflow-hidden items-center flex-col">
        <img src={logo} alt="logo" className="mb-4" />
        <h1 className="sm:text-[40px] text-[24px] text-white font-bold font-roboto">
          Create Account
        </h1>
        <h6 className="text-[#C8C8C8] font-roboto font-bold sm:text-[16px] text-[13px] w-[250px] text-center">
          Join the community and have fun predicting!
        </h6>
      </div>
      <form
        onSubmit={handleSubmit}
        className="bg-white sm:p-16 p-8 md:pt-48 pt-16 rounded shadow w-full md:w-1/2 h-screen form-container overflow-scroll"
      >
        <div className="mb-8">
          <label
            htmlFor="firstName"
            className="block sm:text-[16px] text-[13px] font-medium text-black font-roboto"
          >
            First Name
          </label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            placeholder="Enter your first name"
            value={formData.firstName}
            onChange={handleInputChange}
            required
            className="mt-1 p-4 block w-full sm:text-sm border-black rounded-md border-[1px] sm:text-[16px] text-[13px] font-roboto"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="lastName"
            className="block sm:text-[16px] text-[13px] font-medium text-black font-roboto"
          >
            Last Name
          </label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            placeholder="Enter your last name"
            value={formData.lastName}
            onChange={handleInputChange}
            required
            className="mt-1 p-4 block w-full sm:text-sm border-black rounded-md border-[1px] sm:text-[16px] text-[13px] font-roboto"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="userName"
            className="block sm:text-[16px] text-[13px] font-medium text-black font-roboto"
          >
            UserName
          </label>
          <input
            type="text"
            id="userName"
            name="username"
            placeholder="Enter your Username"
            value={formData.username}
            onChange={handleInputChange}
            required
            className="mt-1 p-4 block w-full sm:text-sm border-black rounded-md border-[1px] sm:text-[16px] text-[13px] font-roboto"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="email"
            className="block sm:text-[16px] text-[13px] font-medium text-black font-roboto"
          >
            Email Address
          </label>
          <input
            type="text"
            id="email"
            name="email"
            placeholder="Enter your Email Address"
            value={formData.email}
            onChange={handleInputChange}
            required
            className="mt-1 p-4 block w-full sm:text-sm border-black rounded-md border-[1px] sm:text-[16px] text-[13px] font-roboto"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="password"
            className="block sm:text-[16px] text-[13px] font-medium text-black font-roboto"
          >
            Password
          </label>
          <input
            type="text"
            id="password"
            name="password"
            placeholder="Enter your Password"
            value={formData.password}
            onChange={handleInputChange}
            required
            className="mt-1 p-4 block w-full sm:text-sm border-black rounded-md border-[1px] sm:text-[16px] text-[13px] font-roboto"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="confirmPassword"
            className="block sm:text-[16px] text-[13px] font-medium text-black font-roboto"
          >
            Confirm Password
          </label>
          <input
            type="text"
            id="repeat_password"
            name="repeat_password"
            placeholder="Confirm your password"
            value={formData.repeat_password}
            onChange={handleInputChange}
            required
            className="mt-1 p-4 block w-full sm:text-sm border-black rounded-md border-[1px] sm:text-[16px] text-[13px] font-roboto"
          />
        </div>
        {signupError && (
          <p className="text-red-500 mt-2">{signupError}</p>
        )}
        <div className="flex w-full justify-center">
          <button
            type="submit"
            className="bg-bgGreen hover:bg-white hover:text-[#008F8F] border-2 hover:border-[#008F8F] text-white px-24 py-3 rounded-lg mt-24 font-roboto"
          >
          Sign Up
          </button>
          
        </div>
        <h5 className="flex justify-center font-roboto p-2">Have an account? <a href="/login" className="text-textGreen">LOGIN</a></h5>
      </form>

    </div>
  );
};

export default Signup;
