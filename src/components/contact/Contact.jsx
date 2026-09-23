import React, { useRef, useState } from 'react'
import './contact.css'
import { MdOutlineEmail } from 'react-icons/md'
import { BsWhatsapp, BsTelephone } from 'react-icons/bs'
import { FaMapMarkerAlt } from 'react-icons/fa'
import emailjs from 'emailjs-com'

const Contact = () => {
    const form = useRef()
    const [status, setStatus] = useState('')

    const sendEmail = (e) => {
        e.preventDefault()
        setStatus('sending')

        emailjs
            .sendForm('service_9a65kt8', 'template_14wg7i7', form.current, 'b3W_whgvipyr5tjgb')
            .then(() => {
                setStatus('sent')
                form.current.reset()
            })
            .catch(() => {
                setStatus('error')
            })
    }

    return (
        <section id="contact">
            <h5>Harare · remote-friendly</h5>
            <h2>Let’s build it</h2>
            <p className="contact_intro">
                Hiring for a senior full-stack role, or need an API, portal, or cloud pipeline shipped?
                Write directly. I read every message.
            </p>

            <div className="container contact_container">
                <div className="contact_options">
                    <article className="contact_option">
                        <MdOutlineEmail className="contact_option-icon" />
                        <h4>Email</h4>
                        <h5>bigwellbara@gmail.com</h5>
                        <a href="mailto:bigwellbara@gmail.com">Send a message</a>
                    </article>
                    <article className="contact_option">
                        <BsTelephone className="contact_option-icon" />
                        <h4>Phone</h4>
                        <h5>
                            <a href="tel:+263779787091">+263 779 787 091</a>
                            <br />
                            <a href="tel:+263775726592">+263 775 726 592</a>
                        </h5>
                    </article>
                    <article className="contact_option">
                        <BsWhatsapp className="contact_option-icon" />
                        <h4>WhatsApp</h4>
                        <h5>Same-day reply</h5>
                        <a href="https://api.whatsapp.com/send?phone=263779787091" target="_blank" rel="noreferrer">
                            Start a chat
                        </a>
                    </article>
                    <article className="contact_option">
                        <FaMapMarkerAlt className="contact_option-icon" />
                        <h4>Based in</h4>
                        <h5>Harare, Zimbabwe</h5>
                        <a href="https://www.linkedin.com/in/bigwell" target="_blank" rel="noreferrer">
                            LinkedIn profile
                        </a>
                    </article>
                </div>
                <form ref={form} onSubmit={sendEmail}>
                    <input type="text" name="name" placeholder="Your full name" required />
                    <input type="email" name="email" placeholder="Your email" required />
                    <textarea name="message" rows="7" placeholder="What do you need built?" required />
                    <button type="submit" className="btn btn-primary" disabled={status === 'sending'}>
                        {status === 'sending' ? 'Sending…' : 'Send message'}
                    </button>
                    {status === 'sent' && <p className="form_note">Message sent. I’ll get back to you.</p>}
                    {status === 'error' && <p className="form_note form_note-error">That didn’t send. Email bigwellbara@gmail.com directly.</p>}
                </form>
            </div>
        </section>
    )
}

export default Contact
