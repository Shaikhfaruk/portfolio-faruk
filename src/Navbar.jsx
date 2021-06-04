import React from "react";
import LeftSide from "./LeftSide";
import RightSide from "./RightSide";
import Typewriter from "typewriter-effect";

const Navbar = () => {
  return (
    <>
      <div className="navbar" id="navbar">
        <LeftSide className="LeftSide" />
        <RightSide className="RightSide" />

        <div className="write">
          <h3>I am..... </h3>
          <Typewriter
            options={{
              strings: [
                "Faruk Shaikh",
                "Web dev",
                "React Dev",
                "Figma UI/UX Designer",
              ],
              autoStart: true,
              loop: true,
            }}
          />
        </div>
      </div>
    </>
  );
};

export default Navbar;
