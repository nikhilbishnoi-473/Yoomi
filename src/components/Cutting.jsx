import React from "react";
import girlImage from "../assets/images/webp/girl-image.webp";
import positionImage from "../assets/images/webp/position-image.webp";
import positionGraph from "../assets/images/webp/circel-graph.webp";
import CommonSmallText from "./common/CommonSmallText";
import CommonHeading from "./common/CommonHeading";

const Cutting = () => {
  return (
    <div className="max-w-[1164px] px-3 mx-auto ">
      <div className="max-w-[1138px] mt-[55px] w-full rounded-[32px] bg-white shadow-card_shadow p-[57px_28px_58px_34px]">
        <div className=" flex flex-wrap flex-row -mx-3">
          <div className=" w-6/12 px-3">
            <div className="max-w-[549px] relative ">
              <img
                className="max-w-[490px] w-full shadow-card_shadow"
                src={girlImage}
                alt="girlImage"
              />
              <img
                className="absolute shadow-card_shadow top-[-32px] left-0 "
                src={positionImage}
                alt="positionImage"
              />
              <img
                className="absolute shadow-card_shadow top-[-34px] right-[-21px] "
                src={positionGraph}
                alt="positionGraph"
              />
            </div>
          </div>
          <div className="w-6/12 px-3 ">
            <div className="flex justify-end">
              <div className="flex flex-col">
                <CommonSmallText text="TRACKING" />
                <CommonHeading
                  className="!text-11xl"
                  text="Cutting Edge Motion"
                  color="Tracking/Feedback"
                />
                <h3 className="font-plus_jakarta font-normal font-11xl leading-9 black">
                  Cutting Edge Motion{" "}
                  <span className=" font-semibold">Tracking/Feedback</span>
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cutting;
