import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './container/Home/home';
import AboutUs from './container/AboutUs/AboutUs';
import Culture from './container/Culture/Culture';
import Career from './container/Careers/Career';
import Contact from './container/Contact/Contact';

function App() {
  return (
    <div className='App'>
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/about' component={AboutUs} />
        <Route path='/culture' component={Culture} />
        <Route path='/careers' component={Career} />
        <Route path='/contact' component={Contact} />
      </Switch>
    </div>
  );
}

export default App;
