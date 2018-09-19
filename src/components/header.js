import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class Header extends Component {

  constructor(props) {
    super(props);
  }

  state = {
    activeButton: null,
  };

  activeClass = (event) => {
    console.log(this.props)
    this.setState({
      activeButton: event
    })
  }

  render = () => {
    return (
      <nav className="navbar navbar-expand-sm bg-primary navbar-dark">
        <ul className="navbar-nav">
          <li className={"nav-item" + this.state.activeButton === 'active' ? "active" : ""}>
            <Link to="/" onClick={() => this.activeClass.bind(this, 'active')} className="nav-link"  >Home</Link>
          </li>
          <li className={"nav-item" + this.state.activeButton === 'viewList' ? "active" : ""}>
            <Link to="/viewList" onClick={this.activeClass.bind(this, 'viewList')} className="nav-link" >View List</Link>
          </li>
        </ul>
      </nav>

    );
  }
}

export default Header;
