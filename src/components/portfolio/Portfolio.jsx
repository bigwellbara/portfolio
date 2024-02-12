import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/1.png'
import IMG2 from '../../assets/2.jpg'
import IMG3 from '../../assets/3.png'
import IMG4 from '../../assets/4.png'
import IMG5 from '../../assets/5.jpg'

// const data = [
//     {
//         id:1,
//         image:IMG1,
//         title:'personal website',
//         github:'https://github.com',
//         demo:'https://github.com'

//     }
// ]

const Portfolio =()=>{
    return (
      
        <section id="portfolio">

            <h5>My Recent Work</h5>
            <h2>Portfolio</h2>

            <div className="container portfolio_container">
                <article className="portfolio_item">
                    <div className="portfolio_item-image">
                    <img src={IMG1} alt="" />
                    </div>
                    <h3>This is my personal website</h3>
                    <div className="portfolio_item-cta">
                    <a href="https://github.com" className="btn" target='_blank'>Portfolio Website</a>
                    <a href="https://github.com" className="btn btn-primary" target='_blank'>Live Demo</a>
                    </div>
                </article>

                <article className="portfolio_item">
                    <div className="portfolio_item-image">
                    <img src={IMG2} alt="" />
                    </div>
                    <h3>This is  an online application for RCU</h3>
                    <div className="portfolio_item-cta">
                    <a href="https://github.com" className="btn" target='_blank'>RCU Online Application</a>
                    <a href="https://github.com" className="btn btn-primary" target='_blank'>Live Demo</a>
                    </div>
                </article>

                <article className="portfolio_item">
                    <div className="portfolio_item-image">
                    <img src={IMG3} alt="" />
                    </div>
                    <h3>This is  an ERP for RCU</h3>
                    <div className="portfolio_item-cta">
                    <a href="https://github.com" className="btn" target='_blank'>RCU ERP</a>
                    <a href="https://github.com" className="btn btn-primary" target='_blank'>Live Demo</a>
                    </div>
                </article>

                <article className="portfolio_item">
                    <div className="portfolio_item-image">
                    <img src={IMG4} alt="" />
                    </div>
                    <h3>This is  a student portal for RCU</h3>
                    <div className="portfolio_item-cta">
                    <a href="https://github.com" className="btn" target='_blank'>RCU Student Portal</a>
                    <a href="https://github.com" className="btn btn-primary" target='_blank'>Live Demo</a>
                    </div>
                </article>

                <article className="portfolio_item">
                    <div className="portfolio_item-image">
                    <img src={IMG5} alt="" />
                    </div>
                    <h3>This is  my first react application</h3>
                    <div className="portfolio_item-cta">
                    <a href="https://github.com" className="btn" target='_blank'>Tic Tac</a>
                    <a href="https://github.com" className="btn btn-primary" target='_blank'>Live Demo</a>
                    </div>
                </article>
                <article className="portfolio_item">
                    <div className="portfolio_item-image">
                    <img src={IMG2} alt="" />
                    </div>
                    <h3>This is  a golang bookstore  manager</h3>
                    
                    <div className="portfolio_item-cta">
                    <a href="https://github.com" className="btn" target='_blank'>Bookstore Manager</a>
                    <a href="https://github.com" className="btn btn-primary" target='_blank'>Live Demo</a>
                    </div>
                   
                </article>
            </div>
        </section>
    )
}

export default Portfolio
