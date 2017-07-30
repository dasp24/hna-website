import React from 'react';
import {Route,
        BrowserRouter as Router,
        Redirect,
        NavLink,
        Switch,
        Link 
      } from 'react-router-dom';
  
const Website = (props) => {
    return (
      <div>
        <div>
            <img src={('./newlogo.jpg')} id='mainLogo'/>
            <a id='contact_details'>0161 202 1199</a>
            <img src={('./telephoneSymbol.jpeg')} id='telephone'/>
            <div className='col-md-6'>
              <a href='https://www.facebook.com/HnaFacilitiestvFilmLocationFacilityVehicles/'><img  className='logo' src={('./fbLogo.jpeg')} /></a>
              <a  href='https://twitter.com/hnafacilities'><img className='logo' src={('./instagramLogo.png')}/></a>
              <a  href='https://www.instagram.com/?hl=en'><img className='logo' src={('./twitterLogo.jpeg')}/></a>
            </div>
        </div>
        <div className="container-fluid">
          <ul className="header nav navbar-nav">
            <li><NavLink to="/" exact activeClassName="active">Home</NavLink></li>  
              <li className="dropdown">
                <a className="dropdown-toggle" data-toggle="dropdown">Artist Trailers<span className="caret"></span></a>
                <ul className="dropdown-menu">
                  <li><NavLink to="/artist/star">Star Trailers</NavLink></li>
                  <li><NavLink to="/artist/2-way">2-way Trailers</NavLink></li>
                  <li><NavLink to="/artist/3-way">3-way Trailers</NavLink></li>
                  <li><NavLink to="/artist/4-way">4-way Trailers</NavLink></li>
                </ul>
              </li>
            <li><NavLink to="/costume" activeClassName="active">Costume Trailers</NavLink></li>
            <li><NavLink to="/makeup" activeClassName="active">Make up Trailers</NavLink></li>
            <li><NavLink to="/production" activeClassName="active">Production trailers</NavLink></li>
            <li><NavLink to="/dining" activeClassName="active">Dining Trailers</NavLink></li>
            <li><NavLink to="/honey" activeClassName="active">Honey Wagons</NavLink></li>
            <li><NavLink to="/technical" activeClassName="active">Technical Vehicles</NavLink></li>
            <li className="dropdown">
                <a className="dropdown-toggle" data-toggle="dropdown">Support Vehicles<span className="caret"></span></a>
                <ul className="dropdown-menu">
                   <li><NavLink to="/support/water" activeClassName="active">Water Bowsers</NavLink></li>
                   <li><NavLink to="/support/generators" activeClassName="active">Generators</NavLink></li>
                </ul>
              </li>
          </ul>
        </div>
        <nav className="footer navbar navbar-inverse navbar-fixed-bottom">
          <div className="container-fluid">
            <div className="navbar-header">
              <a className="navbar-brand">HnA Facilities</a>
            </div>
            <ul className="nav navbar-nav">
              <li><NavLink to="/contact" activeClassName="active">Contact Us</NavLink></li>
              <li><NavLink to="/about" activeClassName="active">About us</NavLink></li>
              <li><NavLink to="/careers" activeClassName="active">Careers</NavLink></li>
              <li><NavLink to="/build" activeClassName="active">Build your package</NavLink></li>
            </ul>
          </div>
        </nav>
      </div>
    );
  };


    export default Website;