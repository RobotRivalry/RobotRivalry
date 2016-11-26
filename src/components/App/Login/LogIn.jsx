import React, { Component } from 'react';
import style from './Login.css';

class LogIn extends Component {

  render() {
    return (

      <div id="container">
      <link href="https://fonts.googleapis.com/css?family=Oswald:300,400,700|Titillium+Web:200,300,400,400i,600,700,900" rel="stylesheet" />


        <div className='userBox'>

          <div className='hOne'>
            <h1>LOG IN</h1>
          </div>
          <br/>
          <div className='inputContainer'>
            <input className='user'
            type="text"
            placeholder="Username"
            value={this.props.Username}
            />

            <input className='pass'
            type="text"
            placeholder="Password"
            value={this.props.Password}
            />
            <br/>
            <button> Log In </button>

            <p className="or">-or-</p>
            <a href="./#/signup">Sign Up</a>

          </div>

        </div>
      </div>
    )
  }

}
export default LogIn;
