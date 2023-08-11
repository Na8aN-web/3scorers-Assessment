import React from "react";

const SelectButton = ({ options }) => {
  return (
    <div className="relative">
      <select className="appearance-none bg-white border rounded-md w-full px-4 py-2 pr-8 focus:outline-none">
        {options.map((option, index) => (
          <option
            key={index}
            value={option}
            className="py-8 px-8 text-[12px] sm:text-[14px] font-roboto"
          >
            {option}
          </option>
        ))}
      </select>
      <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
        <svg
          className="w-4 h-4 text-gray-500"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 9l-7 7-7-7"
          ></path>
        </svg>
      </div>
    </div>
  );
};

export default SelectButton;
