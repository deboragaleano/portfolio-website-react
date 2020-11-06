import React from 'react'; 
import { makeStyles } from '@material-ui/core/styles';
import {Grid, Container} from '@material-ui/core';
import SingleProject from './SingleProject'; 
import {projects} from '../projects-data'; 

const useStyles = makeStyles({
    line: {
        borderBottom: '1px solid #E8E8E8',
        margin: '40px 0 40px 0'
    }
})

function Projects() {
    const classes = useStyles();

    return (
        <Container maxWidth='md'>
            <h2>PROJECTS</h2>
            <Grid container spacing={2}>
                {projects.map(p => (
                    <Grid item md={4} xs={12} key={p.title}>
                        <SingleProject  project={p} />
                    </Grid>
                ))}
            </Grid>
            <div className={classes.line}></div>
        </Container>
    )
}

export default Projects
