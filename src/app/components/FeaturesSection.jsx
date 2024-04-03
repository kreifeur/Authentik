import React from "react";
import Card from "./Card";

const FeaturesSection = () => {
  return (
    <div className="px-8 py-10 flex flex-col gap-6">
      <div className="title">Start your journey.</div>
      <p className="description">
        Come as you are. Bring your talents, your brilliance, your
        frustrations,your struggles-and let's turn them into something awesome.
      </p>
      <div className="grid sm:grid-cols-3 sm:gap-[20vh] grid-cols-1  gap-[5vh]">
        <Card />
        <Card />
        <Card />
      </div>
      <div>
        <button>TAKE THE FIRST STEP TODAY</button>
      </div>
    </div>
  );
};

export default FeaturesSection;
