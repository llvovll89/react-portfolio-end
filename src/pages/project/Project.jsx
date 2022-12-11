import React from 'react';
import { Title } from '../../components/title/Title';
import { projects } from '../../assets/db/dummydata';
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined"
import './Project.css';

export const Project = () => {

  return (
    <>
      <article className="project">
        <div className="project-container">
          <div
            className="project-title"
            data-aos="zoom-out-left"
            data-aos-duration="1200"
          >
            <Title title="Project" subtitle="React-project" />
          </div>
          <div className="project-content">
            {projects.map((item) => (
              <div className="pro-box" key={item.id} data-aos='fade-up'>
                <div className="pro-img">
                  <img src={item.cover} alt=",,," />
                </div>
                <div className="pro-overlay">
                  <h3 className="pro-title">{item.title}</h3>
                  <span className="pro-name">{item.name}</span>
                  <VisibilityOutlinedIcon />
                </div>
              </div>
            ))}
          </div>
        </div>
      </article>
    </>
  );
};
