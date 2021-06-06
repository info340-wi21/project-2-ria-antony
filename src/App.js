/* File contains App componenet. The component can be called
   using <App/>.
*/

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
import MoreInfo from './MoreInfo';

import games from './data/gameData.json';


function App(props) {
  /* This component creates the
     "skeleton" of the website. This
     component also intializes the
     keyword state which is used in Search
     and RenderCardList components.
  */

  const gameData = games;
  const [keyword, setKeyword] = useState("");

  return (
      <div className="the-body">
        {/*header with nav bar*/}
        <header>
          <NavBar/>
        </header>
        <main>
          <Switch>
            <Route exact path="/"> <Search keyword={keyword} setKeyword={setKeyword} />
                  <RenderCardList gameData={gameData} searchTerm={keyword}/>
            </Route>
            <Route path="/about"> <AboutPage /> </Route>
            <Route path="/favorite"><FavPage/></Route>
            <Route path="/info/:gameName"> <MoreInfo/> </Route>
            <Redirect to="/" />
          </Switch>
        </main>
        {/*footer*/}
        <footer className="footer">
          <p>2021 &#169;</p>
        </footer>
      </div>
  );
}

export default App;

