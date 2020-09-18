import React from 'react';
import classes from './Map.module.css';
import mapImg from '../../../assets/map.png';

const map = () => {
  return (
    <div className={classes.Root}>
      <p className={classes.Content}>
        {/* <Logo fill='#233b56' />{' '} */}
        {/* <img src='/images/logo.jpeg' /> */}
        <span style={{ marginLeft: '5px' }}>
          We empower a team of exceptional individuals to identify and capture trading and
          investment opportunities globally.
        </span>
      </p>
    </div>
  );
};

export default map;
