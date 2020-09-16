import React from 'react';
import './NavigationItems.css';
import NavigationItem from './NavigationItem/NavigationItem';

const navigationItems = () => {
  return (
    <ul className='NavigationItems'>
      <NavigationItem link='/'>Home</NavigationItem>
      <NavigationItem link='/'>About Us</NavigationItem>
      <NavigationItem link='/'>Culture</NavigationItem>
      <NavigationItem link='/'>Career</NavigationItem>
      <NavigationItem link='/'>Contacts</NavigationItem>
    </ul>
  );
};

export default navigationItems;
