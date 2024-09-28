import React from "react";

const CommonSmallText = ({ text, className }) => {
  return (
    <div>
      <h4
        className={` ${className}font-inter font-medium leading-5 text-button-color text-base `}
      >
        {text}
      </h4>
    </div>
  );
};

export default CommonSmallText;
