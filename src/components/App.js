import React, { Component } from 'react';
import Header from './header';

class App extends Component {
	
	constructor(props) {
		super(props);
	};

render = () => {
	console.log(this.props)
	 return (
		    <div>
				<Header {...this.props}/>
				{this.props.children}
            </div>
	    );
  	}
}


export default App;