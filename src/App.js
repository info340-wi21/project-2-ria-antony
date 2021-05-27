
import React from 'react'; //react library 
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'; //bootstrap



function App() {
  return (
    <body>

      {/*header for index page */}
      <header>
        <NavBar />
      </header>

      {/* index page searchBox*/}
      <main>
        <div className="searchBox" role="search">
          <input type="text" id="searchQuery" placeholder="Search..." />
          <button id="searchButton"><i className="fas fa-search fa-flip-horizontal" aria-label="search"></i></button>
        </div>
          <div className="container">
              <div className="row outerMostRow">
          </div>
          </div>
      </main>






    {/* index page footer*/}
      <footer className="footer">
        <p>2021 &#169;</p>
      </footer>
    </body>
  );
}

//function for the NavBar
function NavBar() {

  return (
    <nav className="navbar navbar-expand-lg navbar-dark navbar-custom">
          <a className="navbar-brand" id="nav-elem" href="#">GameFinder</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <a className="nav-item nav-link text-light" href="#">Home</a> {/*to fix!*/}
              <a className="nav-item nav-link text-light" href="">Landing</a>{/*to fix!*/}
              <a className="nav-item nav-link text-light" href="">About</a> {/*to fix!*/}
            </div>
          </div>
        </nav>

  )
}
export default App;
