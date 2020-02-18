import React from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundry from '../components/ErrorBoundry';
import {oscarWinners} from '../oscarwinners.js';
import './App.css';

class App extends React.Component {
  constructor() {
  	super();
  	this.state = {
  	  oscarWinners: [],
      searchfilter: ""	
  	};
  }

  componentDidMount() {
  	// fetch("https://jsonplaceholder.typicode.com/users")
  	//   .then(response => response.json())
  	//   .then(users => this.setState({OscarWinners: users}));
    this.setState({oscarWinners: oscarWinners})
  }

  onSearchChange = (event) => {
  	this.setState({searchfilter: event.target.value})
  }

  render() {
    const {oscarWinners, searchfilter} = this.state;
  	const filteroscarWinners = oscarWinners.filter(robot => {
  		return robot.name.toLowerCase().includes(searchfilter.toLowerCase());
  	})
  	return !oscarWinners.length ?
  		<h1 className="tc f1">Loading...</h1> :
  	(
      <div className="hola tc">
        <div className="sticky">
  	      <h1 className="f1 mB">OSCAR WINERS</h1>
          <h1 className="f3 mB mT">Best actors</h1>
  	      <SearchBox searchChange={this.onSearchChange} />
        </div>
        <ErrorBoundry>
          <div className="xd">
            <Scroll>
              <CardList oscarWinners={filteroscarWinners} />
            </Scroll>
          </div>
        </ErrorBoundry>
      </div>
    );
  }	
}

export default App;