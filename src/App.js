import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom'; 
import './App.css';
import Container from '@material-ui/core/Container';
import About from './components/About'; 
import Navbar from './components/Navbar'; 
import Projects from './components/Projects'; 
import Home from './components/Home'; 


function App() {
  return (
    <BrowserRouter >
      <Container maxWidth="lg">
         <Navbar />
              
        <div className="App">
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/about' component={About} />
            <Route exact path='/projects' component={Projects} />
          </Switch>
        </div>
      </Container>
    </BrowserRouter>
  );
}

export default App;

/* GENERAL TODO
- Contact page
- Decide on navbar, footer
- Picture to add for the about page
- Background colors
- Which projects ? Look at deployed ones
- Check a 'checklist' of things that NEED to be there!

*/