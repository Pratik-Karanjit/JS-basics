import React from "react";

//This object variable holds all the data types of props sent from App.js and is called below while destructuring it
type LearnTypeScriptProps = {
  backgroundColor: string;
  fontSize: number;
  rounded?: boolean;
};

//Firstly, I destructured the props.
//As the props are object, I then called the LearnTypeScriptProps from above and gave its data types respectively.
const LearnTypeScript = ({
  backgroundColor,
  fontSize,
  rounded,
}: LearnTypeScriptProps) => {
  return (
    <div>
      Hello World!
      <button style={{ backgroundColor, fontSize }}>wow</button>
    </div>
  );
};

export default LearnTypeScript;
