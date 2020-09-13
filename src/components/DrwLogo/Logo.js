import React from "react";
import classes from "./Logo.module.css";

const logo = (props) => (
  <svg className={classes.Logo}>
    <svg
      viewBox="0 0 151.4 49.9"
      preserveAspectRatio="xMinYMin meet"
      id="svg--drw-logo"
    >
      <g className="bsvg-logo">
        <path
          className="bsvg-logo__main-fill"
          d="M18.8 0H0v49.9h18.8C34.5 49.9 44 40.2 44 25 44 9.7 34.5 0 18.8 0zm-.6 38.6h-5.4V11.2h5.4c8.3 0 12.9 5.3 12.9 13.7 0 8.4-4.6 13.7-12.9 13.7zM89.1 17C89.1 6.1 81.7 0 71 0H48.5v49.9h12.9V33.4H66l10.4 16.5h14.5L79.1 32c6.1-2.3 10-7.5 10-15zm-19.5 6h-8.1V11h8.1c4.6 0 6.7 2.4 6.7 6s-2.1 6-6.7 6zm55.5-23h-12.5l13.1 49.8h12.5L125.1 0zM90.3 0l13.1 49.8H116L102.9 0H90.3z"
          fill={props.fill}
        ></path>
        <path
          className="bsvg-logo__carat"
          fill="#24a3d8"
          d="M151.4 0h-15.1l7.5 28.5"
        ></path>
      </g>
    </svg>
  </svg>
);

export default logo;
