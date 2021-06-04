import React from 'react';
import { Button } from 'reactstrap';

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

export default Search;

export {Search};