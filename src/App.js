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
