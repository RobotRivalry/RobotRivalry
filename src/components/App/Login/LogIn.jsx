import React, { Component } from 'react';
import style from './LogIn.css';

class LogIn extends Component {
  constructor() {
    super();
    this.state = {
      LogInUserName: '',
      LogInPassword: ''
    };
  }
  render() {
    return (
      <div id ={style['container']}>
      <input
      type="text"
      placeholder="Username"
      value={this.props.UserName}
      />
      <input
       type="text"
       placeholder="Password"
       value={this.props.PassWord}
       />
       </div>
      )
  }

}
export default LogIn;
