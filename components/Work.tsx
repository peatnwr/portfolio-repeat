import React from "react";
import { Timeline } from "./ui/timeline";
import { works } from "../resources/global"

const Work = () => {
  return (
    <div className="flex w-full flex-col mb-10">
      <div className="flex justify-start ms-10">
        <span className="text-4xl font-bold">
          Our <span className="text-amber-400 font-light">Experience</span>
        </span>
      </div>
      <hr className="my-12 h-0.5 border-t-0 bg-neutral-100 dark:bg-white/10" />
      <div className="w-full bg-black">
        <Timeline data={works} />
      </div>
    </div>
  );
};

export default Work;
