import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/me.png'
import HeaderSocials from './HeaderSocials'

const stack = ['C# / .NET Core', 'Laravel', 'React', 'GraphQL', 'Azure', 'Docker', 'ArgoCD', 'Python', 'CQRS']

const Header = () => {
    return (
        <header id="home">
            <div className="container header_container">
                <div className="header_copy">
                    <p className="eyebrow header_eyebrow">
                        <span className="live_dot" />
                        Senior Software Engineer · Harare
                    </p>
                    <h1>Baramasimbe Bigwell</h1>
                    <p className="headline">
                        I build secure systems that teams can ship, scale, and trust.
                    </p>
                    <p className="lede">
                        Full-stack engineer with 4+ years across .NET Core, Laravel, React, and Azure.
                        Currently leading product engineering on satellite land intelligence at Earthasoft —
                        soil, water, weather, and the pipelines that keep it live.
                    </p>
                    <CTA />
                    <ul className="proof">
                        <li>
                            <strong>4+</strong>
                            <span>years shipping production software</span>
                        </li>
                        <li>
                            <strong>6+</strong>
                            <span>Azure APIs deployed with zero downtime</span>
                        </li>
                        <li>
                            <strong>2.1</strong>
                            <span>Computer Science · Vice Chancellor’s Award</span>
                        </li>
                    </ul>
                </div>

                <div className="header_visual">
                    <div className="me">
                        <img src={ME} alt="Baramasimbe Bigwell" />
                    </div>
                    <div className="floating_card">
                        <span>Now</span>
                        <p>Senior Software Engineer, Earthasoft Technologies</p>
                    </div>
                    <HeaderSocials />
                </div>
            </div>

            <div className="techstrip" aria-label="Core technologies">
                <div className="techstrip_track">
                    {[...stack, ...stack].map((item, index) => (
                        <span key={`${item}-${index}`}>{item}</span>
                    ))}
                </div>
            </div>
        </header>
    )
}

export default Header
