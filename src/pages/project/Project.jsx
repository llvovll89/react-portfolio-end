import React from 'react';
import { Title } from '../../components/title/Title';
import { projects } from '../../assets/db/dummydata';
import { Visibility } from '@mui/icons-material';
import './Project.css';

export const Project = () => {
  return (
    <>
      <section className="project">
        <div className="project-container">
          <div
            className="project-title"
            data-aos="zoom-out-left"
            data-aos-duration="1200"
          >
            <Title title="Project" />
          </div>
          <div className="project-content">
            {projects.map((item) => (
              <div className="pro-box" key={item.id}>
                <div className="pro-img"></div>
                <div className="pro-overlay">
                  <h3 className="pro-title">{item.title}</h3>
                  <span className="pro-name">{item.name}</span>
                  <Visibility />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};
