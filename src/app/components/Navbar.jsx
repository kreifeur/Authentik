import React from "react";
import { LiaMountainSolid } from "react-icons/lia";
import { MdMenu } from "react-icons/md";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between px-8 h-[8vh] py-10">
      <div>
        <LiaMountainSolid className="text-5xl" />
      </div>

      <div>
        <MdMenu className="text-4xl sm:hidden " />
      </div>

      <ul className="sm:flex items-center gap-4 hidden">
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
