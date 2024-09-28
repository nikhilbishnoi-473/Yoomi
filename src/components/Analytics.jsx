import React from "react";
import CommonSmallText from "./common/CommonSmallText";
import CommonHeading from "./common/CommonHeading";
import CommonPara from "./common/CommonPara";
import CommonBtn from "./common/CommonBtn";
import graphImage from "../assets/images/webp/range-image.png";
import topImage from "../assets/images/webp/status-image.png";
import bottomImage from "../assets/images/webp/mon-image.png";

const Analytics = () => {
  return (
    <div className="max-w-[1164px] mx-auto px-3">
      <div className=" max-w-[1138px] my-[97px] w-full rounded-[32px] bg-white shadow-card_shadow p-[89px_30px_106px_30px]">
        <div className=" flex justify-between items-center">
          <div className="flex flex-col">
            <CommonSmallText text="report" />
            <CommonHeading
              className="!text-11xl !leading-9 pt-2"
              text="Reporting"
              color="+ Analytics"
            />
            <CommonPara
              className="max-w-[385px] pt-5"
              para="Track patient progress over time with compliance, pain, RPE, ROM and other key metrics"
            />
            <CommonBtn className="mt-9 !px-5" button="View the Matrics" />
          </div>
          <div className=" relative max-w-[619px]">
            <img
              className="max-w-[550px] w-full"
              src={graphImage}
              alt="graphImage"
            />
            <img
              className="absolute top-[-40px] left-[-70px]"
              src={topImage}
              alt="topImage"
            />
            <img
              className="absolute bottom-[-59px] right-[22px] "
              src={bottomImage}
              alt="topImage"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
