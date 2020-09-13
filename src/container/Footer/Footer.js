import React, { Component } from "react";
import classes from "./Footer.module.css";
import SocialLogo from "../../components/SocialLogo/Logo";
import DrwLogo from "../../components/DrwLogo/Logo";
import FooterNavigationItems from "../../components/FooterNav/NavigationItems/NavigationItems";

class Footer extends Component {
  render() {
    return (
      <div className={classes.Footer}>
        <DrwLogo fill="white" />
        <div className={classes.FooterContent}>
          <FooterNavigationItems />
          <div className={classes.BottomItems}>
            <div className={classes.Disclaimer}>
              © 2020 DRW Holdings, LLC. All Rights Reserved.
            </div>
            <div className={classes.LegalNav}>
              <a href="/">Terms of Use</a>
              <a href="/">Privacy Notice</a>
              <a href="/">California Privacy Notice</a>
            </div>
          </div>
        </div>
        <div className={classes.SocialLogo}>
          <SocialLogo />
        </div>
      </div>
    );
  }
}

export default Footer;
