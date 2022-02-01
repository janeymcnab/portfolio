import './App.css';
import AboutMe from './components/AboutMe';
import Contact from './components/Contact';
import Portfolio from './components/Portfolio';
import ErrorPage from './components/ErrorPage';
import NavBar from './components/NavBar';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import JumpToMenu from './components/JumpToMenu';
var ReactRotatingText = require('react-rotating-text');

function App() {
  return (
      <>
        <JumpToMenu />
        <p>Hi I'm</p>
        <ReactRotatingText items={['Jane', 'Janey']} />
        <AboutMe name="About Me"/>
        <Portfolio />
        <Contact />
      </>
  )

}
export default App;
