import React from "react";
import LeftSide from "./components/leftside/LeftSide";
import RightSide from "./RightSide";

const Navbar = () => {
  return (
    <>
      <div className="navbar" id="navbar">
        <LeftSide className="LeftSide" />
        <RightSide className="RightSide" />
      </div>
    </>
  );
};

export default Navbar;
