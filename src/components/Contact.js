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
        display: 'block'
    }
})

export default function Contact() {
    const classes = useStyles();
    
    return (
        <Container maxWidth='sm'>
            <h2>CONTACT</h2>
            <Card className={classes.root}>
                <form name="contact" method="POST" data-netlify="true">
                    <p><TextField id="standard-basic" label="name" name="name" /></p>
                    <p><TextField id="standard-basic" label="email" name="email" /></p>
                    <p><TextField multiline id="standard-basic" label="message" name="message" /></p>
                    <SendButton type="submit">Send</SendButton>
                </form>
            </Card>
        </Container>
    )
}

/*
    todo
    - erase nasty erros
    - make sure netfly will take it 
    - do something with the footer 

*/