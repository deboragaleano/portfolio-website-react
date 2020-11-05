import React from 'react';
import {NavLink} from 'react-router-dom'; 
import { withStyles, makeStyles } from '@material-ui/core/styles';
import { Container, Button } from '@material-ui/core';

const NavButton = withStyles((theme) => ({
    root: {
      color: 'rgb(13, 26, 38)',
      fontFamily: 'Abel',
      letterSpacing: '1px',
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
        margin: '30px 0 7px 0',
    }, 
    margin: {
        margin: theme.spacing(0.3),
    },
    home: {
        marginRight: '5px',
        fontSize: '15px',
        color: 'grey',
        '&:hover': {
            borderBottom: '1px solid #339381f7',
            color: '#339381f7',
            transition: 'all 1s ease',
          },
    },
    active: {
        fontWeight: 'bolder',
        borderBottom: '1px solid #339381f7',
        color: '#339381f7'
    }
}))

function Navbar() {
    const classes = useStyles(); 

    return (
        <Container className={classes.root}>
            <NavLink to='/' exact className={classes.home} activeClassName={classes.active}>
                <i className='fas fa-home'></i></NavLink>
            <NavButton component={NavLink} to='/about' exact activeClassName={classes.active}className={classes.margin}>
                About</NavButton>
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