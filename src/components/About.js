import React from 'react';
import {Container} from '@material-ui/core';
import {makeStyles} from '@material-ui/styles';
import photo from '../assets/foto_visigrad.png'
import '../App.css'; 

const useStyles = makeStyles({
    btn: {
        // background: 'linear-gradient(45deg, #993333, #cc6699)',
        border: 0,
        borderRadius: 15,
        color: 'white',
        padding: '0 30px',
    },
    img: {
        borderRadius: '50%',
        maxWidth: '50%'
    }
})

function About() {
    const classes = useStyles(); 

    return (
        // <div className="App-header">
            <Container>
               
                <h1>ABOUT ME</h1>
                <div>
                    <img className={classes.img} src={photo} alt="debora"/>
                    <p>After discovering my passion for coding two years ago, I decided to make a career switch. I come from a humanities/social sciences background and I'm now interested in breaking into world of web development.</p>
                    <p>I am open to remote entry-level positions, where I can continue working on React/NodeJs and where I can build a long-term career. </p>
                    {/* <p>Besides coding, I love travelling and discovering new places. I studied and lived in Europe for the past six years and now I live in Norway with my partner. </p>
                    <p>My coding language is JavaScript and my speaking languages are Spanish (native from Paraguay), English (did my BA in the US), French (studied in France for a year+) and now some Norwegian because it's the local language ;)</p> */}
                    <a>Link to github</a>
                    <a>Link to twitter</a>
                    <a>Link to linkeding</a>
                </div>
            </Container>
        // </div>
    )
}

export default About

/**

TODO:
-SHORT version and LONG Version (?)
*/