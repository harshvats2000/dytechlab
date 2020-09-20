import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './container/Home/home';
import AboutUs from './container/AboutUs/AboutUs';
import Culture from './container/Culture/Culture';

function App() {
  return (
    <div className='App'>
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/about-us' component={AboutUs} />
        <Route path='/culture' component={Culture} />
      </Switch>
    </div>
  );
}

export default App;
