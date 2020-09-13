import React from "react";
import classes from "./NavigationItems.module.css";
import NavigationItem from "./NavigationItem/NavigationItem";

const navigationItems = () => {
  return (
    <ul className={classes.NavigationItems}>
      <NavigationItem link="/">Home</NavigationItem>
      <NavigationItem link="/">About Us</NavigationItem>
      <NavigationItem link="/">Culture</NavigationItem>
      <NavigationItem link="/">Career</NavigationItem>
      <NavigationItem link="/">Contacts</NavigationItem>
    </ul>
  );
};

export default navigationItems;
