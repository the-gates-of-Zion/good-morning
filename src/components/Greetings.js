// src/components/Greeting.js
import React, { Component } from 'react';

export default class Greeting extends Component {

  constructor(props) {
    super(props);
    // Don't call this.setState() here!
    console.log("this.props.dayNight")
    console.log(this.props.dayNight)
    this.state = {
      hour: null,
      username: '', // Replace with the user's name
      dateGreetings: '',
      dayNight: this.props.dayNight 
    };
    
  }
    
  

  componentDidMount() {
    this.getHour();
    this.getDay();
  }

  getHour = () => {
    const date = new Date();
    const hour = date.getHours();
    this.setState({ hour });
  };

  getDay = () => {
    const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

    const d = new Date();
    let dateDay = weekday[d.getDay()];

    let dateGreetings = '' + dateDay
    
    this.setState({ dateGreetings });
    }
  render() {
    const {  username,dayNight } = this.state;
    const greeting = dayNight ? 'Good Morning 😊☀️' : 'Good Evening 😊🌆';
    
    
    return (
      <div 
           className="App"
           style={{color: (dayNight) ?'white':'black'}}
      >
        <h2>{greeting} {username}! Here is a bible passage for you:</h2>
        {dayNight ?
        (<p>This is the day that the Lord has made; let us rejoice and be glad in it. Psalm 118:24</p>):
        (<p>我必安然躺下睡覺，因為獨有你─耶和華使我安然居住。詩篇4:8</p>)}
      </div>
    );
  }
}

//export default Greeting;