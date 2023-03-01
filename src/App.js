import './App.css';
import React from 'react';

//Pages
import AboutMe from './pages/AboutMe/aboutme';
import Contact from './pages/Contact/contact';
import Projects from './pages/Projects/projects';
import Resume from './pages/Resume/resume';

//Components
import Nav from './components/navbar';
import Header from './components/header';
import Footer from './components/footer';


//Add other fillings into function App()
function App() {
    return (
        <div className="react-portfolio">
            <Header />
            <Nav />
            <AboutMe />
            <Projects />
            <Resume />
            <Contact />
            <Footer />
        </div>
    );
}

export default App;