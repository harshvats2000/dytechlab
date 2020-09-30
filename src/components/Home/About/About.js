import React from 'react';
import classes from './About.module.css';
import AboutCards from './AboutCards/AboutCards';
import { Link } from 'react-router-dom';

const about = () => {
  return (
    <div className={classes.About}>
      <AboutCards />
      <Link to='/about' className={classes.Button}>
        Learn More About Drw
      </Link>
    </div>
  );
};

export default about;
