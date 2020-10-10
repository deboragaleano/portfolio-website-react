import React from 'react'; 
import {makeStyles} from '@material-ui/styles'; 
import {Paper, Grid} from '@material-ui/core';
import SingleProject from './SingleProject'; 

const useStyles = makeStyles({
    root: {
      display: 'flex',
      justifyContent: 'space-between',
      flexWrap: 'wrap',
    },
});

function Projects() {
    const classes = useStyles();

    return (
        <div>
            <h1>Projects</h1>
            <Grid className={classes.root}>
                {/* <Paper style={{width: 100, height: 100,backgroundColor: '#282c34'}}/> */}
                <SingleProject /> 
                <SingleProject /> 
                <SingleProject /> 
            </Grid>
        </div>
    )
}

export default Projects
