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
        <ul className="header">
            <li><NavLink to="/" exact activeClassName="active">Home</NavLink></li>  
          
          <li><NavLink to="/star" activeClassName="active">Star Trailers</NavLink></li>
          <li><NavLink to="/2-way" activeClassName="active">2-way Trailers</NavLink></li>
    
          <li><NavLink to="/costume" activeClassName="active">Costume Trailers</NavLink></li>
        </ul>
        <ul className="footer">
          <li><NavLink to="/contact" activeClassName="active">Contact Us</NavLink></li>
          <li><NavLink to="/about" activeClassName="active">About us</NavLink></li>
        </ul>
        <a id="copywrite">This is copywrited by people who do stuff</a> 
      </div>
    );
  };


    export default Website;