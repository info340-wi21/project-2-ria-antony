
import React from 'react'; //react library 
import './App.css';
import { AboutPage } from './About';
import 'bootstrap/dist/css/bootstrap.min.css'; //bootstrap
import { Button } from 'reactstrap';
import { Route, Switch, Link, Redirect, NavLink } from 'react-router-dom';


import games from './data/gameData.json';


function App(props) {

  const gameData = games;
  // console.log(gameData);

  return (
    <div className="the-body">

      {/*header for index page */}
      <header>
        <NavBar />
      </header>

      {/* index page searchBox*/}
      <main>
        <Switch>
          <Route exact path="/"> <Search />
                <RenderCardList gameData={gameData} searchTerm={"need"} />
              
            
          </Route>
          <Route path="/about"> <AboutPage /> </Route>
          <Redirect to="/" />
        </Switch>



      </main>

      {/* index page footer*/}
      <footer className="footer">
        <p>2021 &#169;</p>
      </footer>
    </div>
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
        </div>
      </div>
    </nav>

  )
}

function Search() {
  return (
    <div>
      <div className="searchBox" role="search">
        <input type="text" id="searchQuery" placeholder="Search..." />
        <Button id="searchButton"><i className="fas fa-search fa-flip-horizontal" aria-label="search"></i>Search</Button>
      </div>
    </div>
  );
}

function fetchResults(searchTerm){
  let url = "../data/gameData.json";
  let outerPromise = fetch(url)
    .then(function(response) {
        let promise = response.json();
        return promise;
    })
    .then(function(data) {
      console.log(data);
      return data;
    })
    // .catch(function(err) {
    //   renderError(err);
    //   return err;
    // })
    .then(function(){
    });
  return outerPromise;
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
          console.log(game)
          return true;
        }
      }
    }

  let gameList= [];
  //runs through the 3 genres and renders the cards
  if(runGame(zelda)) {

    //filters out the searched game from the rendered cards
    let searchList = props.gameData.filter(function(item) {
      if(item.Genre == "Zelda") {
        if(!findCommonElements(searchTokens, item.Game.toLowerCase().split(" "))) {
          return item;
        }
      }
    })
    gameList = searchList.map((gameObj) => {
    
      return <RenderCard key={gameObj.Game} gameData={gameObj} />
    });
  }
  else if(runGame(racing)) {

    //filters out the searched game from the rendered cards
    let searchList = props.gameData.filter(function(item) {
      if(item.Genre == "Racing") {
        if(!findCommonElements(searchTokens, item.Game.toLowerCase().split(" "))) {
          return item;
        }
      }
    })
    gameList = searchList.map((gameObj) => {
    
      return <RenderCard key={gameObj.Game} gameData={gameObj} />
    });

  }
  else if(runGame(shooter)) {
    //filters out the searched game from the rendered cards
    let searchList = props.gameData.filter(function(item) {
      if(item.Genre == "Shooter") {
        if(!findCommonElements(searchTokens, item.Game.toLowerCase().split(" "))) {
          return item;
        }
      }
    })
    gameList = searchList.map((gameObj) => {
    
      return <RenderCard key={gameObj.Game} gameData={gameObj} />
    });

  }
  else {
    //renderError(new Error("No results found"));
  }
  
  // function renderError(errorObj){
  //   let errorAlert = document.createElement('p');
  //   errorAlert.textContent = errorObj.message;
  //   errorAlert.setAttribute("class", "alert alert-danger");
  //   cardDiv.appendChild(errorAlert);
  // }

 

  return (
    <div className="container">
      <div className="row">
        {gameList}
      </div>
    </div>
  );
}

function RenderCard(props) {

  //  div1.addEventListener("click", function(){
  //   if (clicked == false){
  //     div6.innerHTML = "";

  //     let genreElem = document.createElement("p") 
  //     genreElem.textContent = "Genre:" + " " + game.Genre;
  //     div6.appendChild(genreElem);

  //     let releaseElem = document.createElement("p") 
  //     releaseElem.textContent = "Release Date: " + " " + game.Release_Date; 
  //     div6.appendChild(releaseElem);

  //     let communityLinkElem = document.createElement("a");
  //     communityLinkElem.textContent = "Reddit Community"
  //     communityLinkElem.href = game.Subreddit;
  //     div6.appendChild(communityLinkElem);
  //     clicked = true;
  //   }
  //   else{
  //     div6.innerHTML = "";
  //     div6.appendChild(header2Elem);
  //     clicked = false;
  //   }
  //  });

  // let gameArray = props.

  console.log(props.gameData.Game)
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
              <ul className="list-group list-group-flush">
                <li className="list-group-item">{props.gameData.Release_Date}</li>
                <li className="list-group-item">{props.gameData.Subreddit}</li>
                <li className="list-group-item">{props.gameData.Discord}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  // event listener for second data view


}
export default App;
