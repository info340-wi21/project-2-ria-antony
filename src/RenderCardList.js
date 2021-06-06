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
    
    let botwArray = ["breath", "wild"];
    let ootArray = ["ocarina", "time"];
    let mmArray = ["majora's", "mask"];
    let laArray = ["link's", "awakening"];
    let tpArray = ["twilight", "princess"];//Zelda
    let forArray = ["forza", "horizon", "4"];
    let crewArray = ["crew", "2"];
    let nfsArray = ["need", "speed", "heat"];
    let dirtArray = ["dirt", "5"];
    let fArray = ["f1", "2020"];//racing
    let warArray = ["call", "duty:", "warzone"];
    let bfArray = ["battlefield", "5"];
    let destArray = ["destiny", "2"];
    let valArray = ["valorant"];
    let csgoArray = ["counter-", "counter", "strike", "global", "offensive"];//shooter
  
    let zelda = [botwArray, ootArray, mmArray, laArray, tpArray];
    let racing = [forArray, crewArray, nfsArray, dirtArray, fArray];
    let shooter = [warArray, bfArray, destArray, valArray, csgoArray];
  
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
      }
  
    let gameList= [];
    //runs through the 3 genres and renders the cards
    if(runGame(zelda)) {
  
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
    else {
      //renderError
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