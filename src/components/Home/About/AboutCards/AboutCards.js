import React, { Component } from 'react';
import classes from './AboutCards.module.css';
import AboutCard from '../AboutCard/AboutCard.js';
import { animateSVG } from '../../../../functions/animateSVG';

class AboutCards extends Component {
  render() {
    return (
      <div className={classes.AboutCards}>
        <AboutCard
          heading='Approach'
          text='Our strategies are founded on in-depth research, custom technology and careful risk
          assessment.'
          img_src='/images/home/approach.png'
        />

        <AboutCard
          heading='Culture'
          text='As the markets have evolved, so have we, growing to include cryptoassets, venture
          capital and real estate.'
          img_src='/images/home/culture.png'
        />
        <AboutCard
          heading='Careers'
          text='Our people drive our success. We hire the best, provide the right tools and reward
          outstanding results.'
          img_src='/images/home/career.png'
        />
      </div>
    );
  }
}

export default AboutCards;
