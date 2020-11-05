import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom'; 
import './App.css';
import {makeStyles} from '@material-ui/styles';
import Container from '@material-ui/core/Container';
import Contact from './components/Contact'; 
import Projects from './components/Projects'; 
import Home from './components/Home'; 
import About from './components/About'; 
import Navbar from './components/Navbar'; 

const useStyles = makeStyles({
  root: {
    fontFamily: 'Abel',
    alignItems: 'center',
    textAlign: 'center', 
  },
});

function App() {
  const classes = useStyles();

  return (
    <BrowserRouter >
          <Container className={classes.root} >
          <Navbar /> 
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/about' component={About} />
            <Route exact path='/projects' component={Projects} />
            <Route exact path='/contact' component={Contact} />
          </Switch>
          </Container>
    </BrowserRouter>

  );
}

export default App;

/* GENERAL TODO
- Contact page add 
- Decide on navbar, footer
- Picture to add for the about page
- Background colors
- Which projects ? Look at deployed ones
- Check a 'checklist' of things that NEED to be there!

*/