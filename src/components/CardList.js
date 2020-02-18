import React from 'react';
import Card from './Card';

const CardList = ({oscarWinners}) => {
  return (
  	<div>
	  {
	  	oscarWinners.map((user, i) => {
  	      return (
  	        <Card 
  	          key={oscarWinners[i].id} 
  	          id={oscarWinners[i].id} 
  	          name={oscarWinners[i].name} 
  	          prize={oscarWinners[i].prize} 
              film={oscarWinners[i].film} 
              img={oscarWinners[i].img} 
  	        />
     	  );
        })
	  }
	</div>
  );
}

export default CardList;