"use client"
import React from "react"
import { motion, useScroll, useTransform } from "framer-motion";
import Introduce from "../components/Introduce"
import Skill from "../components/Skill"
import Work from "../components/Work"
import Approach from "../components/Approach"
import Footer from "../components/Footer"

export default function page() {
  // const { scrollYProgress } = useScroll();
  return (
    <div>
      <div className="bg-black flex justify-center items-center flex-col mx-auto overflow-clip">
        <div className="w-full">
          {/* <motion.div style={{ opacity: useTransform(scrollYProgress, [0.1, 0.2], [1, 0]) }}> */}
            <Introduce />
          {/* </motion.div> */}
          {/* <motion.div style={{ opacity: useTransform(scrollYProgress, [0.1, 0.3, 0.3, 0.5], [0, 1, 1, 0]) }}> */}
            <div className="h-screen flex flex-row justify-end mt-10">
              <div className='md:block md:basis-1/4'></div>
              <div className='w-full md:basis-3/4'>
                <Skill />
              </div>
            </div>
          {/* </motion.div> */}
          {/* <motion.div style={{ opacity: useTransform(scrollYProgress, [0.3, 0.5, 0.5, 0.7], [0, 1, 1, 0]) }}> */}
            <div className="h-screen flex flex-row justify-start">
              <div className='w-full md:basis-3/4'>
                <Work />
              </div>
              <div className='hidden md:block md:basis-1/4'></div>
            </div>
          {/* </motion.div> */}
          {/* <motion.div style={{ opacity: useTransform(scrollYProgress, [0.5, 0.7], [0, 1]) }}> */}
            <div className="h-screen flex flex-row justify-end mt-10">
              <div className='hidden md:block md:basis-1/4'></div>
              <div className='w-full md:basis-3/4'>
                <Approach />
              </div>
            </div>
          {/* </motion.div> */}
          <Footer />
        </div>
      </div>
    </div>
  )
}