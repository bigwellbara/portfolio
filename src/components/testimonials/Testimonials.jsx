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
          Working with Baramasimbe Bigwell has been a game-changer for our team. His exceptional problem-solving skills and attention to detail 
          have elevated the quality and efficiency of our projects. Baramasimbe Bigwell 
          consistently demonstrates strong leadership and technical expertise, making hime a valuable asset to any software development team.
          </small>
        </SwiperSlide>

        <SwiperSlide className="testimonial">
          <div className="team_avatar">
            <img src={TEAM} alt="" />
          </div>
          <h5 className="team_name">Nyamwena Elister</h5>
          <small className="team_review">
          Baramasimbe Bigwell is a true team player with a remarkable ability to understand complex technical challenges and deliver innovative solutions.
           His passion for coding and commitment to excellence have inspired our entire development team.
           He is not just a colleague but a mentor and a driving force behind our successful project deliveries.
          </small>
        </SwiperSlide>

        <SwiperSlide className="testimonial">
          <div className="team_avatar">
            <img src={TEAM} alt="" />
          </div>
          <h5 className="team_name">Munemo Edmore</h5>
          <small className="team_review">
          As a software developer, Baramasimbe Bigwell has consistently impressed us with his ability to tackle complex coding challenges with precision and creativity. 
          His collaborative nature and expertise in multiple programming languages have significantly influenced the success of our team's projects. 
          His dedication to producing high-quality code and his supportive approach make him a must-have team member for any software development endeavor.
          </small>
        </SwiperSlide>
        <SwiperSlide className="testimonial">
          <div className="team_avatar">
            <img src={TEAM} alt="" />
          </div>
          <h5 className="team_name">Ndou Bismack</h5>
          <small className="team_review">
          Collaborating with Baramasimbe Bigwell has been an enriching experience. His deep understanding of software architecture and development methodologies 
          has been instrumental in achieving our project milestones. He brings a unique blend of 
          creativity, technical proficiency, and professionalism to every project, making him a standout performer in our software development ecosystem.
          </small>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};


export default Testimonials