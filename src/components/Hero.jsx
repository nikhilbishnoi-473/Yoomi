import React, { useEffect, useState } from "react";
import logo from "../assets/images/webp/logo.webp";
import { NAV_ITEMS } from "../utils/Helper";
import CommonBtn from "./common/CommonBtn";

const Hero = () => {
  const [data, setData] = useState(false);
  useEffect(() => {
    document.body.style.overflow = data ? "hidden" : "visible";
    return () => {
      document.body.style.overflow = "visible";
    };
  }, [data]);
  function VIEW() {
    setData((prevData) => !prevData);
  }
  return (
    <div className=" max-w-[1162px] px-3 mx-auto ">
      <div className="pt-8 flex justify-between items-center">
        <img className="max-w-[118px] " src={logo} alt="logo" />

        <div
          className={`${
            data ? "right-0" : "right-[-100%]"
          } flex gap-7 items-center justify-between z-[50] max-md:gap-[26px] max-md:fixed max-md:bg-white max-md:w-full max-md:h-full max-xl:top-0 max-md:flex-col max-md:justify-center duration-300`}
        >
          <div className=" flex gap-11 max-md:flex-col max-md:items-center">
            {NAV_ITEMS.map((obj, index) => (
              <a
                onClick={() => setData(false)}
                href=""
                key={index}
                className=" font-inter z-10 font-medium text-lg leading-5 text-black ease-linear after:absolute after:bg-black after:h-[3px] after:w-0 after:left-[50%] after:translate-x-[-50%] hover:after:w-[25px] after:bottom-[-5px] after:rounded after:duration-300 after:ease-linear after:mx-auto relative"
              >
                {obj.text}
              </a>
            ))}
          </div>
          <CommonBtn button={"Get Started"} />
        </div>
        <div
          onClick={VIEW}
          className={` ${
            data ? "cross " : ""
          } md:hidden cursor-pointer block z-50`}
        >
          <span className="bar h-[3px] block cursor-pointer bg-button-color w-[25px] duration_300"></span>
          <span className="bar h-[3px] block cursor-pointer bg-button-color w-[25px] my-[6px]"></span>
          <span className="bar h-[3px] block cursor-pointer bg-button-color w-[25px] duration_300"></span>
        </div>
      </div>
    </div>
  );
};

export default Hero;
