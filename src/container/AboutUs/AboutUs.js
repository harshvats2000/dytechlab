import React, { Component } from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import PageHeader from "../../components/AboutUs/PageHeader/PageHeader";
import Intro from "../../components/AboutUs/Intro/Intro";
import History from "../../components/AboutUs/History/History";
import OurApproach from "../../components/AboutUs/OurApproach/OurApproach";
import classes from "./AboutUs.module.css";
import Trading from "../../components/AboutUs/Trading/Trading";

class AboutUs extends Component {
  render() {
    return (
      <div className={classes.Root}>
        <Header />
        <PageHeader />
        <div className={classes.Blog}>
          <Intro />
          <hr />
          <History />
          <hr />
          <OurApproach />
          <hr />
          <Trading />
        </div>
        <Footer />
      </div>
    );
  }
}

export default AboutUs;
