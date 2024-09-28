import React from "react";
import CommonSmallText from "./common/CommonSmallText";
import CommonHeading from "./common/CommonHeading";
import CommonPara from "./common/CommonPara";
import { PLATFORM_DATA } from "../utils/Helper";

const Platform = () => {
  return (
    <div className="bg-platform-bg ">
      <div className="max-w-[1140px] mx-auto px-3 py-[79px]">
        <div className="flex justify-center">
          <div className=" flex flex-col items-center text-center">
            <CommonSmallText text="Platform" />
            <CommonHeading
              className="pt-2"
              text="Through Our Platform"
              color="Our Platform"
            />
            <CommonPara
              className="pt-4"
              para="We’ve helped out partners and patients achieve"
            />
          </div>
        </div>
        <div className=" flex gap-7 max-w-[861px] mx-auto pt-[60px]">
          {PLATFORM_DATA.map((obj, index) => (
            <div
              key={index}
              className={`${
                index === 0
                  ? "bg-[#85B6A6]"
                  : index === 1
                  ? "bg-[#82B2C2]"
                  : index === 2
                  ? "bg-[#076787]"
                  : "bg-black"
              } max-w-[268px] w-full min-h-[207px] rounded-[4px] flex justify-center items-center `}
            >
              <div className="flex flex-col items-center text-center">
                <h4 className=" font-inter font-semibold text-14xl leading-14xl text-white">
                  {obj.heading}
                </h4>
                <p
                  className={` ${
                    index === 1 ? "max-w-[180px]" : "max-w-[150px]"
                  } ${
                    index === 0
                      ? ""
                      : index === 1
                      ? "pt-2"
                      : index === 2
                      ? "pt-[3px] "
                      : ""
                  } font-inter font-normal text-10xl text-white opacity-80 leading-8`}
                >
                  {obj.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Platform;
