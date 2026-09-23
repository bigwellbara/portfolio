import React from 'react'
import './services.css'
import { BiCheck } from 'react-icons/bi'

const offers = [
    {
        title: 'Product platforms',
        lead: 'The system your organisation actually runs on.',
        items: [
            'ERPs, portals, and application workflows',
            'React and Laravel interfaces people can use',
            'External API integrations without the glue-code mess',
            'Handover your team can maintain',
        ],
    },
    {
        title: 'APIs & cloud',
        lead: 'Services that stay up when the product grows.',
        items: [
            'REST and GraphQL on ASP.NET Core',
            'Worker services, queues, and CQRS',
            'Azure, Kubernetes, Contabo VPS, ArgoCD',
            'CI/CD so releases stop being a manual event',
        ],
    },
    {
        title: 'Secure delivery',
        lead: 'Software and network designed together.',
        items: [
            'Sophos Firewall, VLANs, and SSL',
            'Architecture reviews before the rewrite',
            'Satellite, GIS, and weather data products',
            'Agile delivery with a written trail',
        ],
    },
]

const Services = () => {
    return (
        <section id="services">
            <h5>How I can help</h5>
            <h2>What you get</h2>
            <div className="container services_container">
                {offers.map((offer) => (
                    <article className="service" key={offer.title}>
                        <div className="service_head">
                            <h3>{offer.title}</h3>
                            <p>{offer.lead}</p>
                        </div>
                        <ul className="service_list">
                            {offer.items.map((item) => (
                                <li key={item}>
                                    <BiCheck className="service_list-icon" />
                                    <p>{item}</p>
                                </li>
                            ))}
                        </ul>
                    </article>
                ))}
            </div>
        </section>
    )
}

export default Services
