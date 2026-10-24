import React from "react";
import { FaFacebook, FaInstagram } from "react-icons/fa";

const Social = () => {
  return (
    <div className="bg-[#4F3E38] mx-auto">
      <div className="lg:container lg:mx-auto flex md:justify-between md:items-center md:py-15 md:px-30 px-5 py-10 md:flex-row flex-col gap-5">
        <div className="text-[#E2C8AF] font-light flex items-center gap-5">
          <FaInstagram className="w-15 h-15 text-[#E2C8AF]" />
          <div className="flex flex-col gap-2">
            <h1 className="md:text-4xl text-2xl font-extralight">#Brusselscoffee</h1>
            <p className="font-extralight">@Brusselsbrewery</p>
          </div>
        </div>
        <div className="text-[#E2C8AF] font-light flex items-center gap-5">
          <FaFacebook className="w-15 h-15 text-[#E2C8AF]" />
          <div className="flex flex-col gap-2">
            <h1 className="md:text-4xl text-2xl font-extralight">Follow Us</h1>
            <p className="font-extralight">Brusselsbrewery</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Social;
