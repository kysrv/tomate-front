import React from "react";

const Button = (
  _props: React.InputHTMLAttributes<HTMLInputElement> & { s?: string }
) => {
  let { s: style, ...props } = _props;

  return (
    <div
      className={" rounded bg-green-600 p-1 w-max " + style}
      {...props}
    ></div>
  );
};

export default Button;
