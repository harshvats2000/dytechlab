import React from 'react';
import './contact.module.css';
import classes from './contact.module.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { p_color } from '../../constants';
import OpeningText from '../../components/OpeningText';

export default function Contact() {
  return (
    <>
      <div className={classes.root}>
        <Header />

        <div className={classes.banner}>
          <img src='/images/about/2.jpeg' className={classes.img} />
          <h1 className={classes.bannerTitle}>
            Where <span style={{ color: p_color }}>experience</span> <span>meets</span>{' '}
            innovation
            <p style={{ fontSize: '16px', fontWeight: 400 }}>
              A results-driven team at the intersection of trading + technology
            </p>
          </h1>
        </div>

        <OpeningText text='We have two offices right now.' />

        <div className={classes.body}>
          <div className={classes.cards}>
            <div className={classes.card}>
              <img src='https://images.pexels.com/photos/1212956/pexels-photo-1212956.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940' />
              <div>Singapore</div>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
}
