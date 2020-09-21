import React from 'react';
import classes from './NavigationItems.module.css';
import NavigationItem from './NavigationItem/NavigationItem';

const navigationItems = () => {
  return (
    <ul className={classes.NavigationItems} style={{ padding: 0 }}>
      <NavigationItem link='/'>Home</NavigationItem>
      <NavigationItem link='/about'>About</NavigationItem>
      <NavigationItem link='/culture'>Culture</NavigationItem>
      <NavigationItem link='/'>Career</NavigationItem>
      <NavigationItem link='/'>Contacts</NavigationItem>
    </ul>
  );
};

export default navigationItems;
