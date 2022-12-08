import React from 'react';
import { Title } from '../../components/title/Title';
import './About.css';
import { about } from '../../assets/db/dummydata';
// slider - about
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// import AboutImg from '../../assets/images/about/about.png'

export const About = () => {
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <>
      <section className="about">
        <div className="about-title" data-aos="fade-out" data-aos-duration="1200">
          <Title title="About" subtitle="< Introduce >" />
        </div>
        <Slider {...settings}>
          {about.map((item) => (
            <div
              className="about-container"
              data-aos="zoom-out"
              data-aos-delay="500"
              data-aos-duration="1200"
              key={item.id}
            >
              <div className="about-img">
                <img src={item.imgurl} alt=".." />
              </div>

              <p className="about-desc">{item.desc}</p>

              <p className="about-sub-text">{item.subtext}</p>
            </div>
          ))}
        </Slider>
      </section>
    </>
  );
};
