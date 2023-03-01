import './App.css';
import React from 'react';

//Pages
import AboutMe from './pages/aboutme';
import Contact from './pages/contact';
import Portfolio from './pages/portfolio';
import Resume from './pages/resume';

//Components
import Nav from './components/navbar';
import Header from './components/header';
import Footer from './components/footer';


//Add other fillings into function App()
function App() {
    return (
        <div className="react-portfolio">
            <ReactPortfollio />
        </div>
    );
}

export default App;