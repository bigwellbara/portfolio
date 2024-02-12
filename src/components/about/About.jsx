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
                        <small>5+ Worldwide</small>
                    </article>
                    <article className="about_card">
                        <VscFolderLibrary className="about_icon"/>
                        <h5>Projects</h5>
                        <small>8+ Completed</small>
                    </article>
                  
                </div>
                <p>
                    I am a proactive and skilled Software Developer, specializing in hands-on development, 
                    design, and rigorous testing of software across diverse platforms. My professional
                     journey has provided me with practical exposure to the entire software development 
                     lifecycle. Collaborating seamlessly within cross-functional teams, I have contributed to 
                     the creation of innovative applications that captivate users and drive tangible business
                      outcomes. My proficiency extends to adhering to design standards and tailoring solutions
                       to user preferences. My portfolio showcases a spectrum of projects, from initial ideation
                        to polished execution. My commitment to excellence is evident in my coding expertise, 
                    which I consistently refine to stay attuned to the dynamic landscape of technological advancements.
                     
                    </p>
                    <a href="#contact" className="btn btn-primary">Let's Talk</a>

            </div>

          </div>



            </section>
    )
}

export default About