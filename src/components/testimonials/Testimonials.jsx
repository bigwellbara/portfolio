import React from 'react'
import './testimonials.css'
import TEAM from '../../assets/profile0.jpg'


import 'swiper/swiper-bundle.css'; // Import the complete Swiper styles

import SwiperCore, { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

SwiperCore.use([Pagination]);


const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Review from my team</h5>
      <h2>Testimonials</h2>

      <Swiper
        className="container testimonials_container"
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        <SwiperSlide className="testimonial">
          <div className="team_avatar">
            <img src={TEAM} alt="" />
          </div>
          <h5 className="team_name">Phiri Lesly</h5>
          <small className="team_review">
            He is an able programmer. I worked well with him developing the ERP. He was mainly involved in the backend logics.
          </small>
        </SwiperSlide>

        <SwiperSlide className="testimonial">
          <div className="team_avatar">
            <img src={TEAM} alt="" />
          </div>
          <h5 className="team_name">Nyamwena Elister</h5>
          <small className="team_review">
            He is an able programmer. I worked well with him developing the ERP. He was mainly involved in the backend logics.
          </small>
        </SwiperSlide>

        <SwiperSlide className="testimonial">
          <div className="team_avatar">
            <img src={TEAM} alt="" />
          </div>
          <h5 className="team_name">Munemo Edmore</h5>
          <small className="team_review">
            He is an able programmer. I worked well with him developing the ERP. He was mainly involved in the backend logics.
          </small>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};


export default Testimonials