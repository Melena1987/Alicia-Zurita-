
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import StrategicAwakening from './components/StrategicAwakening';
import Projects from './components/Projects';
import Collaboration from './components/Collaboration';
import Mentorship from './components/Mentorship';
import Press from './components/Press';
import Signals from './components/Signals';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen font-sans selection:bg-azteal selection:text-white">
      <Navbar />
      <main>
        <section id="hero">
          <Hero />
        </section>
        
        <section id="sobre-mi">
          <About />
        </section>

        <section id="despertar">
          <StrategicAwakening />
        </section>

        <section id="proyectos">
          <Projects />
        </section>

        <section id="servicios">
          <Collaboration />
        </section>

        <section id="prensa">
          <Press />
        </section>

        <section id="contenido">
          <Signals />
        </section>

        <section id="mentoria">
          <Mentorship />
        </section>

        <section id="testimonios">
          <Testimonials />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default App;
