"use client"

import { useState } from "react";
import { WrapperTitle } from "./WrapperTitle";
import Typer from "../Typer";
import { useGetService } from "@/modules/core/contexts/DiContext";
import { PortfolioService } from "../../services/portfolio-service";

const TitleBanner = () => {
  const portfolioService = useGetService(PortfolioService)
  const titles = portfolioService.getHomePageTitles()

  const [isEndLine, setIsEndLine] = useState(false);
  const onComplete = () => {
    setIsEndLine(true);
  };

  return (
    <WrapperTitle>
      {isEndLine ? (
        <h3
          className="font-sans text-3xl lg:text-5xl"
          style={{ paddingTop: 1.699 }}
          color={"#000000"}
        >
          {titles.big}
        </h3>
      ) : (
        <Typer
          color={"#000000"}
          className="font-sans text-3xl lg:text-5xl"
          fontSizeCursor={"3rem"}
          strings={[titles.big]}
          typeSpeed={25}
          onComplete={onComplete}
        />
      )}

      {isEndLine ? (
        <Typer
          className="font-sans text-base lg:text-xl mt-2"
          color={"#000000"}
          fontSizeCursor="1.5rem"
          strings={[titles.small]}
          typeSpeed={25}
        />
      ) : (
        <div className="mt-0 md:mt-2" />
      )}
    </WrapperTitle>
  );
};
export default TitleBanner;
