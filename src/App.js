import logo from './logo.svg';
import moon from './moon.svg';
  import React from 'react';
import Greeting from './components/Greetings';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';



import './Appe.css';
import TextInput from './components/TextInput';
import DayBackground from './components/DayBackground';
import NightBackground from './components/NightBackground'
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material';


class App extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      speed: 25,
      hour: null,
      dayNight:true,
      catch: false

    };
  }
  componentDidMount = () => {
    this.getTheme();
    
  }
  
  
  getTheme = () => {
    var date = new Date();
    var hour = date.getHours();
    var dayNight
    if(hour > 12){
      dayNight = true;
    }else{
      dayNight = false;
    }
    this.setState({ dayNight });
  };
 catchMeteor(){
  this.setState({catch:true})
  //console.log("catch from parents")
 }
 handleClose(){
  this.setState({catch:false})
 }
  render(){
    //var { dayNight } = this.state;
    var date = new Date();
    var hour = date.getHours();
    var dayNight
    if(hour < 12){dayNight = true;}else{dayNight = false;}
    //if(hour >= 12){dayNight = true;}else{dayNight = false;}
    var bg = dayNight ? '#c2f4ff' : '#474343';
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
          {
      dayNight 
      ?
      <DayBackground/>
      :
      <NightBackground 
            catchMeteor = {this.catchMeteor.bind(this)}
      />
      }
      <Container>

      <Box 
        m={2} pt={3}
        component="section" 
        display="flex" 
        alignItems="center"
        justifyContent="center"
      >
        {dayNight ?
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
      {
      dayNight 
      ?
      <Greeting dayNight = {false}/>
      :
      <Greeting dayNight = {true}/>
      }
      </Container>
      <Container>
        
        {
        dayNight 
        ?
        <TextInput dayNight={true}/>
        :
        <TextInput dayNight={false}/>
        }
      </Container>
      <Dialog
        open={this.state.catch}
        onClose={this.handleClose.bind(this)}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Congratulations! You have captured a meteor💫, like you have captured my heart ❤️"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {`We’re like shooting stars, Brief, yet infinite, in this cosmic ballet. 
            可是相聚離開 都有時候,
            天地過去, 也有時候
            可是我,有時候,
            寧願選擇留戀不放手,
            也許 等到風景都看透,
            也許 你會陪我,看細水長流`}
          </DialogContentText>
        </DialogContent>
      </Dialog>
      </div>
    
    );
  }
}

export default App;
