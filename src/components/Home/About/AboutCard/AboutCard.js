import React from "react";
import classes from "./AboutCard.module.css";

const aboutCard = (props) => {
  return (
    <div className={classes.AboutCard}>
      {props.logo}
      <h3 className={classes.Heading}>{props.heading}</h3>
      <p className={classes.Body}>{props.children}</p>
      <a href="/" className={classes.Button}>
        {props.button}
      </a>
    </div>
  );
};

export default aboutCard;
