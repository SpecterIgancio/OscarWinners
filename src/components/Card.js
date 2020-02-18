import React from 'react';
import './Card.css';

const Card = ({name, prize, id, film, img}) => {
  return (
	<div className="edit tc dib br3 pa3 ma2 grow bw2 shadow-5">
	  <img class="crop" alt={name} src={img} />
	  <div>
	  	<h2>{name}</h2>
	  	<p>{prize}</p>
	  	<p>{film}</p>
	  </div>
	</div>
  );
}

export default Card;

// <img alt="Emane" src={`https://robohash.org/${id}?200x200`} />