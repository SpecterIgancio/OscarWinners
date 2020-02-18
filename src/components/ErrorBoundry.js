import React from 'react';

class ErrorBoundry extends React.Component {
  constructor(props) {
  	super(props);
  	this.state = {
  	  hasError: false
  	}
  }

  componentDidCatch(error, info) {
  	this.setState({hasError: true});
  }

  render() {
  	const {hasError} = this.state;
  	if (hasError) {
  		return <h1>Oops. Thats a shame bro</h1>
  	}
  	return this.props.children
  }
}

export default ErrorBoundry;