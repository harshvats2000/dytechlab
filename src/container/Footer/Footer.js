import React, { Component } from 'react';
import classes from './Footer.module.css';
import FooterNavigationItems from '../../components/FooterNav/NavigationItems/NavigationItems';

class Footer extends Component {
  render() {
    return (
      <div className={classes.Root}>
        <div className={classes.Footer}>
          <div className={classes.CenterItems}>
            {/* <DrwLogo fill='white' /> */}
            {/* <img src='/images/logo.jpg' /> */}
            <FooterNavigationItems />
          </div>
          <div className={classes.BottomItems}>
            <div className={classes.Disclaimer}>
              © 2020 DRW Holdings, LLC. All Rights Reserved.
            </div>
            <div className={classes.LegalNav}>
              <a href='/'>Terms of Use</a>
              <a href='/'>Privacy Notice</a>
              <a href='/'>California Privacy Notice</a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
