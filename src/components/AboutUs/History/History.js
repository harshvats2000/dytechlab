import React from 'react';
import classes from './History.module.css';

const History = () => {
  return (
    <div className={classes.Root}>
      <h4>Our History</h4>
      <p>
        DRW was founded by <a href='/about/don-wilson'>Don Wilson</a>, who got his start
        trading on the floor of the Chicago Mercantile Exchange in the late 1980s.&nbsp; Every
        trader on the floor had a three letter acronym for identification—Don chose his
        initials, DRW, and the name stuck. Over the past 25 years, DRW has expanded globally
        while staying true to what has always set us apart…our ability to identify and capture
        opportunities by leveraging technology, research and risk management.
      </p>
    </div>
  );
};

export default History;
