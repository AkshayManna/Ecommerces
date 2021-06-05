import React from "react"
import { Link, useHistory } from 'react-router-dom';
import Header from './Header'
import Eheaders from './Eheaders'
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1.5),
      width: '55ch',
    },
  },
}));

const ContactDetails =()=>{
    return(
        <>
           <header>
            <Eheaders/>
           </header>
            <Container maxWidth="sm">
                
                <div style={{ backgroundColor: '#cfe8fc', height: '70vh','margin-top': '8%' }} >
                    <h1>Home Page</h1>
                    <form noValidate autoComplete="off">
                        <TextField
                            id="standard-password-input"
                            label="Name"
                            type="text"
                            autoComplete="current-password"
                        /> 

                        <TextField
                            id="standard-password-input"
                            label="Email"
                            type="text"
                            autoComplete="current-password"
                        /> 

                        <TextField
                            id="standard-password-input"
                            label="Mobile No"
                            type="text"
                            autoComplete="current-password"
                        /> 

                        <TextField
                            id="standard-password-input"
                            label="Alternate Mobile No"
                            type="text"
                            autoComplete="current-password"
                        /> 

                        <TextField
                            id="standard-password-input"
                            label="Alternate Mobile No"
                            type="text"
                            autoComplete="current-password"
                        /> 

                        <Button variant="contained" color="primary">
                            Submit
                        </Button>
                    </form>    
                </div>    
            </Container>
        </>
    )
}
export default ContactDetails