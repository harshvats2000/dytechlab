import React from 'react';
import classes from './culture.module.css';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import { p_color } from '../../constants';
import OpeningText from '../../components/OpeningText';

export default function Culture() {
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
          <div>
            <h1 className='heading'>Our Values</h1>
            <div className={classes.values}>
              <div className={classes.value_card}>
                {/* <span className={`material-icons ${classes.icons}`}>group_work</span> */}
                <img className={classes.icons} src='/images/culture/teamwork.png' />
                <br />
                <h3 className='heading'>Teamwork</h3>
                <p className={`para ${classes.para}`}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique reiciendis
                  dolore assumenda iusto molestias iure!
                </p>
              </div>
              <div className={classes.value_card}>
                {/* <span className={`material-icons ${classes.icons}`}>school</span> */}
                <img className={classes.icons} src='/images/culture/meritocracy.jpg' />
                <br />
                <h3 className='heading'>Meritocracy</h3>
                <p className={`para ${classes.para}`}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique reiciendis
                  dolore assumenda iusto molestias iure!
                </p>
              </div>
              <div className={classes.value_card}>
                {/* <span className={`material-icons ${classes.icons}`}>admin_panel_settings</span> */}
                <img className={classes.icons} src='/images/culture/integrity.png' />
                <br />
                <h3 className='heading'>Integrity</h3>
                <p className={`para ${classes.para}`}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique reiciendis
                  dolore assumenda iusto molestias iure!
                </p>
              </div>
              <div className={classes.value_card}>
                {/* <span className={`material-icons ${classes.icons}`}>import_contacts</span> */}
                <img className={classes.icons} src='/images/culture/learning.png' />
                <br />
                <h3 className='heading'>Learning</h3>
                <p className={`para ${classes.para}`}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique reiciendis
                  dolore assumenda iusto molestias iure!
                </p>
              </div>
              <div className={classes.value_card}>
                {/* <span className={`material-icons ${classes.icons}`}>school</span> */}
                <img className={classes.icons} src='/images/culture/agility.png' />
                <br />
                <h3 className='heading'>Agility</h3>
                <p className={`para ${classes.para}`}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique reiciendis
                  dolore assumenda iusto molestias iure!
                </p>
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
                <img src='/images/about/1.jpeg' />
              </div>

              <div className={`${classes.fun_card} ${classes.fun_card2}`}>
                <div className={classes.fun_card_title}>pantry food</div>
                <img src='/images/about/1.jpeg' />
              </div>

              <div className={`${classes.fun_card} ${classes.fun_card3}`}>
                <div className={classes.fun_card_title}>gym</div>
                <img src='/images/about/1.jpeg' />
              </div>

              <div className={`${classes.fun_card} ${classes.fun_card4}`}>
                <div className={classes.fun_card_title}>friday snack</div>
                <img src='/images/about/1.jpeg' />
              </div>

              <div className={`${classes.fun_card} ${classes.fun_card5}`}>
                <div className={classes.fun_card_title}>Game/poker</div>
                <img src='/images/about/1.jpeg' />
              </div>

              <div className={`${classes.fun_card} ${classes.fun_card6}`}>
                <div className={classes.fun_card_title}>jogging</div>
                <img src='/images/about/1.jpeg' />
              </div>

              <div className={`${classes.fun_card} ${classes.fun_card7}`}>
                <div className={classes.fun_card_title}>bbq/outing</div>
                <img src='/images/about/1.jpeg' />
              </div>

              <div className={`${classes.fun_card} ${classes.fun_card8}`}>
                <div className={classes.fun_card_title}>annual treats</div>
                <img src='/images/about/1.jpeg' />
              </div>

              <div className={`${classes.fun_card} ${classes.fun_card9}`}>
                <div className={classes.fun_card_title}>Marathon</div>
                <img src='/images/about/1.jpeg' />
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}
