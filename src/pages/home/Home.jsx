import React from 'react';
import { Main } from '../../components/main/Main';
import { About } from '../about/About';
import { Blog } from '../Blog/Blog';
import { Contact } from '../contact/Contact';
import { Project } from '../project/Project';
import { Vanilajs } from '../vanilajs/Vanilajs';

export const Home = () => {
  

  return (
    <>
      <Main />
      <About />
      <Vanilajs />
      <Project />
      <Blog />
      <Contact />
    </>
  );
};
