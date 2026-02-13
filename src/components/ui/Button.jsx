"use client";
import React from "react";
import { BiLoaderAlt } from "react-icons/bi";
const Button = ({ text, onClick, disabled, loading, style, ref }) => {
  return (
    <button className={style} disabled={disabled} onClick={onClick} ref={ref}>
      {loading ? <BiLoaderAlt className="animate-spin" /> : `${text}`}
    </button>
  );
};

export default Button;
