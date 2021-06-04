
import React, {useState} from 'react'; //react library 
import './App.css';
import { AboutPage } from './About';
import 'bootstrap/dist/css/bootstrap.min.css'; //bootstrap
import { Route, Switch, Redirect} from 'react-router-dom';
import firebase from 'firebase';
import Search from './Search';
import NavBar from './NavBar';
import RenderCardList from './RenderCardList';
import FavPage from './FavPage';

import games from './data/gameData.json';


function App(props) {

  const gameData = games;
  const [keyword, setKeyword] = useState("");
  const [cardClicked, setCardClicked] = useState(false);
  const rootRef = firebase.database().ref(); //reference to firebase database

  return (
      <div className="the-body">
        {/*header for index page */}
        <header>
          <NavBar />
        </header>
        {/* index page searchBox*/}
        <main>
          <Switch>
            <Route exact path="/"> <Search keyword={keyword} setKeyword={setKeyword} cardClicked={cardClicked} setCardClicked={setCardClicked} />
                  <RenderCardList gameData={gameData} searchTerm={keyword} cardClicked={cardClicked} setCardClicked={setCardClicked} rootRef={rootRef} />
            </Route>
            <Route path="/about"> <AboutPage /> </Route>
            <Route path="/favorite"><FavPage rootRef={rootRef}/></Route>
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

export default App;

