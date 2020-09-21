import React, { useEffect } from 'react';
import classes from './AboutCard.module.css';

const AboutCard = ({ text, heading, logo, animate }) => {
  return (
    <div className={classes.AboutCard} onMouseEnter={animate}>
      {logo}
      <h3 className={classes.Heading}>{heading}</h3>
      <p className='para'>{text}</p>
      <a href='/' className={classes.Button}>
        Learn More
      </a>
    </div>
  );
};

export default AboutCard;
