import React from "react";
import classes from "./AboutCards.module.css";
import AboutCard from "../AboutCard/AboutCard.js";
// import TradingLogo from "./Logo/TradingLogo.js";

const aboutCards = () => {
  return (
    <div className={classes.AboutCards}>
      <AboutCard heading="Trading" button="Learn More">
        Our strategies are founded on in-depth research, custom technology and
        careful risk assessment.
      </AboutCard>
      <AboutCard heading="Trading" button="Learn More">
        Our strategies are founded on in-depth research, custom technology and
        careful risk assessment.
      </AboutCard>
      <AboutCard heading="Trading" button="Learn More">
        Our strategies are founded on in-depth research, custom technology and
        careful risk assessment.
      </AboutCard>
      <AboutCard heading="Trading" button="Learn More">
        Our strategies are founded on in-depth research, custom technology and
        careful risk assessment.
      </AboutCard>
    </div>
  );
};

export default aboutCards;
