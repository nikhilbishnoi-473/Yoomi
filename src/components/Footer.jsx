import React from "react";
import logo from "../assets/images/svg/logo.svg";
import messageBox from "../assets/images/svg/message-box.svg";
import phoneImage from "../assets/images/svg/phone-image.svg";
import { FOOTER_CONTACT, FOOTER_ITEMS, FOOTER_NEWS } from "../utils/Helper";
import CommonHeading from "./common/CommonHeading";

const Footer = () => {
  return (
    <div className=" bg-black">
      <div className=" max-w-[1164px] px-3 mx-auto pt-[213px] pb-[41px]">
        <CommonHeading text={"headoign"} />
        <div className=" flex flex-row flex-wrap -mx-3 ">
          <div className=" w-8/12 px-3">
            <img src={logo} alt="" />
            <p className=" max-w-[277px] font-inter font-light text-sm leading-5 text-white pt-7">
              I'm a paragraph. Click here to add your own text and edit me. It’s
              easy. Just click “Edit Text”{" "}
            </p>
            <div className=" flex gap-5 pt-7">
              <a href="">
                {" "}
                <img src={messageBox} alt="messageBox" />
              </a>
              <a
                href=""
                className=" font-inter font-light font-base leading-5 text-white"
              >
                contact@yoomi.com
              </a>
            </div>
            <div className=" flex gap-5 pt-4">
              <a href="tel:123456789">
                {" "}
                <img src={phoneImage} alt="messageBox" />
              </a>
              <a
                href="tel:123456789"
                className=" font-inter font-light font-base leading-5 text-white"
              >
                +123 456 789
              </a>
            </div>
          </div>
          <div className="w-2/12 px-3 flex justify-center">
            {FOOTER_ITEMS.map((obj, index) => (
              <div key={index}>
                {obj.heading && (
                  <a
                    href=""
                    className="font-inter font-semibold text-sm leading-4 text-white"
                  >
                    {obj.heading}
                  </a>
                )}
                {obj.items &&
                  obj.items.map((item, itemIndex) => (
                    <a
                      key={itemIndex}
                      href=""
                      className="font-inter flex font-normal text-sm leading-4 pt-[18px] text-white"
                    >
                      {item.text}
                    </a>
                  ))}
              </div>
            ))}
          </div>
          <div className="w-1/12 px-3 flex justify-end">
            {FOOTER_CONTACT.map((obj, index) => (
              <div key={index}>
                {obj.heading && (
                  <a
                    href=""
                    className="font-inter text-nowrap font-semibold text-sm leading-4 text-white"
                  >
                    {obj.heading}
                  </a>
                )}
                {obj.items &&
                  obj.items.map((item, itemIndex) => (
                    <a
                      key={itemIndex}
                      href=""
                      className="font-inter flex font-normal text-sm leading-4 pt-[18px] text-white"
                    >
                      {item.text}
                    </a>
                  ))}
              </div>
            ))}
          </div>
          <div className=" w-1/12 px-3 flex justify-end">
            {FOOTER_NEWS.map((obj, index) => (
              <div key={index}>
                {obj.heading && (
                  <a
                    href=""
                    className="font-inter font-semibold text-sm leading-4 text-white"
                  >
                    {obj.heading}
                  </a>
                )}
                {obj.items &&
                  obj.items.map((item, itemIndex) => (
                    <a
                      key={itemIndex}
                      href=""
                      className="font-inter flex font-normal text-sm leading-4 pt-[18px] text-white"
                    >
                      {item.text}
                    </a>
                  ))}
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="w-full bg-[#FFFFFF33] h-[1px] "></div>
      <div className=" py-[22px] max-w-[1164px] px-3 mx-auto">
        <ul className=" flex gap-6 justify-end">
          <li className="font-inter font-normal text-sm leading-4 text-[#808080] ">
            Terms of Service
          </li>
          <li className="font-inter font-normal text-sm leading-4 text-[#808080] ">
            Privacy Policy
          </li>
          <li className="font-inter font-normal text-sm leading-4 text-[#808080] ">
            Cookies
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
