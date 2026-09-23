import React, { useState } from 'react'
import './nav.css'
import { AiOutlineHome, AiOutlineUser } from 'react-icons/ai'
import { BiBook, BiMessageSquareDetail } from 'react-icons/bi'
import { RiServiceLine } from 'react-icons/ri'
import { BsBriefcase } from 'react-icons/bs'

const links = [
    { href: '#home', label: 'Home', icon: <AiOutlineHome /> },
    { href: '#about', label: 'About', icon: <AiOutlineUser /> },
    { href: '#experience', label: 'Experience', icon: <BiBook /> },
    { href: '#services', label: 'Services', icon: <RiServiceLine /> },
    { href: '#portfolio', label: 'Work', icon: <BsBriefcase /> },
    { href: '#contact', label: 'Contact', icon: <BiMessageSquareDetail /> },
]

const Nav = () => {
    const [activeNav, setActiveNav] = useState('#home')

    return (
        <>
            <div className="topnav">
                <a href="#home" className="brand" onClick={() => setActiveNav('#home')}>Bigwell</a>
                <div className="topnav_links">
                    {links.slice(1, 5).map((link) => (
                        <a
                            key={link.href}
                            href={link.href}
                            onClick={() => setActiveNav(link.href)}
                            className={activeNav === link.href ? 'active' : ''}
                        >
                            {link.label}
                        </a>
                    ))}
                </div>
                <a href="#contact" className="btn btn-primary nav_hire" onClick={() => setActiveNav('#contact')}>
                    Hire me
                </a>
            </div>

            <nav>
                {links.map((link) => (
                    <a
                        key={link.href}
                        href={link.href}
                        onClick={() => setActiveNav(link.href)}
                        className={activeNav === link.href ? 'active' : ''}
                        aria-label={link.label}
                    >
                        {link.icon}
                    </a>
                ))}
            </nav>
        </>
    )
}

export default Nav
