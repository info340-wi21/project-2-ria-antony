import React, {useState} from 'react';

let allFavsArray = []; //empty array that will hold the array version of firebase data

function FavPage(props) {
    console.log(props.rootRef);
    return (
        <div>
            <h1 id="aboutHeader">Favorites</h1>
                <FavList rootRef={props.rootRef}></FavList>
        </div>
    );
  }

  function FavList(props){
    let reference = props.rootRef;
    console.log(reference);
    reference.on('value', snapshot => { //Kinda complicated but bascially turns firebase data into array form so it can be mapped
      let favShot = snapshot.val();
      if (favShot !== null){
        const allFavsObject = favShot;
        const allFavsKeys = Object.keys(allFavsObject);
          allFavsArray = allFavsKeys.map((key) => { 
          const singleFavCopy = {...allFavsObject[key]}; 
          singleFavCopy.key = key;
          return singleFavCopy;
        });
      }
      else{
        allFavsArray = [];
      }
    });
    let favList = allFavsArray.map((gameObj) => { //firebase data in array form being mapped
        return <RenderFavCard key={gameObj.Game} gameData={gameObj} rootRef={reference}/>
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
    let rem = "Remove";
    let key = "";
    const [value, setValue] = useState(0); // integer state
    const ForceUpdate = () =>{
      return () => setValue(value => this.value + 1); // update the state to force render
    }
    const handleClick = (event) => {
      for (let i = 0; i < allFavsArray.length; i++) { //Looks through firebase "array" to find the key of the gameObject that's "remove" button got pushed
        if (allFavsArray[i] === props.gameData){
          key = allFavsArray[i].key;
        }
      }
      if (key !== ""){
        props.rootRef.child(key).remove(); //Removes gameObject from Firebase data based on key
      }
      console.log(props);
      return <FavList rootRef={props.rootRef}></FavList>
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
  export default FavPage;

  export {FavPage};