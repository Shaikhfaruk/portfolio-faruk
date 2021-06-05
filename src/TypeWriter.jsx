import React from "react";
import Typewriter from "typewriter-effect";

const TypeWriter = () => {
  return (
    <>
      <div className="writerMain">
        <h2>Welcome</h2>
        <br />
        <div className="writerContainer">
          <Typewriter
            options={{
              strings: [
                "I'm Faruk Shaikh.",
                "I'm a Web dev.",
                "I'm a React Dev.",
                "I'm a Figma UI/UX Designer.",
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

export default TypeWriter;
