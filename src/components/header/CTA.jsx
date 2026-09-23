import React from 'react'
import CV from '../../assets/BIGWELL_BARAMASIMBE_CV.pdf'

const CTA = () => {
    return (
        <div className="cta">
            <a href={CV} download="BIGWELL_BARAMASIMBE_CV.pdf" className="btn">
                Download CV
            </a>
            <a href="#contact" className="btn btn-primary">Start a project</a>
            <a href="#portfolio" className="btn btn-ghost">See selected work</a>
        </div>
    )
}

export default CTA
