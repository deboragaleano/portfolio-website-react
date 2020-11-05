import React from 'react'; 
import {makeStyles} from '@material-ui/styles'; 
import {Grid, Container, Button} from '@material-ui/core';
import SingleProject from './SingleProject'; 
import {projects} from '../projects-data'; 

const useStyles = makeStyles({
    root: {
      backgroundColor: 'red',
    //   alignSelf: 'center' doesn't work 
    },
});

function Projects() {
    const classes = useStyles();

    return (
        <Container maxWidth='md'>
            <h2>PROJECTS</h2>
            <Grid container spacing={2} className={classes.root}>
                {projects.map(p => (
                    <Grid item md={4} xs={12}>
                    <SingleProject key={p.title} project={p} />
                    </Grid>
                ))}
            </Grid>
                {/* <Button 
                    variant='contained'
                    color="secondary">
                See more</Button> */}
        </Container>
    )
}

export default Projects

/* TODO

- When "see more" is clicked, show 3 more projects if I have those
- ternary operator with the buttons (in case there's more too add)
- If not, just send to my general GITHUB page

*/