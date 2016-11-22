import React, { Component } from 'react';
import style from './Trivia.css';

class Trivia extends Component {
  render(){
    return (
      <div id="question">Question </div>

      <div className="choice-one">Choice 1</div>
      <div className="choice-two">Choice 2</div>
      <div className="choice-three">Choice 3</div>
      <div className="choice-four">Choice 4</div>
      );
  }
}
export default Trivia;
