import React from 'react';
import './SearchBox.css';

const SearchBox = ({searchChange}) => {
  return (
  	<div className="pa2">
	  <input
	  	className="tc oscarB pa3"
	    type="text"  
	    placeholder="filter"
	    onChange = {searchChange}
	  />
	</div>
  );
}

export default SearchBox;