import React from 'react';
import { Title } from '../../components/title/Title';

export const Contact = () => {
  return (
    <>
      <section className="contact">
        <div
          className="contact-title"
          data-aos="fade-up-right"
          data-aos-duration="1000"
        >
          <Title title="Contact" />
        </div>
      </section>
    </>
  );
};
