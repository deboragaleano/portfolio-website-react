import React from 'react'; 
import {makeStyles} from '@material-ui/styles'; 
import {Grid, Button} from '@material-ui/core';
import SingleProject from './SingleProject'; 
import {projects} from '../projects-data'; 

const useStyles = makeStyles({
    root: {
      display: 'flex',
      flexWrap: 'wrap'
    },
});

console.log(projects);

function Projects() {
    const classes = useStyles();

    return (
        <div>
            <h1>Projects</h1>
            <Grid className={classes.root}>
                {projects.map(p => (
                    <SingleProject key={p.title} project={p} />
                ))}
            </Grid>
                <Button 
                    variant='contained'
                    color="secondary">
                See more</Button>
        </div>
    )
}

export default Projects

/* TODO

- When "see more" is clicked, show 3 more projects if I have those
- ternary operator with the buttons (in case there's more too add)
- If not, just send to my general GITHUB page
- Fix the container of cards to be responsive 

*/