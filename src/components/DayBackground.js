// src/components/Greeting.js
import React, { Component } from 'react';
import '../css/dayBackground.css'
export default class DayBackground extends Component {

  constructor(props) {
    super(props);
    // Don't call this.setState() here!
    this.state = {
    };
    
  }


  
  render() {
    return (
        <div style={{zIndex: -1}} class="background">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
     </div>
    );
  }
}

//export default Greeting;