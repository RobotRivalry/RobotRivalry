import React, { Component } from 'react';
import './question.css';

class Question extends Component {
  render() {
    return(
      <div className="question-item">
        <h3>{this.props.question}</h3>
        <h4> A: {this.props.answerA}</h4>
        <h4> B: {this.props.answerB}</h4>
        <h4> C: {this.props.answerC}</h4>
        <h4> D: {this.props.answerD}</h4>
      </div>
    );
  }
}

export default Question;
