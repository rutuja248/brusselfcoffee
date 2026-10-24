import React from "react";
import coffeeBg from "../assets/coffee_bg.png"

const About = () => {
  const handleViewResume = () => {
    const resumeurl = "#tbd";
    window.open(resumeurl, "_blank");
  };
  return (
    <div style={{ backgroundImage: `url(${coffeeBg})` }}
     className="py-4 bg-cover bg-center pl-5">
      <div className="lg:container lg:mx-auto flex flex-col md:flex-row justify-between items-center md:h-[60vh] min-h-0 overflow-hidden">
        <div className="flex flex-col gap-4">
          <h1 className="text-6xl text-[#3f352b] font-extralight">
            Brewed To Perfection, <br />
            Served With Love
          </h1>
          <p className="text-[#3f352b] font-extralight">
            Indulge in handcrafted coffee, freshly baked pastries, and a
            welcoming atmosphere <br />
            designed to inspire and unwind.
          </p>
          <div className="flex gap-4 mt-5">
            <a href="#tbd" className="bg-[#3f352b] text-[#d3b998] py-3 px-5 rounded-md font-extralight">
              Order Online
            </a>
            <a href="#tbd" className="text-[#3f352b] py-3 px-5 rounded-md border-1 border-[#3f352b] font-extralight">
             Find a Location
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
