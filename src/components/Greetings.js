// src/components/Greeting.js
import React, { Component } from 'react';

class Greeting extends Component {
    
  state = {
    hour: null,
    username: '', // Replace with the user's name
    dateGreetings: ''
  };

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
    const { hour, username,dateGreetings } = this.state;
    const greeting = hour < 12 ? 'Good Morning 😊☀️' : 'Good Evening 😊🌆';
    
    
    return (
      <div 
           className="App"
           style={{color: (hour < 12) ?'black':'white'}}
      >
        <h2>{greeting} {username}! Here is a bible passage for you:</h2>
        {hour < 12 ?
        (<p>"Psalm 118:24 - This is the day that the Lord has made; let us rejoice and be glad in it."</p>):
        (<p>我必安然躺下睡覺，因為獨有你─耶和華使我安然居住。詩篇4:8</p>)}
      </div>
    );
  }
}

export default Greeting;