import classes from "./Update.module.css";
import React from "react";
import UpdateCards from "../UpdateCards/UpdateCards";

const update = () => {
  return (
    <div className={classes.Update}>
      <UpdateCards />
      <a href="/" className={classes.Button}>
        More Updates
      </a>
    </div>
  );
};

export default update;
