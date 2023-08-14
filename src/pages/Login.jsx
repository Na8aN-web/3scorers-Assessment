import React, { useState } from "react";
import logo from "../assets/logo.png";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [signupError, setSignupError] = useState("");
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const handleSubmitLogin = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await axios.post(
        process.env.REACT_APP_LOGIN_URL,
        {
          email: loginData.email,
          password: loginData.password,
        },
        {
          headers: { "Content-Type": "application/json" },
        }
      );

      localStorage.setItem("accessToken", response.data.accessToken);
      localStorage.setItem("refreshToken", response.data.refreshToken);
      localStorage.setItem("user", JSON.stringify(response.data.data));

      setLoading(false);
      navigate("/dashboard/overview");
    } catch (error) {
      setLoading(false); 
      if (error.response && error.response.data && error.response.data.data) {
        setSignupError(error.response.data.data);
      } else {
        setSignupError("An error occurred during signup.");
      }
    }
  };

  const handleInputChangeLogin = (e) => {
    const { name, value } = e.target;
    setLoginData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div className="flex flex-col items-center justify-start h-screen bg-bgGreen">
      <div className="text-center p-8">
        <img src={logo} alt="logo" className="mb-4 mx-auto" />
      </div>
      <form
        onSubmit={handleSubmitLogin}
        className="bg-white rounded-lg shadow sm:pt-24 pt-12 sm:p-12 p-8 sm:w-[500px] w-[300px]"
      >
        <div className="mb-4">
          <label
            htmlFor="email"
            className="block sm:text-[16px] text-[13px] font-medium text-black font-roboto"
          >
            Email Address
          </label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email"
            value={loginData.email}
            onChange={handleInputChangeLogin}
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
            type="password"
            id="password"
            name="password"
            placeholder="Enter your password"
            value={loginData.password}
            onChange={handleInputChangeLogin}
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
            className="bg-bgGreen hover:bg-white hover:text-[#008F8F] border-2 hover:border-[#008F8F] text-white px-24 py-3 rounded-lg sm:my-20 my-4 font-roboto"
            disabled={loading}
          >
            {loading ? "Loading..." : "Login"} 
          </button>
        </div>
        <h5 className="flex justify-center font-roboto p-2"> <a href="/" className="text-textGreen">Create an account</a></h5>
      </form>
    </div>
  );
};

export default Login;
