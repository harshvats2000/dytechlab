import React from "react";
import classes from "./UpdateCard.module.css";

const updateCard = (props) => {
  return (
    <div className={classes.Card}>
      <a href="/">
        <div className={classes.CardHeader}>
          <div className={classes.Header}>{props.heading}</div>
        </div>
        <div className={classes.CardMedia}>
          <img src={props.src} alt=" " />
          <h1 className={classes.CardTitle}>{props.text}</h1>
        </div>
      </a>
    </div>
  );
};

export default updateCard;
