// src/components/Greeting.js
import React, { Component } from 'react';
import '../css/nightBackground.scss'
export default class NightBackground extends Component {

  constructor(props) {
    super(props);
    // Don't call this.setState() here!
    this.state = {
        meterosNum:15,
        catch: false,
    };
    
  }

  meteorsCatch(){
    this.setState({catch:true})
    alert("You got my heart!❤️")
  }
  
  render() {
    var meteors = []
    for (var i = 0;i<this.state.meterosNum;i++){
      meteors.push(
        (<div class={`meteor-${i}`} onClick={this.meteorsCatch.bind(this)}></div>)
      )
    }
    return (
      <div>
        <div class="star"></div>
        {
          meteors
        }
      
      </div>
    );
  }
}

//export default Greeting;