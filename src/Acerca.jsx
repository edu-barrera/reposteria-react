import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "../components/acerca.css";

// Componente reutilizable para las tarjetas
function Card({
  name,
  title,
  description,
  linkedin,
  github,
  portfolio,
  imgClass,
}) {
  return (
    <div className="card">
      <div className="overlay"></div>
      <div className={imgClass}></div>
      <h1 className="card-h1">{name}</h1>
      <h2 className="card-h2">{title}</h2>
      <p className="card-p">{description}</p>
      <div className="card-botones">
        <a href={linkedin} target="_blank" rel="noopener noreferrer">
          <img
            className="card-boton"
            src="../recursos/Iconos/linkedin-svgrepo-com.png"
            alt="LinkedIn"
          />
        </a>
        <a href={github}>
          <img
            className="card-boton"
            src="../recursos/Iconos/github.png"
            alt="GitHub"
          />
        </a>
        <a href={portfolio}>
          <img
            className="card-boton"
            src="../recursos/Iconos/portfolio.png"
            alt="Portfolio"
          />
        </a>
      </div>
    </div>
  );
}

// Componente principal

export default function Acerca() {
  const cardsData = [
    {
      name: "Carlos Barrera",
      title: "Java Full Stack Developer",
      description: "Soy dedicado y entusiasta, estudiando Desarrollo Web...",
      linkedin: "https://www.linkedin.com/in/barrera-carlos-e/",
      github: "#",
      portfolio: "#",
      imgClass: "imagen_Eduardo",
    },
    {
      name: "Carlos Barrera",
      title: "Java Full Stack Developer",
      description: "Soy dedicado y entusiasta, estudiando Desarrollo Web...",
      linkedin: "https://www.linkedin.com/in/barrera-carlos-e/",
      github: "#",
      portfolio: "#",
      imgClass: "imagen_Eduardo",
    },
    {
      name: "Carlos Barrera",
      title: "Java Full Stack Developer",
      description: "Soy dedicado y entusiasta, estudiando Desarrollo Web...",
      linkedin: "https://www.linkedin.com/in/barrera-carlos-e/",
      github: "#",
      portfolio: "#",
      imgClass: "imagen_Eduardo",
    },
    {
      name: "Carlos Barrera",
      title: "Java Full Stack Developer",
      description: "Soy dedicado y entusiasta, estudiando Desarrollo Web...",
      linkedin: "https://www.linkedin.com/in/barrera-carlos-e/",
      github: "#",
      portfolio: "#",
      imgClass: "imagen_Eduardo",
    },
  ];

  return (
    <div>
      <Header />
      {/* Carousel */}

      {/* Cards */}
      <div className="cards-container col-sm-11 col-md-11 col-lg-11">
        {cardsData.map((card, index) => (
          <Card
            key={index}
            name={card.name}
            title={card.title}
            description={card.description}
            linkedin={card.linkedin}
            github={card.github}
            portfolio={card.portfolio}
            imgClass={card.imgClass}
          />
        ))}
      </div>
      <Footer />
    </div>
  );
}
