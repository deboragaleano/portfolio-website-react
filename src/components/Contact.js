import React from 'react';
import { makeStyles } from '@material-ui/core/styles'; 
import {ReadMore as SendButton} from './About'; 
import Card from '@material-ui/core/Card';
import TextField from '@material-ui/core/TextField'; 
import Container from '@material-ui/core/Container'; 


const useStyles = makeStyles({
    root: {
        width: '90%',
        padding: '20px',
    },
    btn: {
        margin: '20px'
    }
})

export default function Contact() {
    const classes = useStyles();
    
    return (
        <Container maxWidth='sm'>
            <h2>CONTACT</h2>
            <Card className={classes.root}>
                <form name="contact" method="POST" netifly data-netlify="true">
                    <TextField id="standard-basic" 
                        label="name" name="name" /> <br />
                    <TextField id="standard-basic" 
                        label="email" name="email" /> <br /> 
                    <TextField multiline rows={4}
                        id="standard-multiline-static" 
                        label="message" name="message" /> <br />
                    <div className={classes.btn}>   
                    <SendButton type="submit">Send</SendButton>
                    </div> 
                </form>
            </Card>
        </Container>
    )
}