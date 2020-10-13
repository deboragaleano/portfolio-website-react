import React from 'react';
import {NavLink} from 'react-router-dom'; 
import {makeStyles} from '@material-ui/styles'; 

const useStyles = makeStyles({
    link: {
        background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
        borderRadius: 3,
        border: 0,
        color: 'white',
        height: 48,
        padding: '0 30px',
        boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .30)'
    },
    active: {
        background: 'black'
    }
});

function Navbar() {
    const classes = useStyles(); 

    return (
        <div>
            <NavLink exact to="/" activeClassName={classes.active} className={classes.link}>Home</NavLink>
            <NavLink exact to="/about" className={classes.link}>About</NavLink>
            <NavLink exact to="/projects" className={classes.link}>Projects</NavLink>
            <NavLink exact to="/contact" className={classes.link}>Contact</NavLink>
        </div>
    )
}

export default Navbar




/*
TODO

- Add Three links mininum (at the top)
- Make it very minimalist and mobile first 

*/