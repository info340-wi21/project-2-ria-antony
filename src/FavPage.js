import React, { useState, useEffect } from 'react'; 
import firebase from 'firebase';


function FavPage(props) {
    return (
        <div>
            <h1 className="display-2" id="aboutHeader">Favorites</h1>
                <FavList ></FavList>
        </div>
    );
  }

  function FavList(){
    // creating a state variable with the list of favorited game objects 
    const [favoriteArray, setFavoriteArray] = useState([]);
    
    // When this function is first ran, it will fetchData.
    // we need to fetch data in a function otherwise it'll re-render to infinity 
    useEffect(() => {
      fetchData()
    }, [])
    // fetching the data from firebase and updating state accordingly
    const fetchData = () => {  
      let allFavsArray = []; //empty array that will hold the array version of firebase data
      console.log("reloading the data")
      firebase.database().ref().on('value', snapshot => { //Kinda complicated but bascially turns firebase data into array form so it can be mapped
        let favShot = snapshot.val();
        if (favShot !== null){
          const allFavsObject = favShot;
          const allFavsKeys = Object.keys(allFavsObject);
            allFavsArray = allFavsKeys.map((key) => { 
              const singleFavCopy = {...allFavsObject[key]}; 
              singleFavCopy.key = key;
              return singleFavCopy;
            });
          setFavoriteArray(allFavsArray)
        }
        else{
          setFavoriteArray([])
        }
      });
    }
    
    // when the "remove" button is clicked, will remove object from firebase and call fetchData to update the list view 
    // props are event and the game object
    const handleClick = (event, data) => {
      let key = ""
      for (let i = 0; i < favoriteArray.length; i++) { //Looks through firebase "array" to find the key of the gameObject that's "remove" button got pushed
        console.log(favoriteArray[i])
        if (favoriteArray[i] === data){
          console.log("found it!")
          key = favoriteArray[i].key;
        }
      }
      if (key !== ""){
        console.log("removing the key")
        firebase.database().ref().child(key).remove(); //Removes gameObject from Firebase data based on key
      }
      
      // update the data
      fetchData();
      event.preventDefault()
    }
  
    return(
        <div className="container">
            <div className="row">
                {favoriteArray.map((gameObj) => { //firebase data in array form being mapped
                  return (
                    <div className="col-12 col-md-6 col-lg-6 col-xl-3 d-flex">
                      <div className="card mb-4 bg-secondary">
                        <div className="card-body">
                          <div className="row">
                            <div className="col col-sm col-xl-12">
                              <img className="card-img-top" src={gameObj.Picture} alt={gameObj.Game} />
                            </div>
                            <div className="cols-sm">
                              <h2 className="card-title">{gameObj.Game}</h2>
                              <p> Release Date: {gameObj.Release_Date}</p>
                              <p>Genre: {gameObj.Genre}</p>
                              <a className="text-white" target="_blank" rel="noopener noreferrer" href={gameObj.Subreddit}>Reddit</a><br></br><br></br>
                              <a className="text-white" target="_blank" rel="noopener noreferrer" href={gameObj.Discord}>Discord</a><br></br><br></br>
                              <button onClick={(event) => handleClick(event, gameObj)} className="re-button bg-danger text-white">remove</button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    )
                })}
            </div>
        </div>
    );
  }

export default FavPage;
