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
    if(this.props.catchMeteor){
      this.props.catchMeteor()
    }
    alert("You got my heart!❤️")
  }
  
  render() {
    var meteors = []
    for (var i = 0;i<this.state.meterosNum;i++){
      meteors.push(
        (<div key={i} className={`meteor-${i}`} onClick={this.meteorsCatch.bind(this)}></div>)
      )
    }
    return (
      <div>
        <div className="star"></div>
        {
          meteors
        }
      
      </div>
    );
  }
}

//export default Greeting;