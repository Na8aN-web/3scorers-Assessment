import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  FaSignOutAlt,
  FaChartLine,
  FaUserFriends,
  FaUserCog,
} from "react-icons/fa";
import logo from "../assets/logo.png";

const Sidebar = ({ isSidebarOpen }) => {
  return (
    <div
    className={`fixed lg:relative h-full w-3/4 lg:w-1/6 bg-bgGreen text-white transition-transform duration-300 transform z-50 ${
      isSidebarOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
    }`}
    >
      <div className="flex justify-center">
        <img className="my-4 " src={logo} alt="logo" />
      </div>
      <hr className="w-full border-t border-white mb-4"></hr>
      <div className="mb-4"></div>
      <nav className="w-full">
        <NavLink
          to="/dashboard/overview"
          className="text-white hover:text-black hover:bg-[#51FFFF] py-1 justify-center flex items-center w-full"
          style={({ isActive }) => {
            return {
              color: isActive ? "black" : "",
              backgroundColor: isActive ? "#51FFFF" : "",
            };
          }}
        >
          <span className="flex flex-start items-center p-3 font-roboto">
            <FaChartLine className="mr-2" />
            Overview
          </span>
        </NavLink>
        <NavLink
          to="/dashboard/users"
          className=" text-white hover:text-black hover:bg-[#51FFFF] py-1 justify-center flex items-center w-full"
          style={({ isActive }) => {
            return {
              color: isActive ? "black" : "",
              backgroundColor: isActive ? "#51FFFF" : "",
            };
          }}
        >
          <span className="flex flex-start items-center p-3 font-roboto">
            <FaUserFriends className="mr-2" />
            Users
          </span>
        </NavLink>
        <NavLink
          to="/dashboard/admins"
          className=" text-white hover:text-black hover:bg-[#51FFFF] py-1 justify-center flex items-center w-full"
          style={({ isActive }) => {
            return {
              color: isActive ? "black" : "",
              backgroundColor: isActive ? "#51FFFF" : "",
            };
          }}
        >
          <span className="flex flex-start items-center p-3 font-roboto">
            <FaUserCog className="mr-2" />
            Admins
          </span>
        </NavLink>
        <NavLink
          to="/login"
          className=" text-white hover:text-black hover:bg-[#51FFFF] py-1 justify-center flex items-center w-full"
          style={({ isActive }) => {
            return {
              color: isActive ? "black" : "",
              backgroundColor: isActive ? "#51FFFF" : "",
            };
          }}
        >
          <span className="flex flex-start items-center p-3 font-roboto text-left">
            <FaSignOutAlt className="mr-2" />
            Logout
          </span>
        </NavLink>
      </nav>
    </div>
  );
};

export default Sidebar;
