"use client";
import React from "react";
import { BiLoaderAlt } from "react-icons/bi";
const Button = ({ text, onClick, disabled, loading }) => {
  return (
    <button className="theme-btn" disabled={disabled} onClick={onClick}>
      {loading ? <BiLoaderAlt className="animate-spin" /> : `${text}`}
    </button>
  );
};

export default Button;
