import React from "react";

const CommonPara = ({ para, className }) => {
  return (
    <div>
      <p
        className={`${className} font-inter font-normal text-base leading-6 text-black opacity-70`}
      >
        {para}
      </p>
    </div>
  );
};

export default CommonPara;
