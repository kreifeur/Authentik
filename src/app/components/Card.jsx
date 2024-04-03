import React from "react";

const Card = (props) => {
  return (
    <div className="flex flex-col gap-2">
      <div>{props.icon}</div>
      <div className="font-bold text-xl">{props.title}</div>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore culpa
        impedit deleniti totam rerum neque! Corporis tempore velit modi quia
        totam vel beatae illum tenetur doloribus recusandae!
      </p>
    </div>
  );
};

export default Card;
