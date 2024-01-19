import React from "react";
import useWindowResize from ".";

const test = () => {
  const windowSize = useWindowResize();

  return (
    <div>
      <h1>Width: {windowSize.width}</h1>
      <h1>Height: {windowSize.height}</h1>
    </div>
  );
};

export default test;
