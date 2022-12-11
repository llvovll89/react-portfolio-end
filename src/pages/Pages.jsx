import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from '../components/header/Header';
import { Home } from './home/Home';
import { About } from './about/About';
import { Vanilajs } from './vanilajs/Vanilajs';
import { Project } from './project/Project';
import { Contact } from './contact/Contact';
import  Footer  from '../components/footer/Footer';

export const Pages = () => {
  return (
    <>
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
    </>
  );
};
