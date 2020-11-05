import React from 'react'
import {Container} from '@material-ui/core';
import {makeStyles} from '@material-ui/styles';
import photo from '../assets/circle-dg-pic.png';
import About from './About';
import Projects from './Projects'
import Footer from './Footer';

const useStyles = makeStyles({
    root: {
        // backgroundColor: '#282c34', react background 
        // #f5f5f5 grey kind of background 
        padding: '40px'
    },
    img: {
        maxWidth: '50%'
    },
    title: {
        margin: '10px',
        letterSpacing: '1.5px',
    },
    icon: {
        textDecoration: 'none',
        margin: '5px',
        color: 'grey',
        fontSize: '25px',
        '&:hover': {
            color: '#339381f7',
            transition: 'all 1s ease',
          },
    },
    line: {
        borderBottom: '1px solid #E8E8E8',
        marginTop: '40px'
    }
})

// shade of green #669999

function Home() {
    const classes = useStyles(); 

    return (
            <>  
            <Container maxWidth='sm' className={classes.root}>
               <img className={classes.img} src={photo} alt="debora"/>
                <h3 className={classes.title}>DEBORA GALEANO</h3>
                <h4 className={classes.title}>Web Developer</h4>
                <div className={classes.icons}>
                    <a href="https://github.com/deboragaleano" 
                        target='_blank' 
                        rel="noopener noreferrer" 
                        className={classes.icon}>
                        <i className="fab fa-github-square"></i>
                    </a>
                    <a href="https://twitter.com/dmgalser" 
                        target='_blank' 
                        rel="noopener noreferrer" 
                        className={classes.icon}>
                        <i className="fab fa-twitter-square"></i>
                    </a>
                    <a href="https://www.linkedin.com/in/debora-galeano/" 
                        target='_blank' 
                        rel="noopener noreferrer" 
                        className={classes.icon}>
                        <i className="fab fa-linkedin"></i>
                    </a>
                    <a href="https://dev.to/deboragaleano" 
                        target='_blank' 
                        rel="noopener noreferrer" 
                        className={classes.icon}>
                        <i className="fab fa-dev"></i>
                    </a>
                </div>
                <div className={classes.line}></div>
            </Container>
            <About />
            <Projects />
            <Footer />
        </>
    )
}

export default Home
