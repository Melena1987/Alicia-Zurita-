
import React from 'react';
import Navbar from './components/Navbar.tsx';
import Hero from './components/Hero.tsx';
import About from './components/About.tsx';
import StrategicAwakening from './components/StrategicAwakening.tsx';
import Projects from './components/Projects.tsx';
import Collaboration from './components/Collaboration.tsx';
import Mentorship from './components/Mentorship.tsx';
import Press from './components/Press.tsx';
import Signals from './components/Signals.tsx';
import Testimonials from './components/Testimonials.tsx';
import Footer from './components/Footer.tsx';

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
