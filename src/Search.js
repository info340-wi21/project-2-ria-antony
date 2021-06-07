/* File contains Search componenet. The component can be called
   using <Search/>. The componenet takes in the props
   keyword (a state variable that holds user input) and
   setKeyword (a function that changes state variable).
*/

import React from 'react';
import { Jumbotron } from 'reactstrap';
import './App.css';

function Search(props) {
/* This component renders instructions
   for user on how to use the website
   along with a search bar in which the
   user can input their favorite game
   and receive search results as they
   type.
*/
let placeholder = "Try searching for games like Battlefield, Forza, Farming Simulator or Twilight Princess";
  return (

    <div className="search-view">
      <Jumbotron>
      <h1 className="display-2" id="homePage">GAME FINDER</h1>
      <img src="/img/android-chrome-512x512.png" class="img-fluid" alt="game console icon"></img>
      <p id="paragraph">Find your game, add it to your favorites. Join the Reddit and Discord. Game on.</p>
      <p></p>

      
      <div className="searchBox" role="search">
        {/* creates a search bar that reacts to any change in user input */}
        <input value={props.keyword} onInput={e => props.setKeyword(e.target.value)} type="text" id="searchQuery" placeholder={placeholder} /> 
      </div>
      </Jumbotron>
    </div>
  );
}

export default Search;

export { Search };