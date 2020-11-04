import React from 'react';
import {NavLink} from 'react-router-dom'; 
import {makeStyles} from '@material-ui/styles'; 
import { Container } from '@material-ui/core';

const useStyles = makeStyles({
    root: {
        margin: '30px 0 50px 0',
        justifyContent: 'center'
    }, 
    link: {
        // borderRadius: 3,
        // border: '1px solid rgb(143, 142, 142)',
        color: 'rgb(13, 26, 38)',
        margin: '0 20px', 
        padding: '0 4px',
        // fontSize: '0.7em',
        textTransform: 'uppercase',
        letterSpacing: '1px',
        textDecoration: 'none',
        // transition: '0.1s background-color linear, 0.1s color linear'
    },
    active: {
        fontWeight: 'bolder',
        // backgroundColor: '#339381f7',
        textDecoration: 'none',
        color: 'rgb(13, 26, 38)'
    }
});


// #navbar li a {
//     color: rgb(13, 26, 38);
//     display: block;
//     font-size: 0.7em;
//     height: 50px;
//     letter-spacing: 1px;
//     margin: 0 20px;

//     position: relative;
//     text-decoration: none;
//     text-transform: uppercase;
//     transition: all 0.5s ease;
//     -webkit-transition: all 0.5s ease;
//   }
  
//   #navbar li a:hover {
//     /* border-bottom: 1px solid rgb(28, 121, 184); */
//     color: rgb(28, 121, 184);
//     transition: all 1s ease;
//     -webkit-transition: all 1s ease;
//   }




function Navbar() {
    const classes = useStyles(); 

    return (
        <Container className={classes.root}>
            <NavLink exact to="/" activeClassName={classes.active} className={classes.link}>Home</NavLink>
            <NavLink exact to="/projects" activeClassName={classes.active} className={classes.link}>Projects</NavLink>
            <NavLink exact to="/contact" activeClassName={classes.active} className={classes.link}>Contact</NavLink>
        </Container>
    )
}

export default Navbar




/*
TODO

- Add Three links mininum (at the top)
- Make it very minimalist and mobile first 
- Make it fixed! 
*/