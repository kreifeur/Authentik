"use client";
import React, { useState } from "react";
import { LiaMountainSolid } from "react-icons/lia";
import { MdMenu } from "react-icons/md";
import { CgClose } from "react-icons/cg";

const Navbar = () => {
  const [flex, setFlex] = useState("hidden");
  return (
    <div className="flex items-center justify-between px-8 h-[8vh] py-10">
      <div className="z-[99]">
        <LiaMountainSolid className="text-5xl" />
      </div>

      <div
        className="z-[99]"
        onClick={() => (flex == "flex" ? setFlex("hidden") : setFlex("flex"))}
      >
        {flex == 'hidden' ? <MdMenu className="text-4xl sm:hidden " /> : <CgClose className="text-4xl sm:hidden " /> }
      
      </div>

      <ul className="sm:flex items-center gap-4 hidden">
        <li>Start Here</li>
        <li>Our Blog</li>
        <li>Podcast</li>
        <li>NewSitter</li>
        <li className="font-bold">Get in Touch</li>
      </ul>

      <ul
        className={`${flex} flex-col items-center justify-center gap-8 sm:hidden absolute bg-black top-0 w-screen h-screen left-0`}
      >
        <li>Start Here</li>
        <li>Our Blog</li>
        <li>Podcast</li>
        <li>NewSitter</li>
        <li className="font-bold">Get in Touch</li>
      </ul>
    </div>
  );
};

export default Navbar;
