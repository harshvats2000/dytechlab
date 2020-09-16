import React, { Component } from 'react';
import classes from './AboutCards.module.css';
import AboutCard from '../AboutCard/AboutCard.js';

const animateSVG = () => {
  var path = document.querySelector('.trading-logo');
  console.log(path);
  var length = path.getTotalLength();
  // Clear any previous transition
  path.style.transition = path.style.WebkitTransition = 'none';
  // Set up the starting positions
  path.style.strokeDasharray = length + ' ' + length;
  path.style.strokeDashoffset = length;
  // Trigger a layout so styles are calculated & the browser
  // picks up the starting position before animating
  path.getBoundingClientRect();
  // Define our transition
  path.style.transition = path.style.WebkitTransition = 'stroke-dashoffset 1s ease-in-out';
  // Go!
  path.style.strokeDashoffset = '0';
  console.log('animate-function');
};

class AboutCards extends Component {
  componentDidMount() {
    animateSVG();
  }

  render() {
    return (
      <div className={classes.AboutCards}>
        <AboutCard
          heading='Trading and Technology'
          button='Learn More'
          animate={animateSVG}
          logo={
            <svg height='100px' width='100px'>
              <path
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
        >
          Our strategies are founded on in-depth research, custom technology and careful risk
          assessment.
        </AboutCard>

        <AboutCard
          heading='Other ventures'
          button='Learn More'
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
        >
          As the markets have evolved, so have we, growing to include cryptoassets, venture
          capital and real estate.
        </AboutCard>
        <AboutCard
          heading='Careers'
          button='Learn More'
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
        >
          Our people drive our success. We hire the best, provide the right tools and reward
          outstanding results.
        </AboutCard>
      </div>
    );
  }
}

export default AboutCards;
