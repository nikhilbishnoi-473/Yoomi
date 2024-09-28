import React from "react";

const CommonBtn = ({ button, className }) => {
  return (
    <div>
      <button
        className={`${className} font-inter font-semibold text-base leading-5 text-white bg-button-color rounded-[4px] py-[13px] px-[16px] border -[2px] border-transparent duration_300 hover:border-button-color hover:text-button-color hover:bg-white `}
      >
        {button}
      </button>
    </div>
  );
};

export default CommonBtn;
