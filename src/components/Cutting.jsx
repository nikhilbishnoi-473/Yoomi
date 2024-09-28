import React from "react";
import girlImage from "../assets/images/webp/girl-image.webp";
import positionImage from "../assets/images/webp/position-image.webp";
import positionGraph from "../assets/images/webp/circel-graph.webp";
import CommonSmallText from "./common/CommonSmallText";
import clickBox from "../assets/images/svg/click-box.svg";
import CommonPara from "./common/CommonPara";
import CommonBtn from "./common/CommonBtn";

const Cutting = () => {
  return (
    <div className="max-w-[1164px] px-3 mx-auto ">
      <div className="max-w-[1138px] mt-[55px] w-full rounded-[32px] bg-white shadow-card_shadow p-[57px_20px_58px_20px]">
        <div className=" flex justify-between items-center">
          <div className="max-w-[552px] w-full flex justify-center items-end relative ml-3.5">
            <img
              src={girlImage}
              className="max-w-[534px] w-full mt-5 pointer-events-none"
              alt="scapular"
            />
            <img
              src={positionGraph}
              className="sm:max-w-[120px] max-w-[70px] w-full absolute top-0 z-10 right-0 pointer-events-none"
              alt="circle-img"
            />
            <img
              src={positionImage}
              className="sm:max-w-[259px] max-w-[150px] w-full absolute -top-3 sm:-top-5 z-10 -left-5 pointer-events-none"
              alt="circle-img"
            />
          </div>
          <div className="">
            <div className="flex flex-col">
              <CommonSmallText text="TRACKING" />
              <h3 className="font-plus_jakarta font-normal text-11xl leading-9 text-black">
                Cutting Edge Motion{" "}
                <span className=" font-semibold ">Tracking/</span>
              </h3>
              <h3 className="font-plus_jakarta font-semibold pt-1 text-11xl leading-9 text-black">
                Feedback
              </h3>
              <div className="flex gap-[15px] pt-5">
                <img src={clickBox} alt="clickBox" />
                <CommonPara
                  className="max-w-[361px]"
                  para="Provides a holistic, real-time analysis of patient exercise form, capturing 300+ data points and critical metrics."
                />
              </div>
              <div className="flex gap-[15px] pt-2">
                <img src={clickBox} alt="clickBox" />
                <CommonPara
                  className="max-w-[361px]"
                  para="Delivers immediate feedback and guidance to correct and improve exercise form"
                />
              </div>
              <div className="flex gap-[15px] pt-2">
                <img src={clickBox} alt="clickBox" />
                <CommonPara
                  className="max-w-[361px]"
                  para="Supported by the most accurate motion-tracking model designed for rehabilitation, Yoomi Vision"
                />
              </div>
              <div className="flex gap-[15px] pt-2">
                <img src={clickBox} alt="clickBox" />
                <CommonPara
                  className="max-w-[361px]"
                  para="Requires no custom hardware, sensors, or equipment"
                />
              </div>
              <CommonBtn className="mt-10 !px-8" button="Test it Yourself" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cutting;
