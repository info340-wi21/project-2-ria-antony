/* File contains RenderCardList componenet. The component can be called
   using <RenderCard/>. The componenet takes in the props
   gameData (an object containing information about a game).
*/

import React, {useState} from 'react';
import {Switch, Redirect} from 'react-router-dom';

function RenderCard(props) {
    /* This component takes an object containing
       information about a game as the prop "gameData"
       and renders a card with the title and image
       of the game depicted by gameData. When a card
       is clicked, the user is directed to a webpage
       (rendered by MoreInfo component) that contains
       more information about the game on the card.
    */
    const [redirect, setRedirectTo] = useState("/"); //state variable that is used to store url when user needs to be redirected

    const handleCardClick = (event) => { //handles user clicking on a card
        setRedirectTo("/info/" + props.gameData.Game); //changes state variable so user is redirected to webpage containing more information about game they clicked on
    }
    return (
        <div className="col-12 col-md-6 col-lg-6 col-xl-3 d-flex">
          <div className="card mb-4 bg-secondary">
          <Switch>
            <Redirect to={redirect} />
          </Switch>
            <div onClick={handleCardClick} className="card-body">
              <div className="row">
                <div className="col col-sm col-xl-12">
                  <img className="card-img-top" src={props.gameData.Picture} alt={props.gameData.Game} />
                </div>
                <div className="cols-sm">
                  <h2 className="card-title">{props.gameData.Game}</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
    );
  }

export default RenderCard;

export {RenderCard};