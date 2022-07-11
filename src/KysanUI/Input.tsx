import React from "react";

const Input = (
  _props: React.InputHTMLAttributes<HTMLInputElement> & { s?: string } & {
    onChange: (value: any | string) => void; //| (newValue: string | any) => void;
  }
) => {
  let { s: style, onChange, onInput, ...props } = _props;
  return (
    <input
      onChange={(e) => onChange(e.currentTarget.value)}
      className={
        style +
        " appearance-none border-2 border-gray-100 rounded-lg px-4 py-3 placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-green-600 focus:shadow-md"
      }
      {...props}
    ></input>
  );
};

export default Input;
