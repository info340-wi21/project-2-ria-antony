
import React from 'react'; //react library 
import './App.css';
import {AboutPage, Landing} from './About';
import 'bootstrap/dist/css/bootstrap.min.css'; //bootstrap
import {Route, Switch, Link, Redirect, NavLink} from 'react-router-dom';



function App() {
  return (
    <div className="the-body">

      {/*header for index page */}
      <header>
        <NavBar />
      </header>

      {/* index page searchBox*/}
      <main>
      <Switch>
        <Route exact path="/"> <Search /> </Route>
        <Route path="/about"> <AboutPage /> </Route>
        <Redirect to="/" />
      </Switch>
      </main>

      {/* index page footer*/}
      <footer className="footer">
        <p>2021 &#169;</p>
      </footer>
    </div>
  );
}

//function for the NavBar
function NavBar() {

  return (
    <nav className="navbar navbar-expand-lg navbar-dark navbar-custom">
      <a className="navbar-brand" id="nav-elem" href="/">GameFinder</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav">
          <a className="nav-item nav-link text-light"><NavLink exact to="/">Home</NavLink></a>
          <a className="nav-item nav-link text-light"><NavLink to="/about">About</NavLink></a>
        </div>
      </div>
    </nav>

  )
}

function Search(){
  return (
    <div>
      <div className="searchBox" role="search">
          <input type="text" id="searchQuery" placeholder="Search..." />
          <button id="searchButton"><i className="fas fa-search fa-flip-horizontal" aria-label="search"></i>Search</button>
      </div>
  </div>
  );
}
export default App;
