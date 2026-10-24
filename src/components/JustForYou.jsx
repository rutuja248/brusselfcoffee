import React from "react";
import handmadeCoffee from "../assets/handmadeCoffee.png";
import { FaArrowRight } from "react-icons/fa";
import brussels from '../assets/brussels.png'

const JustForYou = () => {
  return (
    <div className="bg-[#262324] mx-auto">
      <div className="lg:container lg:mx-auto md:flex-row justify-between items-center py-10">
        <div className="lg:flex gap-15 px-5 items-center">
          <div className="lg:w-1/2">
            <img src={handmadeCoffee} alt="" className="rounded-md w-full" />
          </div>
          <div className="flex flex-col gap-5 lg:w-1/2">
            <h1 className="font-extralight text-4xl text-[#E2C8AF]">
              Handmade Just For You
            </h1>
            <p className="text-[#E2C8AF] font-extralight">
              Our organically grown beans are roasted over an open flame in a{" "}
              <br />
              one-of-kind, brick roaster. There's nothing quite like a cup of
              Brussels <br />
              Brewery coffee.
            </p>
              <a href="#tbd" className="text-[#E2C8AF] flex gap-2 items-center border-1 rounded-md px-4 py-3 w-45 font-extralight">
                View our menu <FaArrowRight />
              </a>
          </div>
        </div>
        <div className="flex flex-col-reverse lg:flex-row gap-8 lg:gap-15 px-5 items-center py-10 lg:py-25">
          <div className="flex flex-col gap-5 lg:w-1/2">
            <h1 className="font-extralight text-4xl text-[#E2C8AF]">
              Made in Brussels
            </h1>
            <p className="text-[#E2C8AF] font-extralight">Welcome to Brussels Brewery, where the charm of Brussels meets the <br/>aroma of freshly brewed coffee. Our cafe us a cozy heaven where friends <br/>gather, ideas spark, and every sip tells a story.
            </p>
            <p className="text-[#E2C8AF] font-extralight">Come and expereiende the soul of Brussels in every cup and bite-we <br/>can't wait to welcome you!
            </p>
              <a href="#tbd" className="text-[#E2C8AF] flex gap-2 items-center border-1 rounded-md px-4 py-3 w-45 font-extralight">
                Learn more <FaArrowRight />
              </a>
          </div>
           <div className="lg:w-1/2">
            <img src={brussels} alt="" className="rounded-md w-full" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default JustForYou;
