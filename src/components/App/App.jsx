
import React, { Component } from 'react';
import style from './App.css';
import Login from './LogIn/LogIn.jsx';
import SignUp from './SignUp/SignUp.jsx';
import GameState from './Game/GameState/GameState.jsx';
import Categories from './Game/Categories/Categories.jsx';
import Levels from './Game/Levels/Levels.jsx';
import Question from './Game/Question/Question.jsx';
import StartPage from './StartPage/StartPage.jsx';
import Stats from './Stats/Stats.jsx';
import Home from './Home.jsx'
import Nav from './Nav.jsx'
// import AjaxAdapter from '../../helpers/AjaxAdapter';
import './../normalize.css';


let _ = require('underscore');


class App extends Component {
  constructor(props) {
    super();

    this.state = {
      // userFormUsername: '',
      // userFormPassword: '',
      // userFormFirstName: '',
      // userFormLastName: '',
      // userFormAge: '',
      // userFormGender: '',
      // userFormZodiac: '',
      // userFormState: '',
      // userFormEmail: '',
      questions: [],
      difficulty:[],
      category:[],
      q_correct: 0,
      q_incorrect: 0,
      UserName: '',
      PassWord: '',
      currentQuestion: '',
      currentAnswers: [],
      currentCorrectAnswer: '',
      answerA: '',
      answerB: '',
      answerC: '',
      answerD: '',
      category: '',
      difficulty: '',
      counter: 0,
      token:'',
    };
  }

  // ADDING QUESTIONS


  submitQuestion() {
    console.log('NUMBER: ', this.state.counter);
    fetch('/questions', {
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
      method: 'POST',
      body: JSON.stringify({
        question: this.state.currentQuestion,
        correct_answer: this.state.currentCorrectAnswer,
        answerA: this.state.answerA,
        answerB: this.state.answerB,
        answerC: this.state.answerC,
        answerD: this.state.answerD,
        category: this.state.category,
        difficulty: this.state.difficulty,
      })
    })
    .catch(err => console.log(err));
  }

  // SIGN UP PAGE


  // Scott's Sign Up

  // updateFormUsername(e) {
  //   this.setState({
  //     userFormUsername: e.target.value,
  //   });
  // }

  // updateFormPassword(e) {
  //   this.setState({
  //     userFormPassword: e.target.value,
  //   });
  // }

  // updateFormFirstName(e) {
  //   this.setState({
  //     userFormFirstName: e.target.value,
  //   });
  // }

  // updateFormLastName(e) {
  //   this.setState({
  //     userFormLastName: e.target.value,
  //   });
  // }

  // updateFormAge(e) {
  //   this.setState({
  //     userFormAge: e.target.value,
  //   });
  // }

  // updateFormGender(e) {
  //   this.setState({
  //     userFormGender: e.target.value,
  //   });
  // }

  // updateFormZodiac(e) {
  //   this.setState({
  //     userFormZodiac: e.target.value,
  //   });
  // }

  // updateFormState(e) {
  //   this.setState({
  //     userFormState: e.target.value,
  //   });
  // }

  // updateFormEmail(e) {
  //   this.setState({
  //     userFormEmail: e.target.value,
  //   });
  // }

  // handleFormSubmit() {
  //   fetch('/users', {
  //     headers: {
  //       'Content-type': 'application/json; charset=UTF-8',
  //     },
  //     method: 'POST',
  //     body: JSON.stringify({
  //       username: this.state.userFormUsername,
  //       password: this.state.userFormPassword,
  //       first_name: this.state.userFormFirstName,
  //       last_name: this.state.userFormLastName,
  //       age: this.state.userFormAge,
  //       gender: this.state.userFormGender,
  //       zodiac: this.state.userFormZodiac,
  //       state: this.state.userFormState,
  //       email: this.state.userFormEmail,
  //     })
  //   })
  //   .then(this.setState({
  //     userFormUsername: '',
  //     userFormPassword: '',
  //     userFormFirstName: '',
  //     userFormLastName: '',
  //     userFormAge: '',
  //     userFormGender: '',
  //     userFormZodiac: '',
  //     userFormState: '',
  //     userFormEmail: '',
  //   }))
  //   .catch(err => console.log(err));
  // }


  // GAME LOGIC

  getQuestions() {
    console.log('clicked!');
    fetch(`http://cors.io/?https://www.opentdb.com/api.php?amount=10&category=${this.state.category}&difficulty=${this.state.difficulty}&type=multiple`)
      .then(r => r.json())
      .then((data) => {
        this.setState({
          questions: data.results
        })
        console.log(this.state.questions);
        this.getOneQuestion();
      })
      .catch(error => console.log('Error: ', error));
  }

  getOneQuestion() {
    // put all answers into one array
    let answerArray = [this.state.questions[this.state.counter].correct_answer, this.state.questions[this.state.counter].incorrect_answers[0], this.state.questions[this.state.counter].incorrect_answers[1], this.state.questions[this.state.counter].incorrect_answers[2]];
    let shuffledAnswerArray = _.shuffle(answerArray);

    // clean question text
    let questionDirty1 = this.state.questions[this.state.counter].question;
    let questionClean1 = questionDirty1.replace(/&#039;/g , "'");
    let questionClean2 = questionClean1.replace(/&quot;/g , '"');

    this.setState({
      currentQuestion: questionClean2,
      currentCorrectAnswer: this.state.questions[this.state.counter].correct_answer,
      currentAnswers: shuffledAnswerArray,
      answerA: shuffledAnswerArray[0],
      answerB: shuffledAnswerArray[1],
      answerC: shuffledAnswerArray[2],
      answerD: shuffledAnswerArray[3],
      counter: this.state.counter +1,
      category: this.state.questions[this.state.counter].category,
      difficulty: this.state.questions[this.state.counter].difficulty,
    })
  };

  nextQuestionA() {
    console.log('clicked');
    console.log('ANSWER A: ', this.state.answerA);
    console.log('CORRECT ANSWER: ', this.state.currentCorrectAnswer);
    if(this.state.answerA === this.state.currentCorrectAnswer) {
      this.setState({q_correct: this.state.q_correct + 1});
    }
    this.setState({
      counter: this.state.counter + 1,
    })
    this.getOneQuestion();
  }


    nextQuestionB() {
    console.log('clicked');
    console.log('ANSWER B: ', this.state.answerB);
    console.log('CORRECT ANSWER: ', this.state.currentCorrectAnswer);
    if(this.state.answerB === this.state.currentCorrectAnswer) {
      this.setState({q_correct: this.state.q_correct + 1});
    }
    this.setState({
      counter: this.state.counter + 1,
    })
    this.getOneQuestion();
  }

    nextQuestionC() {
    console.log('clicked');
    console.log('ANSWER C: ', this.state.answerC);
    console.log('CORRECT ANSWER: ', this.state.currentCorrectAnswer);
    if(this.state.answerC === this.state.currentCorrectAnswer) {
      this.setState({q_correct: this.state.q_correct + 1});
    }
    this.setState({
      counter: this.state.counter + 1,
    })
    this.getOneQuestion();
  }

    nextQuestionD() {
    console.log('clicked');
    console.log('ANSWER D: ', this.state.answerD);
    console.log('CORRECT ANSWER: ', this.state.currentCorrectAnswer);
    if(this.state.answerD === this.state.currentCorrectAnswer) {
      this.setState({q_correct: this.state.q_correct + 1});
    }
    this.setState({
      counter: this.state.counter + 1,
    })
    this.getOneQuestion();
  }

//added categories

  // catMisc(){
  //   this.setState({category: 9})
  // }

  // catMusic(){
  //   this.setState({category: 12})
  // }

  // catTele(){
  //   this.setState({category: 14})
  // }

  // catSports(){
  //   this.setState({category: 21})
  // }
  // catGeo(){
  //   this.setState({category: 22})
  // }

  // catHistory(){
  //   this.setState({category: 23})
  // }

  // catPolitics(){
  //   this.setState({category: 24})
  // }

  // catCelebs(){
  //   this.setState({category: 26})
  // }

  // catAnimals(){
  //   this.setState({category: 27})
  // }


   // <SignUp
   //        userFormUsername={this.state.userFormUsername}
   //        userFormPassword={this.state.userFormPassword}
   //        userFormFirstName={this.state.userFormFirstName}
   //        userFormLastName={this.state.userFormLastName}
   //        userFormAge={this.state.userFormAge}
   //        userFormGender={this.state.userFormGender}
   //        userFormZodiac={this.state.userFormZodiac}
   //        userFormState={this.state.userFormState}
   //        userFormEmail={this.state.userFormEmail}
   //        updateFormUsername={event => this.updateFormUsername(event)}
   //        updateFormPassword={event => this.updateFormPassword(event)}
   //        updateFormFirstName={event => this.updateFormFirstName(event)}
   //        updateFormLastName={event => this.updateFormLastName(event)}
   //        updateFormAge={event => this.updateFormAge(event)}
   //        updateFormGender={event => this.updateFormGender(event)}
   //        updateFormZodiac={event => this.updateFormZodiac(event)}
   //        updateFormState={event => this.updateFormState(event)}
   //        updateFormEmail={event => this.updateFormEmail(event)}
   //        handleFormSubmit={() => this.handleFormSubmit()}
   //      />

   //      <GameState
   //        questions={this.state.questions}
   //        getQuestions={event => this.getQuestions(event)}
   //        getOneQuestion={event => this.getOneQuestion(event)}
   //        question={this.state.currentQuestion}
   //        answerA={this.state.answerA}
   //        answerB={this.state.answerB}
   //        answerC={this.state.answerC}
   //        answerD={this.state.answerD}
   //        nextQuestionA={event => this.nextQuestionA(event)}
   //        nextQuestionB={event => this.nextQuestionB(event)}
   //        nextQuestionC={event => this.nextQuestionC(event)}
   //        nextQuestionD={event => this.nextQuestionD(event)}
   //      />



  render(){
    return (
      <div id="app-container">

        <Nav />

      

    


        {this.props.children}

    </div>
    );
  }
}

export default App;


