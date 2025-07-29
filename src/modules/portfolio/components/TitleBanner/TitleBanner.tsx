"use client"

import { useState } from "react";
import { WrapperTitle } from "./WrapperTitle";
import Typer from "../Typer";

const TitleBanner = () => {
  const [isEndLine, setIsEndLine] = useState(false);
  const onComplete = () => {
    setIsEndLine(true);
  };

  return (
    <WrapperTitle>
      {isEndLine ? (
        <h3
          className="font-sans"
          style={{ paddingTop: 1.699 }}
          color={"#000000"}
        >
          Hi, I am David
        </h3>
      ) : (
        <Typer
          color={"#000000"}
          fontSizeCursor={"3rem"}
          strings={["Hi, I am David"]}
          typeSpeed={25}
          onComplete={onComplete}
        />
      )}

      {isEndLine ? (
        <Typer
          color={"#000000"}
          fontSizeCursor="1.5rem"
          strings={["I am Fullstack Developer"]}
          typeSpeed={25}
        />
      ) : (
        <div style={{ padding: 2 }} />
      )}
    </WrapperTitle>
  );
};
export default TitleBanner;
