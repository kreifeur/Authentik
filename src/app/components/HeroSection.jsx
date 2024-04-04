import Image from "next/image";
import React from "react";
import imagesrc from "@/assets/coverscreen.jpg";
import { IoMdArrowForward } from "react-icons/io";

const HeroSection = () => {
  return (
    <div className=" h-[92vh] flex ">
      <div className="sm:w-[50%] flex flex-col justify-center gap-4 p-10">
        <div className="text-5xl">Welcome to</div>
        <div className="text-6xl font-bold">Authentik.</div>
        <p className="text-xl">
          We help creative entrepreneur build an honest brand & digital
          platform.
        </p>
        <div className="flex gap-8">
          <button className="primary_btn">START YOUR JOURNEY</button>
          <div className="flex gap-2 items-center underline">
            <button>LEARN MORE </button>
            <IoMdArrowForward />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
