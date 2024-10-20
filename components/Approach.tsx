import React from "react";
import Icon from "@mdi/react";
import { AnimatePresence, motion } from "framer-motion";
import { CanvasRevealEffect } from "../components/ui/canvas-reveal-effect";
import { mdiNumeric1Circle, mdiNumeric2Circle, mdiNumeric3Circle } from "@mdi/js";

const Approach = () => {
  return (
    <div className="flex flex-col w-full">
      <div className="flex justify-end me-10">
        <span className="text-4xl font-light">
          <span className="text-amber-400 font-bold">Development</span> Approach
        </span>
      </div>
      <hr className="my-12 h-0.5 border-t-0 bg-neutral-100 dark:bg-white/10" />
      <div className="grid grid-cols-3 gap-4">
        <Card
          icon={ mdiNumeric1Circle }
          step="First Step"
          title="Discuss & Planning"
          text="In the initial stage, after receiving user requirements, I discuss with the team and listen to the planning process to divide the work into different parts. During these discussions, we also brainstorm and design the system based on the specific requirements of each task."
        >
          <CanvasRevealEffect
            animationSpeed={3}
            containerClassName="bg-red-950"
            colors={[[127, 29, 29]]}
          />
        </Card>
        <Card
          icon={ mdiNumeric2Circle }
          step="Second Step"
          title="Develop & Test"
          text="In the second stage, after the development plan is established and tasks are divided, we proceed to the development phase and conduct preliminary testing of the system ourselves."
        >
          <CanvasRevealEffect
            animationSpeed={3}
            containerClassName="bg-blue-950"
            colors={[[30, 64, 175]]}
          />
        </Card>
        <Card
          icon={ mdiNumeric3Circle }
          step="Third Step"
          title="Deploy"
          text="In the final stage, after completing the system development, we deliver the project and deploy the system for users to access in the production environment."
        >
          <CanvasRevealEffect
            animationSpeed={3}
            containerClassName="bg-emerald-950"
            colors={[[6, 78, 59]]}
          />
        </Card>
      </div>
    </div>
  );
};

const Card = ({
  icon,
  step,
  title,
  text,
  children,
}: {
  icon: string;
  step: string;
  title: string;
  text: string;
  children?: React.ReactNode;
}) => {
  const [hovered, setHovered] = React.useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="flex flex-col border border-white/[0.2] group/canvas-card dark:border-white/[0.2] max-w-sm w-full mx-auto p-4 h-[30rem] relative"
    >
      <IconBorder className="absolute h-6 w-6 -top-3 -left-3 dark:text-white text-white" />
      <IconBorder className="absolute h-6 w-6 -bottom-3 -left-3 dark:text-white text-white" />
      <IconBorder className="absolute h-6 w-6 -top-3 -right-3 dark:text-white text-white" />
      <IconBorder className="absolute h-6 w-6 -bottom-3 -right-3 dark:text-white text-white" />
      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="h-full w-full absolute inset-0"
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
      <div className="grow opacity-0 group-hover/canvas-card:opacity-100 group-hover/canvas-card:text-white group-hover/canvas-card:-translate-y-2 transition duration-200 mt-3">
        <p className="text-2xl font-bold text-white z-20">{step}</p>
        <p className="text-xl text-white z-20 mb-3">{title}</p>
        <p className="text-sm text-white z-20">{text}</p>
      </div>
      <div className="flex flex-row-reverse">
        <div className="group-hover/canvas-card:-translate-y-4 group-hover/canvas-card:opacity-0 transition duration-200">
          <Icon path={icon} size={3} />
        </div>
      </div>
    </div>
  );
};

export const IconBorder = ({ className, ...rest }: any) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className={className}
      {...rest}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
    </svg>
  );
};

export default Approach;
