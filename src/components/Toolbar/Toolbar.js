import React from 'react';
import classes from './Toolbar.module.css';
import NavigationItems from '../Navigation/NavigationItems/NavigationItems';
import MenuToggle from '../DropdownMenu/MenuToggle/MenuToggle';

const toolbar = (props) => {
  return (
    <div className={classes.Toolbar}>
      {/* <Logo fill='#233b56' /> */}
      {/* <img src='/images/logo.jpg' className={classes.logo} /> */}
      <div className={classes.DesktopOnly}>
        <NavigationItems />
      </div>
      <div className={classes.MobileOnly} onClick={props.toggleDropdownMenu}>
        <MenuToggle />
      </div>
    </div>
  );
};

export default toolbar;
