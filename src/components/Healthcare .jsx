import React from "react";
import CommonSmallText from "./common/CommonSmallText";
import CommonHeading from "./common/CommonHeading";
import healthNih from "../assets/images/webp/health-nih.webp";
import healthcircle from "../assets/images/webp/card-circle.webp";
import healthRwj from "../assets/images/webp/card-rwj.webp";
import healthfour from "../assets/images/webp/card-four.webp";
import healthcornell from "../assets/images/webp/card-cornell.webp";
const Healthcare = () => {
  return (
    <div className="max-w-[1164px] mx-auto px-3 pt-[87px]">
      <div className="flex justify-center">
        <div className=" flex flex-col items-center text-center">
          <CommonSmallText text="Partners" />
          <CommonHeading
            className="max-w-[684px] pt-2"
            text="Recognized by Leading"
            color="Healthcare Institutions"
          />
        </div>
      </div>
      <div className=" flex justify-between">
        <div className="shadow-six_card max-w-[207px] w-full h-[137px] rounded-[4px] bg-white border border-[#0000001A] flex justify-center items-center ">
          <img src={healthNih} alt="healthNih" />
        </div>
        <div className="shadow-six_card max-w-[207px] w-full h-[137px] rounded-[4px] bg-white border border-[#0000001A] flex justify-center items-center ">
          <img src={healthcircle} alt="healthNih" />
        </div>
        <div className="shadow-six_card max-w-[207px] w-full h-[137px] rounded-[4px] bg-white border border-[#0000001A] flex justify-center items-center ">
          <img src={healthRwj} alt="healthNih" />
        </div>
        <div className="shadow-six_card max-w-[207px] w-full h-[137px] rounded-[4px] bg-white border border-[#0000001A] flex justify-center items-center ">
          <img src={healthfour} alt="healthNih" />
        </div>
        <div className="shadow-six_card max-w-[207px] w-full h-[137px] rounded-[4px] bg-white border border-[#0000001A] flex justify-center items-center ">
          <img src={healthcornell} alt="healthNih" />
        </div>
      </div>
    </div>
  );
};

export default Healthcare;
