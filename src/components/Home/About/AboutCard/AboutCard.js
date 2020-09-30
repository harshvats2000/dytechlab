import React, { useEffect } from 'react';
import classes from './AboutCard.module.css';

const AboutCard = ({ text, heading, img_src, animate }) => {
  return (
    <div className={classes.aboutCard} onMouseEnter={animate}>
      <img src={img_src} style={{ width: '80px', marginTop: '50px' }} />
      <h3 className={`underline-dark ${classes.heading}`}>{heading}</h3>
      <p className='para'>{text}</p>
      <a href='/' className={`underline-light ${classes.button}`}>
        Learn More
      </a>
    </div>
  );
};

export default AboutCard;
