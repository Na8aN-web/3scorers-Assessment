import React, { useState } from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

const Layout = ({ children, title }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  return (
    <div className="flex h-screen">
      <Sidebar isSidebarOpen={isSidebarOpen}/>
      <div className="flex-1 flex flex-col w-3/4 lg:w-5/6">
        <Navbar title={title} toggleSidebar={toggleSidebar}/>
        <div className="flex-1 bg-[#f4f4f4] overflow-y-auto p-0 sm:p-4">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Layout;
