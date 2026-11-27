import React from 'react'
import './portfolio.css'
import IMG2 from '../../assets/2.png'
import IMG3 from '../../assets/3.png'
import IMG4 from '../../assets/4.png'

const featured = {
    title: 'Churn prediction platform',
    org: 'Machine learning · Live',
    summary: 'Predicts which telecom customers are about to leave and which retention offer would keep them, end to end: a tuned XGBoost model (ROC-AUC 0.85) tracked in MLflow, served by a FastAPI service in Docker, used through a Next.js dashboard, monitored with Prometheus and Grafana with data-drift detection, and shipped by CI/CD that tests the model, smoke tests production and rolls back automatically.',
    tags: ['Python', 'XGBoost', 'scikit-learn', 'FastAPI', 'Next.js', 'Docker', 'GitHub Actions', 'Prometheus'],
    links: [
        { label: 'Open the live demo', href: 'https://churn-platform-dusky.vercel.app', primary: true },
        { label: 'API docs', href: 'https://churn-api-latest-ofya.onrender.com/docs' },
        { label: 'Code', href: 'https://github.com/bigwellbara/churn-platform' },
    ],
}

const projects = [
    {
        title: 'Satellite land intelligence',
        org: 'Afrostain Farmtech',
        image: null,
        summary: 'A production platform that turns satellite data into soil and water maps, field weather, and crop monitoring. Includes a GIS boundary prototype and a chatbot that can call tools inside the product.',
        tags: ['GIS', 'Satellite data', 'Python', 'Cloud VPS'],
        href: null,
        cta: 'In production',
    },
    {
        title: 'University online applications',
        org: 'Reformed Church University',
        image: IMG2,
        summary: 'The public application system applicants use to join the university. Built in Laravel and wired to the institution’s other systems so admissions is not a pile of spreadsheets.',
        tags: ['Laravel', 'APIs', 'HTML / CSS / JS'],
        href: 'http://portal.rcu.ac.zw:7002/login',
        cta: 'Open the portal',
    },
    {
        title: 'Student portal',
        org: 'Reformed Church University',
        image: IMG4,
        summary: 'The day-to-day portal for students: a front end the campus can actually use, sitting on the same platform as the ERP and application system.',
        tags: ['Laravel', 'UX', 'Integrations'],
        href: 'http://portal.rcu.ac.zw:7003/login',
        cta: 'Open the portal',
    },
    {
        title: 'Institutional ERP',
        org: 'Reformed Church University',
        image: IMG3,
        summary: 'The internal ERP that ties academic operations together, with external APIs integrated so staff work in one place instead of five.',
        tags: ['Laravel', 'ERP', 'API integration'],
        href: null,
        cta: 'Institutional system',
    },
    {
        title: 'Property platform APIs',
        org: 'Property 365 Solutions',
        image: null,
        summary: 'ASP.NET Core REST and GraphQL APIs plus Azure worker services. Releases moved onto Azure Pipelines for Kubernetes and App Services, which cut the manual deploy mistakes.',
        tags: ['.NET Core', 'GraphQL', 'Azure', 'Kubernetes'],
        href: null,
        cta: 'Backend platform',
    },
]

const Portfolio = () => {
    return (
        <section id="portfolio">
            <h5>Proof, not promises</h5>
            <h2>Selected work</h2>
            <div className="container portfolio_container">
                <article className="portfolio_item is-featured">
                    <div className="portfolio_item-image is-text is-live" aria-hidden="true">
                        <div>
                            <span><i className="live-dot" /> Live demo</span>
                            <pre>{`POST /predict
{ "tenure": 1, "Contract": "Month-to-month", ... }

{ "churn_probability": 0.868,
  "churn_prediction": true,
  "risk_level": "high" }`}</pre>
                        </div>
                    </div>
                    <div className="portfolio_featured-body">
                        <p className="portfolio_org">{featured.org}</p>
                        <h3>{featured.title}</h3>
                        <p className="portfolio_summary">{featured.summary}</p>
                        <ul className="tags">
                            {featured.tags.map((tag) => (
                                <li key={tag}>{tag}</li>
                            ))}
                        </ul>
                        <div className="portfolio_item-cta">
                            {featured.links.map((link) => (
                                <a
                                    key={link.href}
                                    href={link.href}
                                    className={`btn ${link.primary ? 'btn-primary' : ''}`}
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    {link.label}
                                </a>
                            ))}
                        </div>
                    </div>
                </article>
                {projects.map((project) => (
                    <article className="portfolio_item" key={project.title}>
                        <div className={`portfolio_item-image ${project.image ? '' : 'is-text'}`}>
                            {project.image ? (
                                <img src={project.image} alt={project.title} />
                            ) : (
                                <div>
                                    <span>Shipped</span>
                                    <strong>{project.org}</strong>
                                </div>
                            )}
                        </div>
                        <p className="portfolio_org">{project.org}</p>
                        <h3>{project.title}</h3>
                        <p className="portfolio_summary">{project.summary}</p>
                        <ul className="tags">
                            {project.tags.map((tag) => (
                                <li key={tag}>{tag}</li>
                            ))}
                        </ul>
                        <div className="portfolio_item-cta">
                            {project.href ? (
                                <a href={project.href} className="btn" target="_blank" rel="noreferrer">
                                    {project.cta}
                                </a>
                            ) : (
                                <span className="btn btn-static">{project.cta}</span>
                            )}
                        </div>
                    </article>
                ))}
            </div>
        </section>
    )
}

export default Portfolio
