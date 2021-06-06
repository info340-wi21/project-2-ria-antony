/* File contains MoreInfo component.
   This component can be called using
   the tag <MoreInfo/>.
*/

import React, {useState} from 'react';
import {useParams, Redirect} from "react-router-dom";
import games from './data/gameData.json';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import firebase from 'firebase';

function MoreInfo(props){
    /* This component is called
       when a user clicks on a card
       on the homepage. The component
       renders a webpage that gives more information
       such as genre, release date, etc about the game
       displayed on the card the user clicked on.
       The component also renders a favorite button
       which allows users to favorite a game and have
       a card about the game displayed on the favorites
       page. Lastly, the component renders a "back button",
       which allows users to easily naviagate back to the
       homepage.
    */
    const [backHome, setBackHome] = useState("undefined"); //state variable that keeps track of if user has clicked the back button
    const urlParams = useParams();
    let gameName = urlParams.gameName;
    let game =  games.find(clickedGame => clickedGame.Game === gameName); //uses url parameters to find game in game database
    if(!game) return <h2>Error: Game Not Found</h2> //If game not found, lets user know by stating that the game was not found
    let imgLink = "/" + game.Picture;
    const handleButtonClick = (event) => { //handles the favorite button being clicked
        firebase.database().ref().orderByChild("Game").equalTo(game.Game).once('value', snapshot => {
          if(!snapshot.exists()){
            firebase.database().ref().push(game); //checks if game is already in favorites database and if not adds it
          }
        });
      }
    const handleHomeClick = (event) => { //handles back button being clicked
        setBackHome("/"); //changes state variable
    }
    if(backHome !== "undefined") {
            return <Redirect push to={setBackHome}/>; //redirects to homepage if user clicked the back button
    }
    return (
        <div>
          <h2>{game.Game}</h2>
          <img src={imgLink} alt={game.Game}></img> {/* Renders image of game */}
          <ul> {/* Renders more information about game */}
              <li className="text-white">Name: {game.Game}</li>
              <li className="text-white">Release Date: {game.Release_Date}</li>
              <li> Genre: {game.Genre}</li>
              <li><a className="text-white" target="_blank" rel="noopener noreferrer" href={game.Subreddit}> Reddit Link</a></li>
              <li><a className="text-white" target="_blank" rel="noopener noreferrer" href={game.Discord}> Discord Link</a></li>
          </ul>
          <button onClick={handleButtonClick} className="fav-button bg-info text-white">Favorite</button> {/* Favorite button */}
          <button onClick={handleHomeClick} className="fav-button bg-info text-white">Go Back</button> {/* Back button */}
        </div>
      );
}

export default MoreInfo;