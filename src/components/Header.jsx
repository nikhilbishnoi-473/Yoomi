import React from "react";
import Hero from "./Hero";
import CommonBtn from "./common/CommonBtn";
import workoutImage from "../assets/images/webp/workout-image.webp";

const Header = () => {
  return (
    <div className=" bg-header-bg bg-100% relative">
      <Hero />
      <div className=" max-w-[1164px] mx-auto px-3 pt-[133px] pb-[354px]">
        <div className=" flex justify-center ">
          <div className=" flex flex-col items-center">
            <h1 className=" font-plus_jakarta font-bold text-13xl max-w-[819px] text-center leading-13xl">
              <span className=" font-extrabold "> Next Generation Patient</span>{" "}
              Engagement and RTM Solution✨
            </h1>
            <p className=" font-inter font-normal text-2xl leading-6 pt-3 opacity-70 text-black ">
              Industry leading AI motion-tracking technology
            </p>
            <div className=" max-w-[428px] rounded-[4px] bg-white flex shadow-input_shadow w-full  justify-between py-[5px] px-1 mt-14">
              <input
                type="text"
                placeholder="Enter Your Email"
                className="pl-2 outline-none list-none font-inter font-medium text-base leading-5 text-black opacity-70 "
              />
              <CommonBtn button={"Get Started"} />
            </div>
          </div>
        </div>
      </div>
      <img
        className=" absolute max-w-[1051px] w-full bottom-[-479px] translate-x-[-50%] left-[50%]"
        src={workoutImage}
        alt="workout-image"
      />
    </div>
  );
};

export default Header;
