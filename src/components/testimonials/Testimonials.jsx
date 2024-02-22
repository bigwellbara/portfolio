import React, {useRef, useState} from 'react'
import './testimonials.css'
import TEAM from '../../assets/profile0.jpg'


import 'swiper/swiper-bundle.css'; // Import the complete Swiper styles

import SwiperCore, { Pagination ,Autoplay,Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';


SwiperCore.use([Pagination, Autoplay, Navigation]); // Include Autoplay in SwiperCore.use



const Testimonials = () => {

  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty('--progress', 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };

  const swiperRef = useRef(null);

  const handleMouseEnter = () => {
    if (swiperRef.current && swiperRef.current.autoplay) {
      swiperRef.current.autoplay.stop();
    }
  };

  const handleMouseLeave = () => {
    if (swiperRef.current && swiperRef.current.autoplay) {
      swiperRef.current.autoplay.start();
    }
  };

  return (
    <section id="testimonials">
      <h5>Review from my team</h5>
      <h2>Testimonials</h2>

      <Swiper
        className="container testimonials_container"
        spaceBetween={40}
        slidesPerView={1}
        autoplay={{
          delay: 3000,
          disableOnInteraction: true,
        }}
        allowTouchMove={false} // Prevent user interactions from stopping the autoplay
        navigation={true}
        pagination={{ clickable: true }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <SwiperSlide className="testimonial">
          <div className="team_avatar">
          <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" fill="currentColor" class="bi bi-person-circle" viewBox="0 0 16 16">
  <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0"/>
  <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1"/>
</svg>
          </div>
          <h5 className="team_name">Phiri Lesly</h5>
          <small className="team_review">
          Working with Baramasimbe Bigwell has been a game-changer for our team. His exceptional problem-solving skills and attention to detail 
          have elevated the quality and efficiency of our projects. Baramasimbe Bigwell 
          consistently demonstrates strong leadership and technical expertise, making him a valuable asset to any software development team.
          </small>
        </SwiperSlide>

        <SwiperSlide className="testimonial">
        <div className="team_avatar">
          <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" fill="currentColor" class="bi bi-person-circle" viewBox="0 0 16 16">
  <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0"/>
  <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1"/>
</svg>
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
          <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" fill="currentColor" class="bi bi-person-circle" viewBox="0 0 16 16">
  <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0"/>
  <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1"/>
</svg>
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
          <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" fill="currentColor" class="bi bi-person-circle" viewBox="0 0 16 16">
  <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0"/>
  <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1"/>
</svg>
          </div>
          <h5 className="team_name">Ndou Bismack</h5>
          <small className="team_review">
          Collaborating with Baramasimbe Bigwell has been an enriching experience. His deep understanding of software architecture and development methodologies 
          has been instrumental in achieving our project milestones. He brings a unique blend of 
          creativity, technical proficiency, and professionalism to every project, making him a standout performer in our software development ecosystem.
          </small>
          <div className="autoplay-progress">
    <svg viewBox="0 0 48 48" ref={progressCircle}>
      <circle cx="24" cy="24" r="20"></circle>
    </svg>
    <span ref={progressContent}></span>
  </div>
        </SwiperSlide>

      
      </Swiper>
    </section>
  );
};


export default Testimonials