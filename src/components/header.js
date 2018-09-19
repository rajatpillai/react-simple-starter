import React, { Component } from 'react';
import '../App.css';
import {PropTypes} from 'prop-types';
import {Link} from 'react-router-dom';


class Header extends Component {

  constructor(props) {
    super(props);
  }

  static contextTypes = {
		router: PropTypes.object
  };

  state={
    activeButton: null,
  };

  activeClass = (event) => {
    console.log(this.props)
    this.setState({ 
      activeButton: event
    })
    if (event === 'viewList') {
      console.log( this.props)
      //this.props.history.push('/viewList')
    }
  }

  render = () => {
    console.log(this)
     return (
      <nav className="navbar navbar-expand-sm bg-primary navbar-dark">
        <ul className="navbar-nav">
          <li className={"nav-item" + this.state.activeButton === 'active' ? "active": ""}>
            <a onClick={()=>this.activeClass.bind(this, 'active')} className="nav-link"  href="#">Active</a>
          </li>
          <li className="nav-item">
            <Link to="/viewList" onClick={this.activeClass.bind(this, 'viewList')} className="nav-link" >View List</Link>
          </li>
          <li className="nav-item">
            <a className="nav-link disabled" href="#">Disabled</a>
          </li>
        </ul>
      </nav>
    
    );
  }
}

export default Header;