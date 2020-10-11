import React from 'react';
import {NavLink} from 'react-router-dom'; 

function Navbar() {
    return (
        <div>
            <NavLink exact to="/">Home</NavLink>
            <NavLink exact to="/about">About</NavLink>
            <NavLink exact to="/projects">Projects</NavLink>
            <NavLink exact to="/contact">Contact</NavLink>
        </div>
    )
}

export default Navbar


/*
TODO

- Add Three links mininum (at the top)
- Make it very minimalist and mobile first 

*/