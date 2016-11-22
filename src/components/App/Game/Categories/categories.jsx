import React, { Component } from 'react';
import './../normalize.css';
import style from './categories.css';

// create a React Component called _App_
class Categories extends Component {

  render(){
    return (
      <div id='container'>
        <div className='category-box1'>category name</div>
        <div className='category-box2'>category name</div>
        <div className='category-box3'>category name</div>
        <div className='category-box4'>category name</div>
        <div className='category-box5'>category name</div>
		    <div className='category-box6'>category name</div>
        <div className='category-box7'>category name</div>
        <div className='category-box8'>category name</div> 
        <div className='category-box9'>category name</div>       
      </div>
    );
  }
}
export default Categories;