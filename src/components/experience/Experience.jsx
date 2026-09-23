import React from 'react'
import './experience.css'
import { BsPatchCheckFill } from 'react-icons/bs'

const groups = [
    {
        title: 'Backend',
        items: ['C# & ASP.NET Core', 'PHP & Laravel', 'Python & Django', 'REST & GraphQL', 'Worker services & CQRS'],
    },
    {
        title: 'Frontend',
        items: ['React', 'JavaScript', 'HTML & CSS', 'UX / UI principles', 'Google UX certified'],
    },
    {
        title: 'Cloud & security',
        items: ['Azure & Contabo VPS', 'Docker & ArgoCD', 'CI/CD pipelines', 'Sophos Firewall & VLANs', 'Git, Postman, WSL'],
    },
]

const roles = [
    {
        when: 'Aug 2026 — Present',
        title: 'Senior Software Engineer',
        org: 'Earthasoft Technologies',
        points: [
            'Building a satellite land-intelligence product: soil and water mapping, field weather, and crop monitoring.',
            'Shipped a GIS prototype for field boundaries and a chatbot tool-calling runtime.',
            'Own deployment pipelines through to cloud VPS.',
        ],
    },
    {
        when: 'Apr 2023 — Jul 2026',
        title: 'Software Developer',
        org: 'Reformed Church University, Masvingo',
        points: [
            'Delivered the Laravel ERP, student portal, and online application system the university runs on.',
            'Integrated external APIs and built the interfaces staff and students use every day.',
            'Hardened the network with Sophos Firewall, VLANs, and SSL.',
        ],
    },
    {
        when: 'Jul 2021 — Jun 2022',
        title: 'Backend Software Developer',
        org: 'Property 365 Solutions, Johannesburg',
        points: [
            'Built ASP.NET Core REST and GraphQL APIs that sped up data retrieval.',
            'Ran Azure worker services on Service Bus and Queues for reliable async work.',
            'Automated releases with Azure Pipelines across Kubernetes and App Services.',
        ],
    },
]

const Experience = () => {
    return (
        <section id="experience">
            <h5>What I bring to a team</h5>
            <h2>Experience</h2>

            <div className="container">
                <div className="experience_container">
                    {groups.map((group) => (
                        <div key={group.title}>
                            <h3>{group.title}</h3>
                            <div className="experience_content">
                                {group.items.map((item) => (
                                    <article className="experience_details" key={item}>
                                        <BsPatchCheckFill className="experience_details-icon" />
                                        <h4>{item}</h4>
                                    </article>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                <div className="career">
                    <h3>Where I have shipped</h3>
                    {roles.map((role) => (
                        <article className="role" key={role.title}>
                            <p className="role_when">{role.when}</p>
                            <div>
                                <h4 className="role_title">{role.title}</h4>
                                <p className="role_org">{role.org}</p>
                                <ul>
                                    {role.points.map((point) => (
                                        <li key={point}>{point}</li>
                                    ))}
                                </ul>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Experience
