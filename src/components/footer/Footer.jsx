import React from 'react';
import './Footer.css';
import { social } from '../../assets/db/dummydata';

export const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="footer-container">
          {social.map((icons) => (
              <i key={icons.id} className="social-icon">
                {icons.icon}
              </i>
          ))}
          <p className='copy'>@All Right Rescved 2022 | prod by 김건호</p>
          </div>
      </footer>
    </>
  );
};
