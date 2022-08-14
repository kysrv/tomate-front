import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const NavBarButton = (props: any) => {
  const { to } = props;
  const location = useLocation();

  const bgColorCSS = location.pathname.includes(`/${to}`)
    ? "text-gray-200 bg-gray-700"
    : "text-gray-400";

  const comp = (
    <div
      className={`
        flex items-center
        px-4 py-2 
        transition-colors duration-200 transform 
        rounded-md 
        hover:bg-gray-700 
        hover:text-gray-200
        ${bgColorCSS}
      `}
    >
      {props.children}
    </div>
  );

  return to ? <Link to={to}>{comp}</Link> : comp;
};

export default NavBarButton;
