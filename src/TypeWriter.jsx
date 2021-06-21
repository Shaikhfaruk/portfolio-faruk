import React from "react";
import Typewriter from "typewriter-effect";

const TypeWriter = () => {
  const name = {
    MERN: "MERN",
  }
    
  
  return (
    <>
      <div className="writerMain">
        <h2>Welcome</h2>
        <br />
        <div className="writerContainer">
          <Typewriter
            options={{
              strings: [
                "My self Faruk Shaikh.",
                `I'm ${name.MERN} Stack Dev"`,
                "I'm a UI/UX Designer(Figma & Adobe XD).",
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
