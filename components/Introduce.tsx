"use client";
import React from "react";
import { motion } from "framer-motion";
import { LampContainer } from "../components/ui/lamp";
import { FlipWords } from "../components/ui/flip-words";

const Introduce = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <LampContainer>
        <motion.h1
          initial={{ opacity: 0.5, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="mt-8 bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl"
        >
          Hello and welcome to{" "}
          <FlipWords
            words={[
              "my portfolio",
              "mein portfolio",
              "mon portfolio",
              "portfolioni",
              "moje portfolio",
            ]}
            className="text-amber-400"
          />
          site <br />{" "}
          <span className="text-3xl font-bold">
            Develop by. <span className="text-amber-400">Repeat </span>
            (Mr. Nawarat Phounchareon)
          </span>{" "}
          <br />{" "}
          <span className="text-2xl font-bold">
            Web Developer based on <span className="text-amber-400">Thailand</span>
          </span>
        </motion.h1>
      </LampContainer>
    </div>
  );
};

export default Introduce;
