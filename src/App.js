import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Home } from './pages/home/Home';
import { About } from './pages/about/About';
import { Vanilajs } from './pages/vanilajs/Vanilajs';
import { Project } from './pages/project/Project';
import { Contact } from './pages/contact/Contact';
import { Header } from './components/header/Header';
import { Footer } from './components/footer/Footer';


function App() {
  const heightVh =  () => {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);
  }

  useEffect(() => {
    AOS.init();
    heightVh();
  }, []);

  return (
    <div className="App">
      <Router basename={process.env.PUBLIC_URL}>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/vanilajs" element={<Vanilajs />} />
          <Route path="/project" element={<Project />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
