"use client";
import React, { useState } from "react";
import {
  HiOutlineMail,
  HiOutlineLockClosed,
  HiOutlineUser,
  HiOutlineEye,
  HiOutlineEyeOff,
  HiArrowRight,
} from "react-icons/hi";
import { AiOutlineGoogle, AiOutlineGithub } from "react-icons/ai";
import Image from "next/image";
import InputBox from "@/components/ui/InputBox";
import { BiSolidEditAlt } from "react-icons/bi";
import Button from "@/components/ui/Button";
const RegisterForm = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="flex flex-col items-center justify-between min-h-screen bg-slate-50">
      <div className="flex items-center mt-4">
        <Image src="/mainLogo.png" alt="logo" width={100} height={150} />
        <h1 className="heading text-theme">Learnify</h1>
      </div>
      <div className="flex flex-col gap-8">
        <div className="flex items-center justify-center gap-4  w-full px-4">
          <BiSolidEditAlt className="subHeading text-theme" />
          <div className="flex flex-col gap-1">
            <p className="subHeading text-gray-900">Registration Form</p>
            <p className="smallText text-gray-600">
              Please fill in the form below to register.
            </p>
          </div>
        </div>
        <form
          action="submit"
          className="flex flex-col gap-4 px-8 w-lg itmes-center justify-center "
        >
          <InputBox
            type="text"
            id="firstName"
            name="firstName"
            label="First Name"
          />
          <InputBox
            type="text"
            id="lastName"
            name="lastName"
            label="Last Name"
          />
          <InputBox type="email" id="email" name="email" label="Email" />
          <InputBox
            type={showPassword ? "text" : "password"}
            id="password"
            name="password"
            label="Password"
            icon={showPassword ? <HiOutlineEye /> : <HiOutlineEyeOff />}
            onClick={() => setShowPassword(!showPassword)}
          />
          <div className="flex flex-col py-8 gap-1">
            <Button text={"Register"} style={"theme-btn"} />
            <p className="flex link items-center gap-1 text-gray-500 justify-center">
              <span>Already have an account?</span>{" "}
              <span className="text-theme hover:underline cursor-pointer">
                Login
              </span>
            </p>
          </div>
        </form>
      </div>
      <div className="flex flex-col gap-2 border-t border-gray-200 w-full px-8 py-6 bg-gray-50/50">
        <p className="text-[12px] leading-relaxed text-gray-500">
          By creating an account, you agree to our
          <a href="#" className="text-theme font-semibold hover:underline px-1">
            Terms of Service
          </a>
          and
          <a href="#" className="text-theme font-semibold hover:underline px-1">
            Privacy Policy
          </a>
          . You understand that we use your data to personalize your learning
          experience and that you can opt-out of marketing communications at any
          time within your account settings.
        </p>

        <div className="flex gap-4 mt-2">
          <span className="text-[11px] text-gray-400">© 2026 DJ AND RS</span>
          <span className="text-[11px] text-gray-400 cursor-pointer hover:text-gray-600 transition-colors">
            Cookie Policy
          </span>
        </div>
      </div>
    </div>
  );
};

export default RegisterForm;
