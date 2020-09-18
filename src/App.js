import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './container/Home/home';
import AboutUs from './container/AboutUs/AboutUs';

function App() {
  return (
    <div className='App'>
      <Switch>
        <Route path='/about-us' component={AboutUs} />
        <Route path='/' exact component={Home} />
      </Switch>
    </div>
  );
}

export default App;
