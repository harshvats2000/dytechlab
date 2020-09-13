import React from "react";
import classes from "./Intro.module.css";
import img from "../../../assets/homeImage.jpg";

const intro = () => {
  return (
    <div className={classes.CardMedia}>
      <img src={img} alt=" " />
      <h1 className={classes.CardTitle}>
        Where <span style={{ color: "#24a3d8" }}>experience</span>{" "}
        <span>meets</span> innovation
        <p style={{ fontSize: "16px", fontWeight: 400 }}>
          A results-driven team at the intersection of trading + technology
        </p>
      </h1>
    </div>
  );
};

export default intro;
