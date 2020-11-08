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
        margin: '40px 0 40px 0'
    }
})

const ReadMore = withStyles((theme) => ({
    root: {
      color: '#D2691E',
      fontFamily: 'Abel',
      letterSpacing: '1px',
      transition:'all 0.5s ease',
      border: '1px solid #D2691E',
      '&:hover': {
        color: '#D2691E',
        transition: 'all 1s ease',
      },
    },
}))(Button);

function About() {
    const [expanded, setExpanded] = useState(false)
    const classes = useStyles();

    const expandedText = 
        <>
        <p>In past positions, I worked as an assistant in international organizations like The World Bank and the Organization of American States in Washington D.C.</p>
        <p>Besides coding, I love travelling and discovering new places. I'm originally from Paraguay but I've been living in different countries around Europe for the past six years. Now I live in Oslo with my partner. </p>
        <p>My coding language is <strong>JavaScript</strong> and my speaking languages are English and Spanish (and sometimes French). </p> 
        </>

    return (
            <Container maxWidth='sm'>
                <h2>ABOUT ME</h2>
                <div className={classes.text}>
                    <p>I'm a self-taught front-end developer looking for a remote job opportunity. I'm focusing on <strong>React</strong> and learning <strong>Node.js/MongoDB.</strong> </p>
                    <p>I'm currently participating in <a href="https://the-collab-lab.codes/who-we-are/" target='_blank' rel="noopener noreferrer" >The Collab Lab</a>, building a React/Firebase shopping app and collaborating with an amazing team of talented developers and mentors. I’m gaining experience in pair programming and working remotely.</p>
                    {expanded ? expandedText : <ReadMore onClick={() => setExpanded(true)}>READ MORE</ReadMore>}
                </div>
                <div className={classes.line}></div>
            </Container>
    )
}

export {ReadMore, About}

