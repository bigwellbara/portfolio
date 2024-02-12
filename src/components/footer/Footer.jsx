import React from 'react'
import './footer.css'
import {FaFacebook} from 'react-icons/fa'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'

const Footer=()=>{
    return (
       <footer >
        <a href="#" className="footer_logo">BIGWELL</a>

        <ul className="permalinks">
            <li><a href="#">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#experience">Experience</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#portfolio">Portfolio</a></li>
            <li><a href="#testimonials">Testimonials</a></li>
            <li><a href="#contact">Contact</a></li>
        </ul>

        <div className="footer_socials">
            {/* <a href="https://facebook.com" target="_blank"><FaFacebook/></a> */}
            <a href="https://linkedin.com/in/bigwell" target="_blank"><BsLinkedin/></a>
        <a href="https://github.com/bigwellbara" target="_blank"><FaGithub/></a>

        </div>

        <div className="footer_copyright">
            <small> &copy; BIGWELL. All Rights Reserved</small>
        </div>
       </footer>

    )
}

export default Footer