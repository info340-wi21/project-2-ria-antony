//import { FirebaseDatabaseProvider } from "@react-firebase/database";
import React, {useState} from 'react'; //react library 
import './App.css';
import { AboutPage } from './About';
import 'bootstrap/dist/css/bootstrap.min.css'; //bootstrap
import { Button } from 'reactstrap';
import { Route, Switch, Redirect, NavLink } from 'react-router-dom';
import firebase from 'firebase';

import games from './data/gameData.json';


function App(props) {

  const gameData = games;
  const [keyword, setKeyword] = useState("");
  const [cardClicked, setCardClicked] = useState(false);
  const [favorites, setFavorites] = useState([]);
  const rootRef = firebase.database().ref();
  console.log(rootRef);
  rootRef.on('value', snapshot => {
    const state = snapshot.val();
    console.log(state);
  });
  console.log('DATA RETRIEVED');


  return (
    //<FirebaseDatabaseProvider>
      <div className="the-body">
        {/*header for index page */}
        <header>
          <NavBar />
        </header>
        {/* index page searchBox*/}
        <main>
          <Switch>
            <Route exact path="/"> <Search keyword={keyword} setKeyword={setKeyword} cardClicked={cardClicked} setCardClicked={setCardClicked} />
                  <RenderCardList gameData={gameData} searchTerm={keyword} cardClicked={cardClicked} setCardClicked={setCardClicked} favorites={favorites} setFavorites={setFavorites} />
            </Route>
            <Route path="/about"> <AboutPage /> </Route>
            <Route path="/favorite"><FavPage favList={favorites} setFavorites={setFavorites}/></Route>
            <Redirect to="/" />
          </Switch>
        </main>
        {/* index page footer*/}
        <footer className="footer">
          <p>2021 &#169;</p>
        </footer>
      </div>
    //</FirebaseDatabaseProvider>
  );
}

//function for the NavBar
function NavBar() {

  return (
    <nav className="navbar navbar-expand-lg navbar-dark navbar-custom">
      <a className="navbar-brand" id="nav-elem" href="/">GameFinder</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav">

          <NavLink className="nav-item nav-link text-light" exact to="/">Home</NavLink>
          <NavLink className="nav-item nav-link text-light" to="/about">About</NavLink>
          <NavLink className="nav-item nav-link text-light" to="/favorite">Favorites</NavLink>
        </div>
      </div>
    </nav>

  )
}

function Search(props) {
  const handleClick = (event) => {
    props.setCardClicked(!props.cardClicked);
  }
  return (
    <div className="search-view">
      <div className="searchBox" role="search">
        <input value={props.keyword} onInput={e => props.setKeyword(e.target.value)} type="text" id="searchQuery" placeholder="Search..." />
      </div>
      <Button className="info-button" onClick={handleClick}>Change View</Button>
    </div>
  );
}


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
    
      return <RenderCard key={gameObj.Game} gameData={gameObj} cardClicked={props.cardClicked} setCardClicked={props.setCardClicked} favorites={props.favorites} setFavorites={props.setFavorites} />
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
    
      return <RenderCard key={gameObj.Game} gameData={gameObj} cardClicked={props.cardClicked} setCardClicked={props.setCardClicked} favorites={props.favorites} setFavorites={props.setFavorites}/>
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
    
      return <RenderCard key={gameObj.Game} gameData={gameObj} cardClicked={props.cardClicked} setCardClicked={props.setCardClicked} favorites={props.favorites} setFavorites={props.setFavorites} />
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

function RenderCard(props) {

  const handleClick = (event) => {
    props.setFavorites([...props.favorites, props.gameData]);
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

  if (props.favorites.indexOf(props.gameData) !== -1){
    isfav = "Favorited";
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
function FavPage(props) {
  return (
      <div>
          <h1 id="aboutHeader">Favorites</h1>
              <FavList favArr={props.favList} setFavorites={props.setFavorites}></FavList>
      </div>
  );
}

function FavList(props){
  let favList = props.favArr.map((gameObj) => {
  
      return <RenderFavCard key={gameObj.Game} gameData={gameObj} favorites={props.favArr} setFavorites={props.setFavorites} />
    });
  return(
      <div className="container">
          <div className="row">
              {favList}
          </div>
      </div>
  );
}

function RenderFavCard(props){
  let gameIndex = undefined;
  let newFavList = [];
  let rem = "Remove";
  const handleClick = (event) => {
    gameIndex = props.favorites.indexOf(props.gameData);
    newFavList = props.favorites;
    newFavList.splice(gameIndex, 1);
    props.setFavorites(newFavList);
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
                <p> Release Date: {props.gameData.Release_Date}</p>
                <p>Genre: {props.gameData.Genre}</p>
                <a className="text-white" target="_blank" rel="noopener noreferrer" href={props.gameData.Subreddit}>Reddit</a><br></br><br></br>
                <a className="text-white" target="_blank" rel="noopener noreferrer" href={props.gameData.Discord}>Discord</a><br></br><br></br>
                <button onClick={handleClick} className="re-button bg-danger text-white">{rem}</button>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
}
export default App;
