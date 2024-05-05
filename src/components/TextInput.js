import React, {Component} from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default class TextInput extends Component {
    constructor(props) {
        super(props);
        // Don't call this.setState() here!
        this.state = { 
            
        };
        
      }

    render(){
        return (
            <Box
              sx={{
                //width: 500,
                maxWidth: '100%',
              }}
            >
              <TextField fullWidth label="Tell me what you are thinking" id="fullWidth" />
            </Box>
          );
    }
  
}
