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
import ThreeWay from './components/ThreeWay';
import FourWay from './components/FourWay';
import Careers from './components/Careers';
import Build from './components/Build';
import MakeUp from './components/MakeUp';
import Production from './components/Production';
import Dining from './components/Dining';
import Honey from './components/Honey';
import Technical from './components/Technical';
import Water from './components/Water';
import Generators from './components/Generators';

const App = () => {
  return (
  <Router>
      <div>
     <Route path="/" component={Website} /> 
    <Switch > 
        <div className='content'>
        <Route exact path="/" component={Home}/>
        <Route path="/artist/star" component={Star}/>
        <Route path="/artist/2-way" component={TwoWay}/>
        <Route path="/artist/3-way" component={ThreeWay}/>
        <Route path="/artist/4-way" component={FourWay}/>
        <Route path="/costume" component={Costume} />
        <Route path="/contact" component={Contact} />
        <Route path="/about" component={About} />
        <Route path="/careers" component={Careers} />
        <Route path="/build" component={Build} />
        <Route path="/makeup" component={MakeUp} />
        <Route path="/production" component={Production} />
        <Route path="/dining" component={Dining} />
        <Route path="/honey" component={Honey} />
        <Route path="/technical" component={Technical} />
        <Route path="/support/water" component={Water} />
        <Route path="/support/generators" component={Generators} />
        </div>
    </Switch>   
    </div>
</Router>);
  };


ReactDOM.render(<App/>, 
document.getElementById('roots'));