import React from "react";
import "./leftSide.css";
const LeftSide = () => {
  return (
    <>
      <div className="LeftSide" id="leftSide">
        <div className="svg-wrapper">
          <svg height={60} width={200}>
            <rect className="shape" height={60} width={200} />
          </svg>
          <div className="text">
            <a href="/" style={{ textDecoration: "none" }}>
              <h3>
                Port<span>Folio</span>
              </h3>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default LeftSide;
