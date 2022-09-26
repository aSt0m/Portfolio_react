import React from "react";
import "./portfolio.css";
import Img1 from "../../assets/fidelity.png";
import Img2 from "../../assets/smartnet.png";
import Img3 from "../../assets/medipure.png";
import Img4 from "../../assets/evolution.png";
import Img5 from "../../assets/portfolio5.png";
import Img6 from "../../assets/portfolio6.jpg";

const data = [
  {
    id: 1,
    image: Img1,
    title: "Fidelity bots",
    github: "www.github.com",
    demo: "https://www.fidelitybots.con",
  },
  {
    id: 2,
    image: Img2,
    title: "SmartNet",
    github: "www.github.com",
    demo: "https://www.smartnet.network",
  },
  {
    id: 3,
    image: Img3,
    title: "Medipure",
    github: "www.github.com",
    demo: "medipureclinical",
  },
  {
    id: 4,
    image: Img4,
    title: "EvolutionNetwork",
    github: "www.github.com",
    demo: "medipureclinical.com",
  },
  {
    id: 5,
    image: Img5,
    title: "Sitio five",
    github: "www.github.com",
    demo: "medipureclinical.com",
  },
  {
    id: 5,
    image: Img6,
    title: "Sitio five",
    github: "www.github.com",
    demo: "medipureclinical.com",
  },
];

export const Portfolio = () => {
  return (
    <section>
      <h5 className="portolio__title">My recent work</h5>
      <h2 className="portfolio__subtitle">Portfolio</h2>
      <div className="container portfolio__container">
        {data.map(({ id, image, title, github, demo }) => {
          return (
            <article key='id' className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div>
              <h3 className="portfolio__item-title">
                This is portfolio item title
              </h3>
              <div className="portfolio__item-cta">
                <a
                  className="portfolio__item-img btn"
                  href={github}
                >
                  Fidelity bots
                </a>
                <a
                  className="portfolio__item-img btn btn-primary"
                  href={demo}
                >
                  Live Demo
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};
