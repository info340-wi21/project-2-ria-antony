import React, {useState} from 'react';
import { Route, Switch, Redirect} from 'react-router-dom';

function RenderCard(props) {
    const [redirect, setRedirectTo] = useState("/");

    const handleCardClick = (event) => {
        setRedirectTo("/info/" + props.gameData.Game);
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