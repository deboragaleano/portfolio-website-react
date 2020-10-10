import React from 'react';
import './App.css';
import Container from '@material-ui/core/Container';
import About from './components/About'; 
import Navbar from './components/Navbar'; 
import Projects from './components/Projects'; 
import Footer from './components/Footer'; 

function App() {
  return (
    <Container maxWidth="lg">
      <div className="App">
        <Navbar /> 
        <About /> 
        <Projects /> 
        <Footer />
      </div>
    </Container>
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