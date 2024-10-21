"use client"
import React from "react"
import Introduce from "../components/Introduce"
import Skill from "../components/Skill"
import Work from "../components/Work"
import Approach from "../components/Approach"
import Footer from "../components/Footer"

export default function page() {
  return (
    <div>
      <div className="bg-black flex justify-center items-center flex-col mx-auto overflow-clip">
        <div className="w-full">
            <Introduce />
            <div className="h-screen flex flex-row justify-end mt-10">
              <div className='md:block md:basis-1/4'></div>
              <div className='w-full md:basis-3/4'>
                <Skill />
              </div>
            </div>
            <div className="h-screen flex flex-row justify-start">
              <div className='w-full md:basis-3/4'>
                <Work />
              </div>
              <div className='hidden md:block md:basis-1/4'></div>
            </div>
            <div className="h-screen flex flex-row justify-end mt-10">
              <div className='hidden md:block md:basis-1/4'></div>
              <div className='w-full md:basis-3/4'>
                <Approach />
              </div>
            </div>
          <Footer />
        </div>
      </div>
    </div>
  )
}