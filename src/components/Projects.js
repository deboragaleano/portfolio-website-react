import React from 'react'; 
import {Grid, Container} from '@material-ui/core';
import SingleProject from './SingleProject'; 
import {projects} from '../projects-data'; 

function Projects() {
    return (
        <Container maxWidth='md'>
            <h2>PROJECTS</h2>
            <Grid container spacing={2}>
                {projects.map(p => (
                    <Grid item md={4} xs={12}>
                    <SingleProject key={p.title} project={p} />
                    </Grid>
                ))}
            </Grid>
        </Container>
    )
}

export default Projects

/* TODO

- When "see more" is clicked, show 3 more projects if I have those
- ternary operator with the buttons (in case there's more too add)
- If not, just send to my general GITHUB page


- THINK ABOUT A 3RD PROJECT TO SHOW
- STYLE PHONEBOOK!!!! 
- DO FOOTER 
- CONTANCT
*/