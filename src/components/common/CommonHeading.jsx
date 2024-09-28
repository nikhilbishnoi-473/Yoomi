import React from "react";

const CommonHeading = ({ text, color, className }) => {
  return (
    <div>
      <h2
        className={`${color} ${className} font-plus_jakarta font-normal text-12xl leading-12xl text-black`}
      >
        {text} <span className=" font-semibold ">{color}</span>
      </h2>
    </div>
  );
};

export default CommonHeading;
