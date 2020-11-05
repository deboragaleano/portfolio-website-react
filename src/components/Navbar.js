import React from 'react';
import {NavLink} from 'react-router-dom'; 
import { withStyles, makeStyles } from '@material-ui/core/styles';
import { Container, Button } from '@material-ui/core';

const NavButton = withStyles((theme) => ({
    root: {
      color: 'rgb(13, 26, 38)',
      fontFamily: 'Abel',
      letterSpacing: '1px',
      margin: '5px',
      transition:'all 0.5s ease',
      '&:hover': {
        borderBottom: '1px solid #339381f7',
        color: '#339381f7',
        transition: 'all 1s ease',
      },
    },
  }))(Button);

const useStyles = makeStyles((theme) => ({
    root: {
        margin: '30px 0 50px 0',
    }, 
    margin: {
        margin: theme.spacing(1),
    },
    active: {
        fontWeight: 'bolder',
        borderBottom: '1px solid #339381f7',
    }
}))

function Navbar() {
    const classes = useStyles(); 

    return (
        <Container className={classes.root}>
            <NavButton component={NavLink} to='/' exact activeClassName={classes.active}className={classes.margin}>
                Home</NavButton>
            <NavButton component={NavLink} to="/projects" exact activeClassName={classes.active} className={classes.margin}>   
                Projects</NavButton>
            <NavButton  component={NavLink} to="/contact" exact activeClassName={classes.active} className={classes.margin}>    
                Contact</NavButton>
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