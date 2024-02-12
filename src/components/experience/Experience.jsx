import React from 'react'
import './experience.css'
import {BsPatchCheckFill} from 'react-icons/bs'

const Experience = ()=>{
    return (
       
        <section id="experience">
            <h5>What Skils I Have</h5>
            <h2>My Experience</h2>
            <div className="container experience_container">
                <div className="experience_frontend">
                <h3>Frontend Development</h3>
                <div className="experience_content">
                    <article className="experience_details">
                        <BsPatchCheckFill className="experience_details-icon"/>
                        <div>
                        <h4>HTML</h4>
                        <small className="text-light">Experienced</small>
                        </div>
                    </article>
                    <article className="experience_details">
                        <BsPatchCheckFill className="experience_details-icon"/>
                        <div>
                        <h4>CSS</h4>
                        <small className="text-light">Intermediate</small>
                        </div>
                    </article>

                    <article className="experience_details">
                        <BsPatchCheckFill className="experience_details-icon"/>
                        <div>
                        <h4>Tailwind</h4>
                        <small className="text-light">Intermediate</small>
                        </div>
                    </article>
                    <article className="experience_details">
                        <BsPatchCheckFill className="experience_details-icon"/>
                        <div>
                        <h4>Boostrap</h4>
                        <small className="text-light">Experienced</small>
                        </div>
                    </article>

                    <article className="experience_details">
                        <BsPatchCheckFill className="experience_details-icon"/>
                        <div>
                        <h4>Javascript</h4>
                        <small className="text-light">Experienced</small>
                        </div>
                    </article>
                    <article className="experience_details">
                        <BsPatchCheckFill className="experience_details-icon"/>
                        <div>
                        <h4>JQUERY</h4>
                        <small className="text-light">Intermediate</small>
                        </div>
                    </article>
                    <article className="experience_details">
                        <BsPatchCheckFill className="experience_details-icon"/>
                        <div>
                        <h4>GORM</h4>
                        <small className="text-light">Intermediate</small>
                        </div>
                    </article>
                    <article className="experience_details">
                        <BsPatchCheckFill className="experience_details-icon"/>
                        <div>
                        <h4>ReactJS</h4>
                        <small className="text-light">Experienced</small>
                        </div>
                    </article>
                    <article className="experience_details">
                        <BsPatchCheckFill className="experience_details-icon" />
                        <div>
                        <h4>Laravel</h4>
                        <small className="text-light">Experienced</small>
                        </div>
                    </article>
                    <article className="experience_details">
                        <BsPatchCheckFill className="experience_details-icon"/>
                        <div>
                        <h4>UX/UI Design</h4>
                        <small className="text-light">Experienced</small>
                        </div>
                    </article>
                </div>
                </div>
                <div className="experience_backend">
                <h3>Backend Development</h3>
                <div className="experience_content">
                    <article className="experience_details">
                    <BsPatchCheckFill className="experience_details-icon"/>
                    <div>
                        <h4>C#</h4>
                        <small className="text-light">Experienced</small>
                        </div>
                    </article>
                    <article className="experience_details">
                    <BsPatchCheckFill className="experience_details-icon"/>
                    <div>
                        <h4>PHP</h4>
                        <small className="text-light">Intermediate</small>
                        </div>
                    </article>

                    <article className="experience_details">
                    <BsPatchCheckFill className="experience_details-icon"/>
                    <div>
                        <h4>Golang</h4>
                        <small className="text-light">Intermediate</small>
                        </div>
                    </article>
                    <article className="experience_details">
                    <BsPatchCheckFill className="experience_details-icon"/>
                    <div>
                        <h4>REST API</h4>
                        <small className="text-light">Experienced</small>
                        </div>
                    </article>

                    <article className="experience_details">
                    <BsPatchCheckFill className="experience_details-icon"/>
                    <div>
                        <h4>GraphQL API</h4>
                        <small className="text-light">Experienced</small>
                        </div>
                    </article>
                    <article className="experience_details">
                    <BsPatchCheckFill className="experience_details-icon"/>
                    <div>
                        <h4>Background Services</h4>
                        <small className="text-light">Intermediate</small>
                        </div>
                    </article>
                    <article className="experience_details">
                    <BsPatchCheckFill className="experience_details-icon"/>
                    <div>
                        <h4>Microservices Architecture</h4>
                        <small className="text-light">Experienced</small>
                        </div>
                    </article>
                    <article className="experience_details">
                    <BsPatchCheckFill className="experience_details-icon"/>
                    <div>
                        <h4>Design Patterns</h4>
                        <small className="text-light">Experienced</small>
                        </div>
                    </article>
                    <article className="experience_details">
                    <BsPatchCheckFill className="experience_details-icon"/>
                    <div>
                        <h4>Logging</h4>
                        <small className="text-light">Experienced</small>
                        </div>
                    </article>
                    <article className="experience_details">
                    <BsPatchCheckFill className="experience_details-icon"/>
                    <div>
                        <h4>MongoDB</h4>
                        <small className="text-light">Experienced</small>
                        </div>
                    </article>
                    <article className="experience_details">
                    <BsPatchCheckFill className="experience_details-icon"/>
                    <div>
                        <h4>Node js</h4>
                        <small className="text-light">Experienced</small>
                        </div>
                    </article>
                    <article className="experience_details">
                    <BsPatchCheckFill className="experience_details-icon"/>
                    <div>
                   
                        <h4>Git</h4>
                        <small className="text-light">Experienced</small>
                        </div>
                    </article>
                </div>
                </div>
            </div>

        </section>
    )
}

export default Experience