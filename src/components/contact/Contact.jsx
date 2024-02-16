import React from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {RiMessengerLine} from 'react-icons/ri'
import {BsWhatsapp} from 'react-icons/bs'
import { useRef } from 'react';
import emailjs from 'emailjs-com'


const Contact = ()=>{
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_9a65kt8', 'template_14wg7i7', form.current, 'b3W_whgvipyr5tjgb')
          e.target.reset()
        //   B03200575...
       
      };
    return(
        <section id="contact">
            <h5>Get In Touch</h5>
            <h2>Contact Me</h2>

            <div className="container contact_container">
                <div className="contact_options">
                    <article className="contact_option">
                        <MdOutlineEmail className="contact_option-icon"/>
                        <h4>Email</h4>
                        <h5>bigwellbara@gmail.com</h5>
                        <a href="mailto:bigwellbara@gmail.com" target="_blank">Send a message</a>
                    </article>
                    <article className="contact_option">
                        <RiMessengerLine className="contact_option-icon"/>
                        <h4>Messenger</h4>
                        <h5>bigwellbara</h5>
                        <a href="https://m.me/bigwellbara" target="_blank">Send a message</a>
                    </article>
                    <article className="contact_option">
                        <BsWhatsapp className="contact_option-icon"/>
                        <h4>Whatsapp</h4>
                        {/* <h5>+263 779 787 091</h5> */}
                        <a href="https://api.whatsapp.com/send?phone+263779787091" target="_blank">Send a message</a>
                    </article>
                </div>
                <form ref={form} onSubmit={sendEmail}>
                    <input type="text" name="name" placeholder="Your Full Name" required  />
                    <input type="text" name="email" placeholder="Your Email" required  />
                    <textarea name="message" id="" cols="" rows="7" placeholder="Your Message" required></textarea>
                    <button type="submit" className="btn btn-primary">Send Message</button>

                </form>
            </div>
        </section>
    )
}

export default Contact