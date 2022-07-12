import React from "react";

export const Button = ({ type, theme, children, ...rest }) => {
  if (!type) throw Error("Button type is required");
  return (
    <button
      type={type}
      className={`btn ${theme ? "btn-" + theme : ""}`}
      {...rest}
    >
      {children}
    </button>
  );
};
