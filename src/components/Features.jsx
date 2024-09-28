import React from "react";
import CommonHeading from "./common/CommonHeading";
import CommonPara from "./common/CommonPara";
import CommonSmallText from "./common/CommonSmallText";
import clickBox from "../assets/images/svg/click-box.svg";
import CommonBtn from "./common/CommonBtn";

const Features = () => {
  return (
    <div>
      <div className=" max-w-[1164px] mx-auto px-3">
        <div className=" flex justify-center pt-[604px]">
          <div className=" flex flex-col items-center text-center">
            <CommonSmallText text="Features" />
            <CommonHeading
              className="pt-2"
              text="Explore Our"
              color="Amazing Features"
            />
            <CommonPara
              className="max-w-[724px] pt-[10px]"
              para="Yoomi is more than just a regular remote monitoring solution. Our product supports patients and providers through every step of the rehabilitation process"
            />
          </div>
        </div>
        <div className=" max-w-[1138px] mt-[55px] w-full rounded-[32px] bg-white shadow-card_shadow p-[60px_0px_60px_30px]">
          <div className="flex flex-row flex-wrap -mx-3">
            <div className=" w-6/12 px-3 ">
              <CommonSmallText text="Library" />
              <h3 className=" font-plus_jakarta font-normal text-11xl leading-9 text-black">
                Extensive Exercise{" "}
                <span className=" font-semibold pt-2"> Library</span>
              </h3>
              <div className=" flex gap-[15px] items-center pt-5">
                <img src={clickBox} alt="clickBox" />
                <CommonPara
                  className="max-w-[394px] "
                  para="Utilize Yoomi’s HEP templates to quickly create and assign programs to your patients "
                />
              </div>
              <div className=" flex gap-[15px] items-center pt-2">
                <img src={clickBox} alt="clickBox" />
                <CommonPara
                  className="max-w-[394px] "
                  para="Choose from our library of exercises for all patient cases "
                />
              </div>
              <div className=" flex gap-[15px] items-center pt-2">
                <img src={clickBox} alt="clickBox" />
                <CommonPara
                  className="max-w-[394px] "
                  para="Use Yoomi’s industry-leading exercise generation tool to create your own exercises that track adherence and form in seconds"
                />
              </div>
              <CommonBtn className=" mt-9" button="View the Library" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
