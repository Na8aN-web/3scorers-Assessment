import React from "react";

const TotalNumberCard = ({ title, number, icon: Icon }) => {
  return (
    <a href={`/dashboard/${title}`}>
      <div className="bg-bgGreen hover:bg-[#004F4F] rounded-2xl p-4 w-[280px] sm:w-[350px] h-[170px] shadow-md flex justify-between items-center">
        <div>
          <p className="text-white text-[16px] font-roboto">Total Number of {title}</p>
          <p className="text-[28px] font-semibold text-white font-roboto">
            {number}
          </p>
        </div>
        <div className="rounded-full bg-white p-3">
          <Icon className="text-textGreen text-3xl" />
        </div>
      </div>
    </a>
  );
};

export default TotalNumberCard;
