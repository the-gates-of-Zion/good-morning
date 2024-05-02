import logo from './logo.svg';
import { 
  SafeAreaView,
  View,
  Animated,
  Easing,
  TouchableHighlight,
  Text
  } from 'react'
  import React,{useRef} from 'react';
import Greeting from './components/Greetings';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rotateValueHolder: new Animated.Value(0)
    };
  }
  componentDidMount = () => {
    this.startImageRotateFunction();
  }
  startImageRotateFunction = () => {
    Animated.loop(Animated.timing(this.state.rotateValueHolder, {
      toValue: 1,
      duration: 3000,
      easing: Easing.linear,
      useNativeDriver: true,
    })).start();
  };
  render(){
    return(
        <div className="App">
      <CssBaseline />
      <Container >
      <SafeAreaView>
        <View>
          <Animated.Image
            src={logo} 
            className="App-logo" 
            alt="logo"
            style={{
              alignSelf:"center",
              transform:
                [
                  {
                    rotate: this.state.rotateValueHolder.interpolate(
                        {
                          inputRange: [0, 1],
                          outputRange: ['0deg', '360deg'],
                        }
                      )
                  }
                ],
            }}
          />
      
        </View>
      </SafeAreaView>
      <Greeting/>
      </Container>
    </div>
    
    );
  }
}


