import React from 'react'
import { makeStyles } from '@material-ui/core/styles'; 

const useStyles = makeStyles({
    footer: {
        color: 'grey',
    }
})
function Footer() {
    const classes = useStyles();

    return (
        <div>
            <footer>
                <h4 className={classes.footer}>© 2020, Built by me with React & Material UI 
                 -  <i className="far fa-star"></i></h4>
            </footer>
        </div>
    )
}

export default Footer
