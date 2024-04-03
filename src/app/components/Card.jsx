import React from "react";
import { LuTrees } from "react-icons/lu";

const Card = () => {
  return (
    <div className="flex flex-col gap-2">
      <div ><LuTrees className="text-5xl"/></div>
      <div className="font-bold text-xl">Be inspired</div>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore culpa
        impedit deleniti totam rerum neque! Corporis tempore velit modi quia
        totam vel beatae illum tenetur doloribus recusandae!
      </p>
    </div>
  );
};

export default Card;
