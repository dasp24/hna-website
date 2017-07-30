import React from 'react';
import ReactDOM from 'react-dom';
import {Route,
        BrowserRouter as Router,
        Switch} from 'react-router-dom';
  
import Website from './Website.js';
import About from './components/About';
import Contact from './components/Contact';
import Costume from './components/Costume';
import Home from './components/Home';
import Star from './components/Star';
import TwoWay from './components/TwoWay';

const App = () => {
  return (
  <Router>
      <div>
     <Route path="/" component={Website} /> 
    <Switch > 
        <div className='content'>
        <Route exact path="/" component={Home}/>
        <Route path="/star" component={Star}/>
        <Route path="/2-way" component={TwoWay}/>
        <Route path="/costume" component={Costume} />
        <Route path="/contact" component={Contact} />
        <Route path="/about" component={About} />
        </div>
    </Switch>   
    </div>
</Router>);
  };


ReactDOM.render(<App/>, 
document.getElementById('roots'));