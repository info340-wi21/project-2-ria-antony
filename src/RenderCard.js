import React from 'react';

function RenderCard(props) {
    const handleClick = (event) => {
      props.rootRef.ref.orderByChild("Game").equalTo(props.gameData.Game).once('value', snapshot => {
        if(!snapshot.exists()){
          props.rootRef.push(props.gameData);
        }
      });
    }
  
    let dateText = "";
    let genreText = "";
    let redditLink = "";
    let discordLink = "";
    let isfav = "Favorite";
    if(props.cardClicked === true){
      dateText = "Release Date: " +  props.gameData.Release_Date
      genreText = "Genre: " + props.gameData.Genre;
      redditLink = "Reddit";
      discordLink = "Discord";
    }
    else{
      dateText = "";
      genreText = "";
      redditLink = "";
      discordLink = "";
    }
   
    return (
        <div className="col-12 col-md-6 col-lg-6 col-xl-3 d-flex">
          <div className="card mb-4 bg-secondary">
            <div className="card-body">
              <div className="row">
                <div className="col col-sm col-xl-12">
                  <img className="card-img-top" src={props.gameData.Picture} alt={props.gameData.Game} />
                </div>
                <div className="cols-sm">
                  <h2 className="card-title">{props.gameData.Game}</h2>
                  <p>{dateText}</p>
                  <p>{genreText}</p>
                  <a className="text-white" target="_blank" rel="noopener noreferrer" href={props.gameData.Subreddit}>{redditLink}</a><br></br><br></br>
                  <a className="text-white" target="_blank" rel="noopener noreferrer" href={props.gameData.Discord}>{discordLink}</a><br></br><br></br>
                  <button onClick={handleClick} className="fav-button bg-info text-white">{isfav}</button>
                </div>
              </div>
            </div>
          </div>
        </div>
    );
  }

export default RenderCard;

export {RenderCard};