import React, { useState } from "react";
import "./Test.css";

const Test = function () {
  const [isClick, setIsClick] = useState(false);

  const handleClick = () => {
    setIsClick(!isClick);
  };

  return (
    <div onClick={handleClick} className={isClick && "click"}>
      <p>test</p>
      <p>{isClick ? "눌렸음" : "안눌림"}</p>
    </div>
  );
};

export default Test;
