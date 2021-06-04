import React from 'react';
import RenderCard from './RenderCard';

function RenderCardList(props) {

    let searchTokens = props.searchTerm.toLowerCase().split(" ");
    
    let botwArray = ["breath", "of", "the", "wild"];
    let ootArray = ["ocarina", "of", "time"];
    let mmArray = ["majora's", "mask"];
    let laArray = ["link's", "awakening"];
    let tpArray = ["twilight", "princess"];//Zelda
    let forArray = ["forza", "horizon", "4"];
    let crewArray = ["the", "crew", "2"];
    let nfsArray = ["need", "for", "speed", "heat"];
    let dirtArray = ["dirt", "5"];
    let fArray = ["f1", "2020"];//racing
    let warArray = ["call", "of", "duty:", "warzone"];
    let bfArray = ["battlefield", "5"];
    let destArray = ["destiny", "2"];
    let valArray = ["valorant"];
    let csgoArray = ["counter-", "strike", "global", "offensive"];//shooter
  
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
        if(item.Genre === "Zelda") {
          if(!findCommonElements(searchTokens, item.Game.toLowerCase().split(" "))) {
            return item;
          }
        }
      })
      gameList = searchList.map((gameObj) => {
      
        return <RenderCard key={gameObj.Game} gameData={gameObj} rootRef={props.rootRef} />
      });
    }
    else if(runGame(racing)) {
  
      //filters out the searched game from the rendered cards
      let searchList = props.gameData.filter(function(item) {
        if(item.Genre === "Racing") {
          if(!findCommonElements(searchTokens, item.Game.toLowerCase().split(" "))) {
            return item;
          }
        }
      })
      gameList = searchList.map((gameObj) => {
      
        return <RenderCard key={gameObj.Game} gameData={gameObj} rootRef={props.rootRef}/>
      });
  
    }
    else if(runGame(shooter)) {
      //filters out the searched game from the rendered cards
      let searchList = props.gameData.filter(function(item) {
        if(item.Genre === "Shooter") {
          if(!findCommonElements(searchTokens, item.Game.toLowerCase().split(" "))) {
            return item;
          }
        }
      })
      gameList = searchList.map((gameObj) => {
      
        return <RenderCard key={gameObj.Game} gameData={gameObj} rootRef={props.rootRef} />
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