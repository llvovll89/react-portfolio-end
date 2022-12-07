import React from 'react';
import { useState } from 'react';
import { v4 as uuid } from 'uuid';
import { Link } from 'react-router-dom';
import { Menu } from '@mui/icons-material';
import { navlinks } from '../../assets/db/dummydata';
import './Header.css';
import { useEffect } from 'react';

export const Header = () => {
  const [mobile, setMobile] = useState(false);

  return (
    <>
      <header className="header">
        <div className="header-container container">
          <div className="logo" data-aos="fade-up" data-aos-duration="1200">
            <span className="logo-title">FRONT-END</span>
          </div>
          <div className={mobile ? 'hide-navbar' : 'navbar'}>
            {navlinks.map((item) => (
              <li className="list active" key={uuid()}>
                <Link to={item.url}>
                  <span className="icon">{item.icons}</span>
                  <span className="nav-text">{item.navItem}</span>
                </Link>
              </li>
            ))}
          </div>

          <button
            className="menu-btn"
            data-aos="zoom-in"
            data-aos-duration="1100"
            data-aos-delay="1200"
            onClick={() => setMobile(!mobile)}
          >
            <Menu className="toggle" />
          </button>
        </div>
      </header>
    </>
  );
};
