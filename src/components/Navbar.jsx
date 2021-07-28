import React from "react";
import LeftSide from "./leftside/LeftSide";
import RightSide from "../RightSide";

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
