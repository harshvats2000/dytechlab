import React from "react";

const animtateSVG = () => {
  var path = document.querySelector("path");
  var length = path.getTotalLength();
  // Clear any previous transition
  path.style.transition = path.style.WebkitTransition = "none";
  // Set up the starting positions
  path.style.strokeDasharray = length + " " + length;
  path.style.strokeDashoffset = length;
  // Trigger a layout so styles are calculated & the browser
  // picks up the starting position before animating
  path.getBoundingClientRect();
  // Define our transition
  path.style.transition = path.style.WebkitTransition =
    "stroke-dashoffset 1s ease-in-out";
  // Go!
  path.style.strokeDashoffset = "0";
};

const logo = () => {
  return (
    <svg height="100px" width="100px" onClick={animtateSVG}>
      <path
        stroke="#24a3d8"
        stroke-width="4.3"
        fill="none"
        d="M 0 100 l 25 -25 l 10 10 l 25 -25 h -15 h 17 v 15"
        stroke-dasharray=""
        stroke-dashoffset="0.00"
      />
    </svg>
  );
};

export default logo;
