import React from "react";
import classes from "./AboutCards.module.css";
import AboutCard from "../AboutCard/AboutCard.js";
import TradingLogo from "../Logo/TradingLogo.js";

const aboutCards = () => {
  return (
    <div className={classes.AboutCards}>
      <AboutCard
        heading="Trading and Technology"
        button="Learn More"
        logo={<TradingLogo />}
      >
        Our strategies are founded on in-depth research, custom technology and
        careful risk assessment.
      </AboutCard>

      <AboutCard
        heading="Other ventures"
        button="Learn More"
        logo={<TradingLogo />}
      >
        As the markets have evolved, so have we, growing to include
        cryptoassets, venture capital and real estate.
      </AboutCard>
      <AboutCard heading="Careers" button="Learn More" logo={<TradingLogo />}>
        Our people drive our success. We hire the best, provide the right tools
        and reward outstanding results.
      </AboutCard>
    </div>
  );
};

export default aboutCards;
