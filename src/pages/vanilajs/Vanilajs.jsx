import React from 'react';
import { Title } from '../../components/title/Title';
import { vanilajs } from '../../assets/db/dummydata';
import { Link } from 'react-router-dom';
import './Vanilajs.css';

export const Vanilajs = () => {
  return (
    <>
      <section className="vanilajs">
        <div
          className="vanila-text"
          data-aos="fade-up"
          data-aos-anchor-placement="center-bottom"
        >
          <Title title="VanilaJS" subtitle="JS-Study" />
        </div>

        <div className="vanilajs-container">
          {vanilajs.map((item) => (
            <div className="vanilajs-card" key={item.id}>
              <img src={item.cover} alt="..." className="vanila-img" />
              <div className="vanilajs-content">
                <h1 className="vanila-title">
                  <i className="phone">{item.icon}</i>
                  {item.name}
                </h1>
                <span className="skill">SKILL | {item.skill}</span>
                <p className="vanila-desc">{item.desc}</p>
                <Link to={item.github} className="btn-git">
                  Github / {item.git}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};
