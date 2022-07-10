import React from "react";

const Horizontal = (
  _props: React.InputHTMLAttributes<HTMLInputElement> & { s?: string }
) => {
  let { s: style, ...props } = _props;

  return <div className={"flex flex-row" + " " + style} {...props}></div>;
};

export default Horizontal;
