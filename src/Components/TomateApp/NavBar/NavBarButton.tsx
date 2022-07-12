import React, { useState } from "react";
import { Link } from "react-router-dom";

const NavBarButton = (props: any) => {
  const { to } = props;

  const comp = (
    <div className="flex items-center px-4 py-2 text-gray-600 transition-colors duration-200 transform rounded-md dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700 dark:hover:text-gray-200 hover:text-gray-700 ">
      {props.children}
    </div>
  );

  return to ? <Link to={to}>{comp}</Link> : comp;
};

export default NavBarButton;
