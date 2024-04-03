import React from "react";
import ItemCard from "./ItemCard";
import { LiaMountainSolid } from "react-icons/lia";

const ContactSection = () => {
  return (
    <div className="flex flex-col sm:flex-row sm:gap-[20vh] gap-[10vh] items-center px-8 py-[10vh] bg-gray-100">
      <div className="flex-[3]   py-10 flex flex-col gap-6">
        <div className="title">Start your journey.</div>
        <p className="description">
          Come as you are. Bring your talents, your brilliance, your
          frustrations,your struggles-and let's turn them into something
          awesome.
        </p>
        <div className="grid sm:grid-cols-2 grid-cols-1  gap-[5vh]">
          <ItemCard />
          <ItemCard />
          <ItemCard />
          <ItemCard />
        </div>
      </div>
      <div className="flex-[1] bg-white p-8 flex flex-col gap-6 items-center">
        <div>
          <LiaMountainSolid className="text-6xl" />
        </div>
        <div className="font-bold text-xl">Start your journey</div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, adipisci.
        </p>
        <input
          placeholder="First Name"
          className="px-3 py-2 w-full outline-none bg-gray-100"
          type="text"
          name=""
          id=""
        />
        <input
          placeholder="Email Adress"
          className="px-3 py-2 w-full outline-none bg-gray-100 shadow-2xl"
          type="text"
          name=""
          id=""
        />
        <div className="flex gap-2 items-center ">
          <input type="checkbox" name="" id="" />
          <div>I accept all the terms of privacy</div>
        </div>
        <button className="secondary_btn">GET STARTED TODAY</button>
      </div>
    </div>
  );
};

export default ContactSection;
