import React from 'react'
import './services.css'
import {BiCheck} from 'react-icons/bi'

const Services =()=>{
    return (
      
        <section id="services">
            <h5>What I Offer</h5>
            <h2>Services</h2>
           
            <container className="services_container">
                <article className="service">
                    <div className="service_head">
                        <h3>UI/UX Design</h3>
                    </div>
                    <ul className="service_list">
                        <li>
                            <BiCheck className='service_list-icon' />
                            <p>
                            User research and Information architecture
                            </p>
                        </li>
                        <li>
                            <BiCheck className='service_list-icon' />
                            <p>
                            User testing and training
                            </p>
                        </li>
                        <li>
                            <BiCheck className='service_list-icon' />
                            <p>
                            Wireframing and Prototyping
                            </p>
                        </li>
                        <li>
                            <BiCheck className='service_list-icon' />
                            <p>
                            Visual and Interaction design
                            </p>
                        </li>
                        <li>
                            <BiCheck className='service_list-icon' />
                            <p>
                            Usability evaluation and User experience optimization
                            </p>
                        </li>


                    </ul>
                </article>

                
                <article className="service">
                    <div className="service_head">
                        <h3>Web Development</h3>
                    </div>
                    <ul className="service_list">
                        <li>
                            <BiCheck className='service_list-icon' />
                            <p>
                            Front-End Development: Building the client-side of the website using HTML, CSS, and JavaScript for a responsive and interactive user interface.
                            </p>
                        </li>
                        <li>
                            <BiCheck className='service_list-icon' />
                            <p>
                            Back-End Development: Creating the server-side of the website, including database management and server-side programming languages.
                            </p>
                        </li>
                        <li>
                            <BiCheck className='service_list-icon' />
                            <p>
                            Content Management System (CMS) Integration: Customizing and integrating CMS platforms for easy content management.
                            </p>
                        </li>
                        <li>
                            <BiCheck className='service_list-icon' />
                            <p>
                            Testing and Quality Assurance: Conducting thorough testing to identify and fix any bugs or performance issues.
                            </p>
                        </li>
                        <li>
                            <BiCheck className='service_list-icon' />
                            <p>
                            Maintenance and Support: Providing ongoing maintenance, updates, and support services for the website.
                            </p>
                        </li>
                       


                    </ul>
                </article>

                <article className="service">
                    <div className="service_head">
                        <h3>System Design</h3>
                    </div>
                    <ul className="service_list">
                        <li>
                            <BiCheck className='service_list-icon' />
                            <p>
                            Requirement Analysis: Understanding client and business needs.
                            </p>
                        </li>
                        <li>
                            <BiCheck className='service_list-icon' />
                            <p>
                            System Architecture Design: Creating the high-level structure of the system.
                            </p>
                        </li>
                        <li>
                            <BiCheck className='service_list-icon' />
                            <p>
                            Hardware and Software Design: Selecting components and developing software architecture.
                            </p>
                        </li>
                        <li>
                            <BiCheck className='service_list-icon' />
                            <p>
                            Database and Interface Design: Creating the database structure and designing user interactions.
                            </p>
                        </li>
                        <li>
                            <BiCheck className='service_list-icon' />
                            <p>
                            Security and Network Design: Implementing security features and planning network infrastructure.
                            </p>
                        </li>

                        <li>
                            <BiCheck className='service_list-icon' />
                            <p>
                            Prototyping and Testing: Building prototypes and conducting thorough testing.
                            </p>
                        </li>
                        <li>
                            <BiCheck className='service_list-icon' />
                            <p>
                            Documentation: Creating comprehensive system specifications and technical documentation.
                            </p>
                        </li>
                    
                    
                    </ul>
                </article>
            </container>
        </section>
    )
}

export default Services