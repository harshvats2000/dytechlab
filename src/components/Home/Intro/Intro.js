import React from 'react';
import classes from './Intro.module.css';

const Intro = () => {
  React.useEffect(() => {
    const video = document.querySelector('#home-video');
    video.style.width = '100vw';
  });
  return (
    <div className={classes.CardMedia}>
      {/* <img src={img} alt=" " /> */}
      <video id='home-video' width='100vw' height='100%' autoPlay muted loop>
        <source src='/videos/home.mp4' type='video/mp4' />
      </video>
      <h1 className={classes.CardTitle}>
        Where <span style={{ color: '#24a3d8' }}>experience</span> <span>meets</span>{' '}
        innovation
        <p style={{ fontSize: '16px', fontWeight: 400 }}>
          A results-driven team at the intersection of trading + technology
        </p>
      </h1>
    </div>
  );
};

export default Intro;
