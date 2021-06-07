/* File contains RenderCardList componenet. The component can be called
   using <RenderCardList/>. The componenet takes in the props
   gameData (an array of objects containing information about games) and
   keyword (a state variable that contains userInput from search bar).
*/
import React from 'react';
import RenderCard from './RenderCard';

function RenderCardList(props) {
    /* This component takes th user input (which is
       stored in the keyword prop) from the search
       bar and finds four different games that
       are similar to the game the user inputted. These
       games are taken from the gameData prop. This component
       returns four calls to RenderCard, each call taking in
       an object with information about one of the four
       similar games as a prop called gameData. 
    */

    let searchTokens = props.searchTerm.toLowerCase().split(" "); //takes input, removes capitalization and splits into array of strings
  
    let adventure = [["breath", "wild"], ["ocarina", "time"], ["majora's", "mask"], ["link's", "awakening"], ["twilight", "princess"]];
    let racing = [["forza", "horizon", "4"], ["crew", "2"], ["need", "speed", "heat"], ["dirt", "5"], ["f1", "2020"], ["Asphalt", "Legends"], ["Burnout", "Paradise"]];
    let shooter = [["call", "duty:", "warzone"], ["battlefield", "5"], ["destiny", "2"], ["valorant"], ["counter-", "counter", "strike", "global", "offensive"], ["Over", "Watch"]];
    let simulator = [["Sims"], ["Farming", "Simulator"], ["Cities", "Skylines"], ["Football", "Manager"], ["Euro", "Truck", "Simulator"], ["Kerbal", "Space", "Program"], ["Planet", "Coaster"], ["Microsoft", "Flight", "Simulator"], ["Prison", "Architect"]];

    //finds common elements between two arrays
    function findCommonElements(array1, array2) {
      return array1.some(item => array2.includes(item))
    }
  
    //determines if searchTerm is found in an array
    function runGame(array1) {
      for(let game of array1) {
        if(findCommonElements(searchTokens, game)) {
          return true;
        }
      }
      return false;
    }
  
    let gameList= [];

    //runs through the 3 genres and renders the cards
    if(runGame(adventure)) {
      //filters out the searched game from the rendered cards
      let searchList = props.gameData.filter(function(item) {
        if(item.Genre === "Adventure") {
          if(!findCommonElements(searchTokens, item.Simplified_Name.toLowerCase().split(" "))) {
            return item;
          }
        }
      })
      gameList = searchList.map((gameObj) => {
        return <RenderCard gameData={gameObj} />
      });
    }
    else if(runGame(racing)) {
      //filters out the searched game from the rendered cards
      let searchList = props.gameData.filter(function(item) {
        if(item.Genre === "Racing") {
          console.log(item.Genre)
          if(!findCommonElements(searchTokens, item.Simplified_Name.toLowerCase().split(" "))) {
            return item;
          }
        }
      })
      gameList = searchList.map((gameObj) => {
        return <RenderCard gameData={gameObj}/>
      });
    }
    else if(runGame(shooter)) {
      //filters out the searched game from the rendered cards
      let searchList = props.gameData.filter(function(item) {
        if(item.Genre === "Shooter") {
          if(!findCommonElements(searchTokens, item.Simplified_Name.toLowerCase().split(" "))) {
            return item;
          }
        }
      })
      gameList = searchList.map((gameObj) => {
        return <RenderCard  gameData={gameObj} />
      });
    }
    else if(runGame(simulator)) {
      //filters out the searched game from the rendered cards
      let searchList = props.gameData.filter(function(item) {
        console.log(item.Genre);
        if(item.Genre === "Simulator") {
          console.log(item.Genre);
          if(!findCommonElements(searchTokens, item.Game.toLowerCase().split(" "))) {
            return item;
          }
        }
      })
      gameList = searchList.map((gameObj) => {
        return <RenderCard  gameData={gameObj} />
      });
    }
    return (
      <div className="container">
        <div className="row">
          {gameList}
        </div>
      </div>
    );
    }
export default RenderCardList;

export {RenderCardList};