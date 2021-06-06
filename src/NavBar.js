/* File contains NavBar componenet. The component can be called
   using <NavBar/>.
*/

import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; //bootstrap
import {NavLink } from 'react-router-dom';
import './App.css';

function NavBar() {
    /* This component renders a 
       navigation bar that can direct
       the user to the Home page, About page,
       and Favorites page.
    */

    return (
      <nav className="navbar navbar-expand-lg navbar-dark navbar-custom">
        <a className="navbar-brand" id="nav-elem" href="/">GameFinder</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <NavLink className="nav-item nav-link text-light" exact to="/">Home</NavLink>
            <NavLink className="nav-item nav-link text-light" to="/about">About</NavLink>
            <NavLink className="nav-item nav-link text-light" to="/favorite">Favorites</NavLink>
          </div>
        </div>
      </nav>
  
    )
  }

export default NavBar;
export {NavBar};