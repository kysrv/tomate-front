import React, { useState } from "react";

const Brand = ({}) => {
  return (
    <div className="flex flex-col">
      <div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#000000"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="12" cy="12" r="10"></circle>
          <polyline points="12 6 12 12 16 14"></polyline>
        </svg>
      </div>
      <h1 className="text-5xl text-gray-800 font-bold">Tomate</h1>
      <p className="w-max mx-auto  text-gray-500">
        Control and monitorize your work time.
      </p>
    </div>
  );
};

export default Brand;
