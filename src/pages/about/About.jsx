import React from 'react';
import { Title } from '../../components/title/Title';
import './About.css';

export const About = () => {
  return (
    <>
      <section className="about">
        <div
          className="about-title"
          data-aos="zoom-out"
          data-aos-duration="1200"
        >
          <Title title="About" />
        </div>
      </section>
    </>
  );
};
