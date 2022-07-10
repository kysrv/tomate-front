import React from "react";

const Vertical = (
  _props: React.InputHTMLAttributes<HTMLInputElement> & { s?: string }
) => {
  let { s: style, ...props } = _props;

  return <div className={"flex flex-col" + " " + style} {...props}></div>;
};

export default Vertical;
