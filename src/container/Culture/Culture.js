import React, { useEffect } from 'react';
import classes from './culture.module.css';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import { p_color } from '../../constants';
import OpeningText from '../../components/OpeningText';

export default function Culture() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
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

        <OpeningText
          text='We empower a team of exceptional individuals to identify and capture trading and
          investment opportunities globally.'
        />

        <div className={classes.body}>
          <div className={classes.values}>
            <h1 className='heading'>Our Values</h1>
            <div className={classes.cards}>
              <div className={classes.card}>
                {/* <span className={`material-icons ${classes.icons}`}>school</span> */}
                <div>
                  <img src='/images/culture/teamwork.png' />
                </div>
                <div className={classes.card_body}>
                  <h4>Teamwork</h4>
                  <p className='para'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, tenetur.
                  </p>
                </div>
              </div>

              <div className={classes.card}>
                {/* <span className={`material-icons ${classes.icons}`}>school</span> */}
                <div>
                  <img src='/images/culture/meritocracy.png' />
                </div>
                <div className={classes.card_body}>
                  <h4>Meritocracy</h4>
                  <p className='para'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, tenetur.
                  </p>
                </div>
              </div>

              <div className={classes.card}>
                {/* <span className={`material-icons ${classes.icons}`}>school</span> */}
                <div>
                  <img src='/images/culture/integrity.png' />
                </div>
                <div className={classes.card_body}>
                  <h4>Integrity</h4>
                  <p className='para'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, tenetur.
                  </p>
                </div>
              </div>
            </div>

            <div className={classes.cards}>
              <div className={classes.card}>
                {/* <span className={`material-icons ${classes.icons}`}>school</span> */}
                <div>
                  <img src='/images/culture/learning.png' />
                </div>
                <div className={classes.card_body}>
                  <h4>Learning</h4>
                  <p className='para'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, tenetur.
                  </p>
                </div>
              </div>

              <div className={classes.card}>
                {/* <span className={`material-icons ${classes.icons}`}>school</span> */}
                <div>
                  <img src='/images/culture/agility.png' />
                </div>
                <div className={classes.card_body}>
                  <h4>Agility</h4>
                  <p className='para'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, tenetur.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h1 className={classes.fun_heading}>
              At DRW, we do more than work together. We support and learn from each other
              throughout our careers.
            </h1>
            <div className={classes.fun}>
              <div className={`${classes.fun_card} ${classes.fun_card1}`}>
                <div className={classes.fun_card_title}>Movie Night</div>
                <img alt='' src='/images/about/1.jpeg' />
              </div>

              <div className={`${classes.fun_card} ${classes.fun_card2}`}>
                <div className={classes.fun_card_title}>pantry food</div>
                <img alt='' src='/images/about/1.jpeg' />
              </div>

              <div className={`${classes.fun_card} ${classes.fun_card3}`}>
                <div className={classes.fun_card_title}>gym</div>
                <img alt='' src='/images/about/1.jpeg' />
              </div>

              <div className={`${classes.fun_card} ${classes.fun_card4}`}>
                <div className={classes.fun_card_title}>friday snack</div>
                <img alt='' src='/images/about/1.jpeg' />
              </div>

              <div className={`${classes.fun_card} ${classes.fun_card5}`}>
                <div className={classes.fun_card_title}>Game/poker</div>
                <img alt='' src='/images/about/1.jpeg' />
              </div>

              <div className={`${classes.fun_card} ${classes.fun_card6}`}>
                <div className={classes.fun_card_title}>jogging</div>
                <img alt='' src='/images/about/1.jpeg' />
              </div>

              <div className={`${classes.fun_card} ${classes.fun_card7}`}>
                <div className={classes.fun_card_title}>bbq/outing</div>
                <img alt='' src='/images/about/1.jpeg' />
              </div>

              <div className={`${classes.fun_card} ${classes.fun_card8}`}>
                <div className={classes.fun_card_title}>annual treats</div>
                <img alt='' src='/images/about/1.jpeg' />
              </div>

              <div className={`${classes.fun_card} ${classes.fun_card9}`}>
                <div className={classes.fun_card_title}>Marathon</div>
                <img alt='' src='/images/about/1.jpeg' />
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}
