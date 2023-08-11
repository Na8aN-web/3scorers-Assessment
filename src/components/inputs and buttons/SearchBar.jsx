import React from "react";
import { FaSearch } from "react-icons/fa";

const SearchBar = ({ value, onChange }) => { // Add the 'value' and 'onChange' props
  return (
    <div className=" relative z-0">
      <input
        type="text"
        placeholder="Search"
        className="px-10 py-2 border rounded-md w-full focus:outline-none text-[#828282] font-roboto text-[16px]"
        value={value} // Set the input value to the provided 'value' prop
        onChange={(e) => onChange(e.target.value)} // Call the 'onChange' prop with the new value
      />
      <div className="absolute left-4 top-1/2 transform -translate-y-1/2">
        <FaSearch color="gray" />
      </div>
    </div>
  );
};

export default SearchBar;
