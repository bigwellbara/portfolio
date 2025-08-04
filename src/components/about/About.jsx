import React from 'react'
import './about.css'
import AboutMe from '../../assets/about-me.jpg'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'


const About = () => {
    return (
        <section id="about">
          <h5> Get To Know</h5>
          <h2>About Me</h2>
          <div className="container about_container">
            <div className="about_me">
                <div className="about_me-image">
                    <img src={AboutMe}  alt="about-image"/>
                </div>
            </div>
            <div className="about_content">
                <div className="about_cards">
                    <article className="about_card">
                        <FaAward className="about_icon"/>
                        <h5>Experience</h5>
                        <small>3+ Years Working</small>
                    </article>
                    <article className="about_card">
                        <FiUsers className="about_icon"/>
                        <h5>Clients</h5>
                        <small>No Clients Now </small>
                    </article>
                    <article className="about_card">
                        <VscFolderLibrary className="about_icon"/>
                        <h5>Projects</h5>
                        <small>5+ Completed</small>
                    </article>
                  
                </div>
              <div className="about-me-section">
  <h2>About Me</h2>
  <ul className="about-me-list">
    <li>Full-Stack Developer skilled in <strong>C#, ASP.NET Core, and Laravel</strong>.</li>
    <li>Experienced in building scalable web apps and RESTful APIs.</li>
    <li>Strong in software design patterns and clean architecture.</li>
    <li>Hands-on with the full software development lifecycle.</li>
    <li>Collaborates well in Agile teams and delivers user-focused solutions.</li>
  </ul>
</div>

                    <a href="#contact" className="btn btn-primary">Let's Talk</a>

            </div>

          </div>



            </section>
    )
}

export default About