import React, { Component } from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
// import Update from "../../components/Home/UpdateSection/Update";
import Intro from "../../components/Home/Intro/Intro";
import Map from "../../components/Home/Map/Map";
import About from "../../components/Home/About/About.js";

class Home extends Component {
  render() {
    return (
      <>
        <Header />
        <Intro />
        <Map />
        <About />
        {/* <Update /> */}
        <Footer />
      </>
    );
  }
}

export default Home;
