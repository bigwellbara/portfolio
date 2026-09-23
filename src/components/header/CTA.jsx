import React from 'react'

const CV = 'BIGWELL_BARAMASIMBE_CV.pdf'

const CTA = () => {
    return (
        <div className="cta">
            <a href={CV} target="_blank" rel="noreferrer" className="btn">
                Open CV
            </a>
            <a href="#contact" className="btn btn-primary">Start a project</a>
            <a href="#portfolio" className="btn btn-ghost">See selected work</a>
        </div>
    )
}

export default CTA
