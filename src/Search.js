import React from 'react';

function Search(props) {
    return (
      <div className="search-view">
        <div className="searchBox" role="search">
          <input value={props.keyword} onInput={e => props.setKeyword(e.target.value)} type="text" id="searchQuery" placeholder="Search..." />
        </div>
      </div>
    );
  }

export default Search;

export {Search};