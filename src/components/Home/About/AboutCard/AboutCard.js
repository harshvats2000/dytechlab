import React, { useEffect } from 'react';
import classes from './AboutCard.module.css';
// import { Link } from 'react-router-dom';
import { HashLink as Link } from 'react-router-hash-link';

const AboutCard = ({ text, heading, img_src, url, animate }) => {
  return (
    <div className={classes.aboutCard} onMouseEnter={animate}>
      <img src={img_src} style={{ width: '80px', marginTop: '50px' }} />
      <h3 className={`underline-dark ${classes.heading}`}>{heading}</h3>
      <p className='para'>{text}</p>
      <Link to={url} className={`underline-light ${classes.button}`}>
        Learn More
      </Link>
    </div>
  );
};

export default AboutCard;
