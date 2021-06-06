import React from 'react';
import { Jumbotron } from 'reactstrap';
import './App.css';

function Search(props) {
  return (

    <div className="search-view">
      <Jumbotron>
      <h1 className="display-2" id="homePage">GAME FINDER</h1>
      <img src="/img/android-chrome-512x512.png" class="img-fluid" alt="Responsive image"></img>
      <p id="paragraph">Find your game, add it to your favorites. Join the Reddit and Discord. Game on.</p>
      <p></p>

      
      <div className="searchBox" role="search">
        <input value={props.keyword} onInput={e => props.setKeyword(e.target.value)} type="text" id="searchQuery" placeholder="Search..." />
      </div>
      </Jumbotron>
    </div>
  );
}

export default Search;

export { Search };