import React, {Component} from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import Stack from '@mui/material/Stack';

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
                <Stack direction="row" spacing={2}>
                <TextField fullWidth label="Tell me what you are thinking" id="fullWidth" />
                <Button variant="contained" endIcon={<SendIcon />}>
                    Send
                </Button>
                </Stack>
            </Box>
          );
    }
  
}
