import React from 'react';
import classes from './PageHeader.module.css';
import { p_color } from '../../../constants';

const pageHeader = () => {
  return (
    <div className={classes.Root}>
      <div className={classes.CardTitle}>
        <h1>
          A <span style={{ color: p_color }}>diversified</span> approach
        </h1>
        <p style={{ fontSize: '16px', fontWeight: 400 }}>
          A results-driven team at the intersection of trading + technology
        </p>
      </div>
    </div>
  );
};

export default pageHeader;
