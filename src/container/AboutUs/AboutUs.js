import React, { Component } from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import PageHeader from '../../components/AboutUs/PageHeader/PageHeader';
import classes from './AboutUs.module.css';

class AboutUs extends Component {
  render() {
    return (
      <div className={classes.Root}>
        <Header />
        <PageHeader />
        <div className={classes.Blog}>
          <div className={classes.intro}>
            <p className='para'>
              DRW is a diversified trading firm that utilizes our own capital and trades at our
              own risk. We bring sophisticated technology and exceptional people together to
              solve complex problems in markets around the world and across many asset classes.
              We are motivated to compete at the highest level and unified by a commitment to
              operate with respect, curiosity and an open mind.
            </p>
          </div>

          <div className={classes.history}>
            <h1 className='heading'>Our history</h1>
            <p className='para'>
              DRW was founded by Don Wilson, who got his start trading on the floor of the
              Chicago Mercantile Exchange in the late 1980s. Every trader on the floor had a
              three letter acronym for identification—Don chose his initials, DRW, and the name
              stuck. Over the past 25 years, DRW has expanded globally while staying true to
              what has always set us apart…our ability to identify and capture opportunities by
              leveraging technology, research and risk management.
            </p>
            <img src='/images/about/1.jpeg' />
          </div>

          <div className={classes.approach}>
            <h1 className='heading'>Our approach</h1>
            <p className='para'>
              Trading in any asset class might include just one of these or may bring together
              all three; it all depends on what we see as the right strategy. Our knowledge of
              the markets, pricing and modeling skills, robust risk management, and application
              of technology work together to create liquidity, improve market efficiency and
              capture opportunities.
            </p>
            <img src='/images/about/2.jpeg' />
          </div>

          <div className={classes.people}>
            <h2 className='sub-heading'>1. People</h2>
            <p className='para'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vitae tellus
              rutrum leo commodo tempor. Nulla sollicitudin justo sit amet erat consequat, sit
              amet malesuada lacus vehicula. Fusce ullamcorper ultricies nulla, id gravida
              lectus lacinia tempor. Praesent consectetur viverra lacus id facilisis.
            </p>
            <div className={classes.cards}>
              <div>
                <span className={`material-icons ${classes.icons}`}>school</span>
                <br />
                <div>Cultural Background</div>
              </div>
              <div>
                <span className={`material-icons ${classes.icons}`}>school</span>
                <br />
                <div className={classes.cardText}>Educational Background</div>
              </div>
            </div>
          </div>
          <div className={classes.technology}>
            <h2 className='sub-heading'>2. Technology</h2>
            <p className='para'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vitae tellus
              rutrum leo commodo tempor. Nulla sollicitudin justo sit amet erat consequat, sit
              amet malesuada lacus vehicula. Fusce ullamcorper ultricies nulla, id gravida
              lectus lacinia tempor. Praesent consectetur viverra lacus id facilisis.
            </p>
            <div className={classes.cards}>
              <div>
                <span className={`material-icons ${classes.icons}`}>school</span>
                <br />
                <div className={classes.cardText}>Inhouse System</div>
              </div>
              <div>
                <span className={`material-icons ${classes.icons}`}>school</span>
                <br />
                <div className={classes.cardText}>ACM Winner Team</div>
              </div>
              <div>
                <span className={`material-icons ${classes.icons}`}>school</span>
                <br />
                <div className={classes.cardText}>Techniques Used</div>
              </div>
            </div>
          </div>
          <div className={classes.trading}>
            <h2 className='sub-heading'>3. Trading</h2>
            <p className='para'>
              We trade for our own account in major markets across the globe. No outside
              investors. No third party funds. So we can be innovative and nimble, while using
              our market experience to prudently manage risk. We have the team and
              infrastructure in place to drive business forward without the inefficiencies that
              hold back other organizations. Not many places do things like we do, and we like
              it that way.
            </p>
          </div>
          {/* <Intro />
          <hr />
          <History />
          <hr />
          <OurApproach />
          <hr />
          <Trading /> */}
        </div>
        <Footer />
      </div>
    );
  }
}

export default AboutUs;
