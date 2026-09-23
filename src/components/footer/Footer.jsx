import React from 'react'
import './footer.css'
import { BsLinkedin } from 'react-icons/bs'
import { FaGithub } from 'react-icons/fa'
import CV from '../../assets/BIGWELL_BARAMASIMBE_CV.pdf'

const Footer = () => {
    return (
        <footer>
            <a href="#home" className="footer_logo">Baramasimbe Bigwell</a>
            <p className="footer_pitch">Senior full-stack engineer. Secure APIs, platforms, and cloud delivery.</p>

            <ul className="permalinks">
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#experience">Experience</a></li>
                <li><a href="#services">Services</a></li>
                <li><a href="#portfolio">Work</a></li>
                <li><a href="#testimonials">Testimonials</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>

            <div className="footer_actions">
                <a href={CV} download="BIGWELL_BARAMASIMBE_CV.pdf" className="btn">Download CV</a>
                <a href="#contact" className="btn btn-primary">Hire me</a>
            </div>

            <div className="footer_socials">
                <a href="https://www.linkedin.com/in/bigwell" target="_blank" rel="noreferrer" aria-label="LinkedIn"><BsLinkedin /></a>
                <a href="https://github.com/bigwellbara" target="_blank" rel="noreferrer" aria-label="GitHub"><FaGithub /></a>
            </div>

            <div className="footer_copyright">
                <small>&copy; {new Date().getFullYear()} Baramasimbe Bigwell. Harare, Zimbabwe.</small>
            </div>
        </footer>
    )
}

export default Footer
