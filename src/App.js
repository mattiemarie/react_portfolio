//React
import React from "react";

//Pages
import About from './components/About';
import Contact from './components/Contact';
import Projects from './components/Projects';
import Resume from './components/Resume';
import Navbar from './components/Navbar';
import Header from './components/Header'
import Footer from './components/Contact';


//Add other fillings into function App()
export default function App() {
    return (
        <main>
            <Header />
            <Navbar />
            <About />
            <Projects />
            <Resume />
            <Contact />
            <Footer />
        </main>
    );
}
