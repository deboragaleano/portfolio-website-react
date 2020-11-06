import React from 'react'
import {Container} from '@material-ui/core';
import {makeStyles} from '@material-ui/styles';
import photo from '../assets/circle-dg-pic.png';
import {About} from './About';
import Projects from './Projects'
import Footer from './Footer';
import Contact from './Contact';

const useStyles = makeStyles({
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
        fontSize: '25px',
        color: '#D2691E',
        '&:hover': {
            color: '#339381f7',
            transition: 'all 1s ease',
          },
    },
    line: {
        borderBottom: '1px solid #E8E8E8',
        margin: '40px 0 40px 0'
    }
})

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
                        <i className="fab fa-github"></i>
                    </a>
                    <a href="https://twitter.com/dmgalser" 
                        target='_blank' 
                        rel="noopener noreferrer" 
                        className={classes.icon}>
                        <i className="fab fa-twitter"></i>
                    </a>
                    <a href="https://www.linkedin.com/in/debora-galeano/" 
                        target='_blank' 
                        rel="noopener noreferrer" 
                        className={classes.icon}>
                        <i className="fab fa-linkedin-in"></i>
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
            <Contact />
            <Footer />
        </>
    )
}

export default Home
