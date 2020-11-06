import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles({
  root: {
    width: '100%',
    fontFamily: 'Abel',
    letterSpacing: '1px',
    fontSize: '15px',
    textTransform: 'uppercase'
  },
  media: {
    width: '100%',
    height: '230px',
  },
  actions: {
    margin: '20px'
  }
});

const GithubButton = withStyles((theme) => ({
    root: {
      color: '#808080',
      fontFamily: 'Abel',
      letterSpacing: '1px',
      fontWeight: 'bolder',
      marginLeft: '10px',
      transition:'all 0.5s ease',
      border: '1px solid #808080',
      '&:hover': {
        backgroundColor: '#808080',
        color: 'white',
        transition: 'all 0.5s ease',
      },
    },
}))(Button);

const DemoButton = withStyles((theme) => ({
  root: {
    color: '#339381f7',
    fontFamily: 'Abel',
    letterSpacing: '1px',
    marginLeft: '10px',
    fontWeight: 'bolder',
    transition:'all 0.5s ease',
    border: '1px solid #339381f7',
    '&:hover': {
      backgroundColor: '#339381f7',
      color: 'white',
      transition: 'all 0.5s ease',
    },
  },
}))(Button);

export default function SingleProject({project}) {
  const classes = useStyles();

  return (
    <Card>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={project.image}/>
        <CardContent className={classes.root}>
          <h3>{project.title}</h3>
          <p>{project.description}</p>
        </CardContent>
      </CardActionArea>
      <div className={classes.actions}> 
        <GithubButton 
          rel="noopener noreferrer" 
          target="_blank" 
          href={project.github}>
            GitHub</GithubButton>
        <DemoButton 
          rel="noopener noreferrer" 
          target="_blank" 
          href={project.demo}>
            Live Demo</DemoButton>
      </div>
    </Card>
  );
}