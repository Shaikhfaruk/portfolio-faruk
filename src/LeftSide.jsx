import React from "react";

const LeftSide = () => {
  return (
    <>
      <div className="LeftSide" id="leftSide">
        <div className="svg-wrapper">
          <svg height={60} width={200} xmlns="http://www.w3.org/2000/svg">
            <rect className="shape" height={60} width={200} />
          </svg>
          <div className="text">
            <h3>
              Port<span>Folio</span>
            </h3>
          </div>
        </div>
      </div>
    </>
  );
};

export default LeftSide;
