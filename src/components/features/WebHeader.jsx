"use client";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import SearchBox from "../ui/SearchBox";
import Button from "../ui/Button";
import { SiBookstack } from "react-icons/si";
import { FiTrendingUp } from "react-icons/fi";
import { FaBook } from "react-icons/fa";
import Link from "next/link";
const WebHeader = () => {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);
  useEffect(() => {
    if (!open) return;

    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [open]);
  return (
    <div className="sticky top-0 bg-white z-20">
      <div className="mainBox relative">
        <div className="flex justify-between items-center w-full ">
          {/* left section */}
          <div className="flex items-center gap-2">
            <Image src="/mainLogo.png" alt="logo" width={50} height={50} />
            <Button
              ref={dropdownRef}
              text="Explore ↡"
              onClick={() => {
                setOpen(!open);
              }}
              style={"theme-btn2"}
            />
            <SearchBox />
          </div>
          {/* right section */}
          <div className="flex items-center gap-2">
            <Link href="/register">
              <Button text="Get Started" style={"theme-btn"} />
            </Link>
          </div>
        </div>
        {open && (
          <div className=" w-full">
            <div className="absolute  z-100 grid grid-cols-3 w-fit gap-6 bg-slate-50 mx-4 my-2 p-6 rounded-2xl border border-slate-300 ">
              <div className="flex flex-col">
                <div className="flex items-center gap-2 mb-4">
                  <SiBookstack className="text-theme" />
                  <p className="bodyText  text-theme">Featured Courses</p>
                </div>

                <div className="flex flex-col gap-2">
                  <p className="link hover:text-theme cursor-pointer text-slate-700">
                    Artifical Intelligence & Machine Learning
                  </p>
                  <p className="link hover:text-theme cursor-pointer text-slate-700">
                    FullStack Development
                  </p>
                  <p className="link hover:text-theme cursor-pointer text-slate-700">
                    Cyber Security
                  </p>
                </div>
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-2 mb-4">
                  <FaBook className="text-theme" />
                  <p className="bodyText  text-theme">Courses Catlog</p>
                </div>
                <div className="flex flex-col gap-2">
                  <p className="link hover:text-theme cursor-pointer text-slate-700">
                    Design & Development
                  </p>
                  <p className="link hover:text-theme cursor-pointer text-slate-700">
                    Devops Engineering
                  </p>
                  <p className="link hover:text-theme cursor-pointer text-slate-700">
                    Cyber Security
                  </p>
                </div>
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-2 mb-4">
                  <FiTrendingUp className="text-theme" />
                  <p className="bodyText text-theme">Trending Courses</p>
                </div>
                <div className="flex flex-col gap-2">
                  <p className="link hover:text-theme cursor-pointer text-slate-700">
                    Artifical Intelligence & Machine Learning
                  </p>
                  <p className="link hover:text-theme cursor-pointer text-slate-700">
                    FullStack Development
                  </p>
                  <p className="link hover:text-theme cursor-pointer text-slate-700">
                    Cyber Security
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default WebHeader;
