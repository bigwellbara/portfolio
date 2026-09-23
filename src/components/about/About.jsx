import React from 'react'
import './about.css'
import AboutMe from '../../assets/me.png'
import { FaAward, FaShieldAlt } from 'react-icons/fa'
import { HiOutlineCloud } from 'react-icons/hi'
import { MdOutlineSchool } from 'react-icons/md'

const About = () => {
    return (
        <section id="about">
            <h5>Why teams hire me</h5>
            <h2>About</h2>
            <div className="container about_container">
                <div className="about_me">
                    <div className="about_me-image">
                        <img src={AboutMe} alt="Baramasimbe Bigwell" />
                    </div>
                </div>
                <div className="about_content">
                    <div className="about_cards">
                        <article className="about_card">
                            <FaAward className="about_icon" />
                            <h5>Experience</h5>
                            <small>4+ years, now senior</small>
                        </article>
                        <article className="about_card">
                            <HiOutlineCloud className="about_icon" />
                            <h5>Cloud delivery</h5>
                            <small>Azure, VPS, ArgoCD</small>
                        </article>
                        <article className="about_card">
                            <FaShieldAlt className="about_icon" />
                            <h5>Security</h5>
                            <small>Firewalls, VLANs, SSL</small>
                        </article>
                        <article className="about_card">
                            <MdOutlineSchool className="about_icon" />
                            <h5>Credentials</h5>
                            <small>BSc CS · Google UX</small>
                        </article>
                    </div>
                    <p>
                        I take a product from a blank repository to something an organisation can run.
                        That means the API, the interface, the deployment, and the security around it.
                        At Earthasoft I am building a satellite data platform for soil and water mapping,
                        field-level weather, and crop monitoring — including a GIS prototype and a chatbot
                        tool-calling runtime. Before that I delivered the ERP, student portal, and online
                        application system for Reformed Church University, and Azure REST and GraphQL
                        services for Property 365 in Johannesburg.
                    </p>
                    <p>
                        I work in Agile teams, automate the release path, and stay close to the people
                        who will use what I ship. Bachelor of Computer Science, Class 2.1, Great Zimbabwe
                        University, with the Vice Chancellor’s Award. Google UX Design certified.
                    </p>
                    <a href="#contact" className="btn btn-primary">Let’s talk about the next build</a>
                </div>
            </div>
        </section>
    )
}

export default About
