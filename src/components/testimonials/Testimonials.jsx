import React from 'react'
import './testimonials.css'
import { BsQuote } from 'react-icons/bs'

const reviews = [
    {
        name: 'Munemo Edmore',
        role: 'Tech Lead, Earthasoft Technologies',
        text: 'As a software developer, Baramasimbe Bigwell has consistently impressed us with his ability to tackle complex coding challenges with precision and creativity. His collaborative nature and expertise in multiple programming languages have significantly influenced the success of our team’s projects.',
    },
    {
        name: 'Nyamwena Elister',
        role: 'ICTS Systems Manager, Reformed Church University',
        text: 'Baramasimbe Bigwell is a true team player with a remarkable ability to understand complex technical challenges and deliver innovative solutions. His passion for coding and commitment to excellence have inspired our entire development team.',
    },
    {
        name: 'Phiri Lesly',
        role: 'Applications Programmer, ZIMSEC',
        text: 'Working with Baramasimbe Bigwell has been a game-changer for our team. His exceptional problem-solving skills and attention to detail have elevated the quality and efficiency of our projects. He consistently demonstrates strong leadership and technical expertise.',
    },
    {
        name: 'Ndou Bismack',
        role: 'Collaborator',
        text: 'Collaborating with Baramasimbe Bigwell has been an enriching experience. His deep understanding of software architecture and development methodologies has been instrumental in achieving our project milestones.',
    },
]

const Testimonials = () => {
    return (
        <section id="testimonials">
            <h5>From people who have shipped with me</h5>
            <h2>Testimonials</h2>
            <div className="container testimonials_container">
                {reviews.map((review) => (
                    <article className="testimonial" key={review.name}>
                        <BsQuote className="quote_icon" />
                        <p className="team_review">{review.text}</p>
                        <h5 className="team_name">{review.name}</h5>
                        <small>{review.role}</small>
                    </article>
                ))}
            </div>
        </section>
    )
}

export default Testimonials
