import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Schedule from './components/Schedule';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';

function App() {
  const [activeSection, setActiveSection] = useState('home');

  return (
    <div className="App">
      <Header activeSection={activeSection} setActiveSection={setActiveSection} />
      <main>
        <Hero id="home" setActiveSection={setActiveSection} />
        <About id="about" />
        <Services id="services" />
        <Schedule id="schedule" />
        <Gallery id="gallery" />
        <Testimonials id="testimonials" />
        <Contact id="contact" />
      </main>
      <Footer />
    </div>
  );
}

export default App;