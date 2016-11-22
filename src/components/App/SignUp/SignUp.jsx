import React, { Component } from 'react';
import style from './SignUp.css';

class SignUp extends Component {
  constructor() {
    super();
    this.state = {
      signUpUserName: '',
      signUpPassword: ''
    };
  }

  render() {
    return (
      <div id ={style['container']}>
      <input
      type="text"
      placeholder="Create username"
      value={this.props.signUpUserName}
      />
      <input
       type="text"
       placeholder="Create Password"
       value={this.props.signUpPassWord}
       />
       </div>
      )
  }

}
export default SignUp;
