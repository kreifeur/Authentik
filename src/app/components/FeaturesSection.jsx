import React from "react";
import Card from "./Card";
import { LuTrees } from "react-icons/lu";
import { GiHandBag } from "react-icons/gi";
import { GiDirectionSign } from "react-icons/gi";

const FeaturesSection = () => {
  return (
    <div className="px-8 py-10 flex flex-col gap-6">
      <div className="title">Start your journey.</div>
      <p className="description">
        Come as you are. Bring your talents, your brilliance, your
        frustrations,your struggles-and let's turn them into something awesome.
      </p>
      <div className="grid sm:grid-cols-3 sm:gap-[20vh] grid-cols-1  gap-[5vh]">
        <Card title={'Be inspired.'} icon={<LuTrees className="text-5xl"/>} />
        <Card title={'Get connected.'} icon={<GiDirectionSign className="text-5xl"/>}/>
        <Card title={'Equip yourself.'} icon={<GiHandBag className="text-5xl"/>}/>
      </div>
      <div>
        <button>TAKE THE FIRST STEP TODAY</button>
      </div>
    </div>
  );
};

export default FeaturesSection;
