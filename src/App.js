import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Pages } from './pages/Pages';


function App() {
  const heightVh =  () => {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);
  }

  useEffect(() => {
    AOS.init();
    AOS.refresh()
    heightVh();
  }, []);

  return (
    <>
    <Pages />
    </>
  );
}

export default App;
