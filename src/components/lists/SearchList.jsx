import React from "react";
import profilePicture from "../../assets/user.png"

const SearchList = ({ title, users }) => {
  return (
    <div className="form-container">
      <div className="scrollbar-container overflow-y-scroll bg-white shadow-md w-full h-[400px]">
        <ul className="flex flex-col p-4 w-full">
        {users.length === 0 ? (
            <li className="flex items-center justify-center p-2">
              <p className="font-roboto text-[16px] text-gray-600">No {title} found.</p>
            </li>
          ) : (
            users.map((user, index) => (
            <li key={index} className="flex items-center justify-between p-2">
              <div className="flex items-center gap-2">
                <img
                  src={profilePicture}
                  alt={user.firstName}
                  className="w-14 h-14"
                />
                <p className="font-roboto text-[13px] sm:text-[16px] font-bold">{user.firstName} {user.lastName}</p>
              </div>
              <div>
                <a href="#" >
                  <button className="text-black bg-secGreen p-0 sm:p-2 text-[12px] sm:text-[14px] font-roboto font-medium border-2 hover:border-black  rounded">View Details</button>
                </a>
              </div>
            </li>
          )))}
        </ul>
      </div>
    </div>
  );
};

export default SearchList;
