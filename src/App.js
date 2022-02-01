import './App.css';
import AboutMe from './components/AboutMe';
import Contact from './components/Contact';
import Portfolio from './components/Portfolio';
import ErrorPage from './components/ErrorPage';
import NavBar from './components/NavBar';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
var ReactRotatingText = require('react-rotating-text');

function App() {
  return (
    <Router>
      <>
      <>
        <p>Hi I'm</p>
        <ReactRotatingText items={['Jane', 'Janey']} />
        </>
        <NavBar />
        <Routes>
        <Route exact path="/about" element= {<AboutMe />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route element={ErrorPage}/>
        </Routes>
      </>
    </Router>
  );
}
export default App;
