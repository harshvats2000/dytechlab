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
          animate={() => animateSVG('approach-animation', 1)}
          logo={
            <svg height='100px' width='100px'>
              <path
                id='approach-animation'
                className='trading-logo'
                stroke='#24a3d8'
                strokeWidth='4.3'
                fill='none'
                d='M 0 100 l 25 -25 l 10 10 l 25 -25 h -15 h 17 v 15'
                strokeDasharray=''
                strokeDashoffset='0.00'
              />
            </svg>
          }
        />

        <AboutCard
          heading='Culture'
          text='As the markets have evolved, so have we, growing to include cryptoassets, venture
          capital and real estate.'
          logo={
            <svg height='100px' width='100px'>
              <path
                stroke='#24a3d8'
                strokeWidth='4.3'
                fill='none'
                d='M 0 100 l 25 -25 l 10 10 l 25 -25 h -15 h 17 v 15'
                strokeDasharray=''
                strokeDashoffset='0.00'
              />
            </svg>
          }
        />
        <AboutCard
          heading='Careers'
          text='Our people drive our success. We hire the best, provide the right tools and reward
          outstanding results.'
          logo={
            <svg height='100px' width='100px'>
              <path
                stroke='#24a3d8'
                strokeWidth='4.3'
                fill='none'
                d='M 0 100 l 25 -25 l 10 10 l 25 -25 h -15 h 17 v 15'
                strokeDasharray=''
                strokeDashoffset='0.00'
              />
            </svg>
          }
        />
      </div>
    );
  }
}

export default AboutCards;
