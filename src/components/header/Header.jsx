import React from 'react';
import { useState } from 'react';
import { v4 as uuid } from 'uuid';
import { Link } from 'react-router-dom';
import { Menu } from '@mui/icons-material';
import { navlinks } from '../../assets/db/dummydata';
import './Header.css';

export const Header = () => {
  const [mobile, setMobile] = useState(false);
  const handelTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <header className="header">
        <div
          className="header-container container"
        >
          <div className="logo">
            <span className="logo-title" onClick={handelTop}>
              FRONT-END
            </span>
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
            onClick={() => setMobile(!mobile)}
          >
            <Menu className="toggle" />
          </button>
        </div>
      </header>
    </>
  );
};
