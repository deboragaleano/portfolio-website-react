import React, {useState} from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import {Container, Button} from '@material-ui/core';

const useStyles = makeStyles({
    text: {
        letterSpacing: ".03em",
        lineHeight: "2.2em",
        fontSize: '1.2em'
    },
    line: {
        borderBottom: '1px solid #E8E8E8',
        marginTop: '40px'
    }
})

const ReadMore = withStyles((theme) => ({
    root: {
      color: '#339381f7',
      fontFamily: 'Abel',
      letterSpacing: '1px',
      transition:'all 0.5s ease',
      border: '1px solid #339381f7',
      '&:hover': {
        color: '#339381f7',
        transition: 'all 1s ease',
      },
    },
}))(Button);

function About() {
    const [expanded, setExpanded] = useState(false)
    const classes = useStyles();

    const expandedText = 
        <>
        <p>I am currently participating in <a href="https://the-collab-lab.codes/who-we-are/" target='_blank' rel="noopener noreferrer" >The Collab Lab</a>, building a React/Firebase app and pair programming with an amazing team of talented developers. I’m gaining experience working remotely and learning how sofware teams work.</p>
        <p>Besides coding, I love travelling and discovering new places. I'm originally from Paraguay but I studied and lived in Europe for the past six years and now I live in Norway with my partner. </p>
        <p>My coding language is <strong>JavaScript</strong> and my speaking languages are Spanish, English, and some French. Currently learning Norwegian ;)</p> 
        </>

    return (
            <Container maxWidth='sm'>
                <h2>ABOUT ME</h2>
                <div className={classes.text}>
                    <p>I am a self-taught front-end developer looking for my first dev job. 
                    <br />I am interested in React, Node.Js/MongoDB but I'd love to train in other technologies as well.</p>
                   
                    {expanded ? expandedText : <ReadMore onClick={() => setExpanded(true)}>READ MORE</ReadMore>}
                </div>
                <div className={classes.line}></div>
            </Container>
    )
}

export default About

