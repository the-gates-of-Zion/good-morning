import logo from './logo.svg';
import moon from './moon.svg';
  import React from 'react';
import Greeting from './components/Greetings';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';

import './Appd.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      speed: 25,
      hour: null,
    

    };
  }
  componentDidMount = () => {
    this.getHour();
    this.getDay();
  }
  getDay = () => {
    const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

    const d = new Date();
    let dateDay = weekday[d.getDay()];

    let dateGreetings = '' + dateDay
    
    this.setState({ dateGreetings });
    }
  getHour = () => {
    const date = new Date();
    const hour = date.getHours();
    this.setState({ hour });
  };
 
  render(){
    const { hour, username,dateGreetings } = this.state;
    const greeting = hour < 12 ? 'Good Morning 😊☀️' : 'Good Evening 😊🌆';
    var bg = hour < 12 ? '#c2f4ff' : '#474343';
    return(
        <div 
          className="App"
          style={{
            backgroundColor: bg,
            top:'0',
            left:'0',
            width: '100%',
            height: '100%',
            position:'fixed',
            padding:'0',
            margin:'0',
          }}
        >
        <Container
          
        >
          {/* <Box 


        display="flex" 
        alignItems="right"
        justifyContent="center"
      >
        <div class="cloud"/>
      </Box> */}
         
      
      <Box 
        m={2} pt={3}
        component="section" 
        display="flex" 
        alignItems="center"
        justifyContent="center"
      >
        {hour < 12 ?
        <img
        src={logo} 
        className="App-logo" 
        alt="logo"
        style={{
          animation: `spin ${this.state.speed}s linear infinite`
        }}/>
        :
      <img
        src={moon} 
        className="App-logo" 
        alt="logo"
        
      />
      }
      
          
      </Box>
      <Greeting/>
      </Container>
      </div>
    
    );
  }
}

export default App;
