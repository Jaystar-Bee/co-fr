import React from "react";

function TheHeader() {
  return (
    <header className=" px-3 xs:px-6 sm:px-12 lg:px-20 py-6 flex items-center justify-between">
      <div className="xs:flex-1">
        <h1 className="text-primary font-bold text-xl">Logo</h1>
      </div>
      {/* // react routes */}
      <ul className="hidden md:flex flex-1  items-center justify-center space-x-20 text-white text-sm lg:text-base">
        <li className="cursor-pointer hover:text-gray-300 duration-200">
          Feature
        </li>
        <li className="cursor-pointer hover:text-gray-300 duration-200">
          News
        </li>
      </ul>
      <div className="xs:flex-1 flex items-center justify-end  space-x-5 text-sm lg:text-base">
        <button className="border border-primary text-primary px-2 xs:px-4 sm:px-6 font-medium py-1 hover:text-neutral hover:bg-primary duration-200">
          Sign Up
        </button>
        <button className="bg-primary border border-primary px-2 xs:px-4 sm:px-6 py-1 font-medium text-neutral hover:bg-primary-500 duration-200 hover:border-primary-500">
          Log In
        </button>
      </div>
    </header>
  );
}

export default TheHeader;
