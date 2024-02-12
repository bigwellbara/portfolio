import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'


const HeaderSocials =()=>{
    return (
       <div className="header_socials">
          <a href="https://linkedin.com/in/bigwell" target="_blank"><BsLinkedin/></a>
        <a href="https://github.com/bigwellbara" target="_blank"><FaGithub/></a>
       </div>
    )
}

export default HeaderSocials