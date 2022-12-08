import React from 'react';
import Typewriter from 'typewriter-effect';
import { v4 as uuid } from 'uuid';
import { main } from '../../assets/db/dummydata';
import './Main.css';

export const Main = () => {
  return (
    <>
      <section className="main">
        {main.map((item) => (
          <div
            className="main-container"
            data-aos="fade-out"
            data-aos-delay="200"
            data-aos-duration="1200"
            key={uuid()}
          >
            <h3 className="main-title">{item.topText}</h3>
            <h1
              className="ani-title"
              data-aos="zoom-in-right"
              data-aos-duration="1200"
              data-aos-delay="500"
            >
              <Typewriter
                options={{
                  strings: [`${item.post}`, `${item.design}`],
                  autoStart: true,
                  loop: true,
                }}
              />
            </h1>
            <p className="home-desc">Today’s special moments are tomorrow’s memories</p>
            <button className='main-btn'>Button</button>
          </div>
        ))}
      </section>
    </>
  );
};
