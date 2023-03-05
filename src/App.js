import './App.css';
import React from 'react';

//Pages
import About from './pages/AboutMe/aboutme';
import Contact from './pages/Contact/contact';
import Projects from './pages/Projects/projects';
import Resume from './pages/Resume/resume';

//Components
import Navbar from './components/Navbar';
import Header from './components/Header';
import Footer from './components/Footer';


//Add other fillings into function App()
function App() {
    return (
        <div className="react-portfolio">
            <Header />
            <Navbar />
            <About />
            <Projects />
            <Resume />
            <Contact />
            <Footer />
        </div>
    );
}

export default App;