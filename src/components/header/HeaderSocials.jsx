import React from 'react'
import { BsLinkedin } from 'react-icons/bs'
import { FaGithub } from 'react-icons/fa'
import { MdOutlineEmail } from 'react-icons/md'

const HeaderSocials = () => {
    return (
        <div className="header_socials">
            <a href="https://www.linkedin.com/in/bigwell" target="_blank" rel="noreferrer" aria-label="LinkedIn">
                <BsLinkedin />
            </a>
            <a href="https://github.com/bigwellbara" target="_blank" rel="noreferrer" aria-label="GitHub">
                <FaGithub />
            </a>
            <a href="mailto:bigwellbara@gmail.com" aria-label="Email">
                <MdOutlineEmail />
            </a>
        </div>
    )
}

export default HeaderSocials
