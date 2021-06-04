import React, {useState} from 'react';
import {useParams, Redirect} from "react-router-dom";
import games from './data/gameData.json';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function MoreInfo(props){
    const [backHome, setBackHome] = useState("undefined");
    const urlParams = useParams();
    let gameName = urlParams.gameName;
    let game =  games.find(clickedGame => clickedGame.Game === gameName);
    if(!game) return <h2>Error: Game Not Found</h2>
    let imgLink = "/" + game.Picture;
    const handleButtonClick = (event) => {
        props.rootRef.ref.orderByChild("Game").equalTo(game.Game).once('value', snapshot => {
          if(!snapshot.exists()){
            props.rootRef.push(game);
          }
        });
      }
    const handleHomeClick = (event) => {
        setBackHome("/");
    }
    if(backHome !== "undefined") {
            return <Redirect push to={setBackHome}/>;
    }
    return (
        <div>
          <h2>{game.Game}</h2>
          <img src={imgLink} alt={game.Game}></img>
          <ul>
              <li className="text-white">Name: {game.Game}</li>
              <li className="text-white">Release Date: {game.Release_Date}</li>
              <li> Genre: {game.Genre}</li>
              <li><a className="text-white" target="_blank" rel="noopener noreferrer" href={game.Subreddit}> Reddit Link</a></li>
              <li><a className="text-white" target="_blank" rel="noopener noreferrer" href={game.Discord}> Discord Link</a></li>
          </ul>
          <button onClick={handleButtonClick} className="fav-button bg-info text-white">Favorite</button>
          <button onClick={handleHomeClick} className="fav-button bg-info text-white">Go Back</button>
        </div>
      );
}

export default MoreInfo;