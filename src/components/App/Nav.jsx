import React, { Component } from 'react';
import style from './Nav.css';
// import style from './Home.css';

class Nav extends Component {
  render() {
    return (
      <div className="container">
        <nav className="navi">
          <ul>
            <li><h1 className="navhead">Robot Rivalry</h1></li>
            <li><a className="navA" href="./#/">Home</a></li>
            <li><a className="navA" href="./#/login">Login</a></li>
            <li><a className="navA" href="./#/signup">Sign Up</a></li>
          </ul>
        </nav>
      </div>
    )
  }

}
export default Nav;
