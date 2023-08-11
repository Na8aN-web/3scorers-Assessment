import React from "react";
import profile from "../assets/profile.png";

const Navbar = ({ title, toggleSidebar }) => {
  const user = JSON.parse(localStorage.getItem("user"));
  return (
    <div className="flex justify-between items-center bg-white shadow-custom p-4">
      <div className="flex items-center">
        <button
          onClick={toggleSidebar}
          className="lg:hidden text-black font-semibold text-[32px] font-roboto pl-4 focus:outline-none z-50"
        >
          &#9776;
        </button>
        <h2 className="text-textGreen font-semibold text-[20px] sm:text-[32px] font-roboto pl-4">
          {title}
        </h2>
      </div>
      <div className="bg-white p-4 flex items-center justify-center">
        <img
          src={profile}
          alt="Profile"
          className="w-10 h-10 rounded-full mr-2"
        />
        <div className="flex flex-col text-center">
          <span className="text-gray-700 font-semibold text-left">
            {user.firstName} {user.lastName}
          </span>
          <span className="text-sm text-gray-500 text-left">{user.role}</span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
