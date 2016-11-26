import React, { Component } from 'react';
import '../../../normalize.css';
import style from './Categories.css';


// create a React Component called _App_
class Categories extends Component {
  // constructor(props) {
  //   super();
  //   this.state{
  //     category: []
  //   };
  // }

  // catMisc(){
  //   this.setState({category: 9})
  // }

  // catSong(){
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

  render(){
    return (
      <div id='container'>
      <link href="https://fonts.googleapis.com/css?family=Oswald:300,400,700|Titillium+Web:200,300,400,400i,600,700,900" rel="stylesheet" />


        <div className="ugh">
        
          <div className='hOne'>
            <h1>CHOOSE A CATEGORY</h1>
          </div>
          <div className="box-container">
            <div className='main-box'>
              <button onClick={event => this.catMisc(event)}     className='category-box1 box'>General Knowledge</button>
              <button onClick={event => this.catSong(event)}     className='category-box2 box'>Music</button>
              <button onClick={event => this.catTele(event)}     className='category-box3 box'>Television</button>
              <button onClick={event => this.catSports(event)}   className='category-box4 box'>Sports</button>
              <button onClick={event => this.catGeo(event)}      className='category-box5 box'>Geography</button>
              <button onClick={event => this.catHistory(event)}  className='category-box6 box'>History</button>
              <button onClick={event => this.catPolitics(event)} className='category-box7 box'>Politics</button>
              <button onClick={event => this.catCelebs(event)}   className='category-box8 box'>Celebrities</button>
              <button onClick={event => this.catAnimals(event)}  className='category-box9 box'>Animals</button>
            </div>
          </div>

        </div>
      </div>
    );
  }
}
export default Categories;
