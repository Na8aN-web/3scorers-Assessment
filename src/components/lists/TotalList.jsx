import React from "react";
import profilePicture from "../../assets/user.png"

const TotalList = ({ title, users }) => {
  return (
    <div className="form-container">
      <h2 className="text-[20px] sm:text-[24px] font-semibold mb-2 font-roboto">{title}</h2>
      <div className="scrollbar-container overflow-y-scroll bg-white rounded-lg shadow-md w-[280px] sm:w-[350px] md:w-[540px] h-[350px]">
        <ul className="flex flex-col p-0 sm:p-4 w-full">
          {users.map((user, index) => (
            <li key={index} className="flex items-center justify-between p-2">
              <div className="flex items-center gap-2">
                <img
                  src={profilePicture}
                  alt={user.name}
                  className="w-14 h-14"
                />
                <p className="font-roboto text-[13px] sm:text-[16px] font-bold">{user.firstName} {user.lastName}</p>
              </div>
              <div>
                <a href="#" className="text-textGreen text-[12px] sm:text-[14px]">
                  View Details
                </a>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TotalList;
