import Image from "next/image";
import React from "react";
import Button from "../ui/Button";

const HeroSection = () => {
  return (
    <div className="w-full relative h-[80vh] min-h-[600px] overflow-hidden">
      {/* Background Image with subtle scale effect */}
      <Image
        src={"/hero.jpg"}
        fill
        priority
        alt="hero"
        className="object-cover grayscale"
      />

      {/* Enhanced Overlay: Gradient for better text readability */}
      <div className="absolute inset-0 bg-theme/10" />

      {/* Content Container */}
      <div className="flex flex-col justify-center items-center absolute inset-0 gap-6 text-white px-4 text-center">
        {/* Tagline Enhancement */}
        <div className="animate-fade-in-down">
          <p className="text-xs md:text-sm font-semibold tracking-widest uppercase px-4 py-1.5 border border-white/20 bg-white/10 backdrop-blur-md rounded-full">
            🚀 Unlock Your Potential, One Click at a Time
          </p>
        </div>

        {/* Heading Enhancement */}
        <h1 className="heading max-w-4xl leading-[1.1]">
          Discover the World of <span className="text-theme">Learning</span>
        </h1>

        {/* Body Text Enhancement */}
        <p className="bodyText text-gray-200 font-light leading-relaxed">
          Access world-class education from anywhere. Expert-led courses
          designed to help you reach your professional goals.
        </p>

        {/* Buttons Section */}
        <div className="flex flex-col sm:flex-row gap-4 items-center mt-6">
          <Button
            text="Browse Courses"
            onClick={() => {}}
            style={"theme-btn"}
          />
          <Button
            text="Become a Teacher"
            onClick={() => {}}
            style={
              "theme-btn2 px-8 py-4 backdrop-blur-sm border-white/30 hover:bg-white hover:text-black transition-all"
            }
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
