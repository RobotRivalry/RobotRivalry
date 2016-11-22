import React, { Component } from 'react';
import Categories from './categories.jsx';
import './../normalize.css';
import style from './App.css';

// create a React Component called _App_
class App extends Component {
	constructor() {
		super();
  }

    handleFormSubmit() {
      fetch('/db/username', {
        headers: {
          'Content-Type': 'application/json'
        },
        method: 'POST',
        body: JSON.stringify({
          name: this.state.username,
          url: this.state.password
        })
      })
      .then(this.getUser())
      .catch(err => console.log(err));
    }

    render(){
      return (
        <div id='container'>
          <Categories />
        </div>
      );
    }
};


export default App;
