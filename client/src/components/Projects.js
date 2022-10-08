import React from "react";

const proj = [
  {
    name: "F00000d",
    description: "Using an API to make a nutrition tracking app.",
    pic: "F00000d.png",
    github: "https://github.com/LardexTheLarge/project1-group5",
    link: "https://lardexthelarge.github.io/project1-group5/",
    technology: [
      { 1: "bootstrap" },
      { 2: "edamam.com - API" },
      { 3: "pexels.com - API" },
      { 4: "JS" },
    ],
  },
  {
    name: "Five Guys",
    description:
      "An E commerce website to order menu items from other restaurants.",
    pic: "five_guys.png",
    github: "https://github.com/LardexTheLarge/Five-Guys",
    link: "https://arcane-mesa-45752.herokuapp.com",
    technology: [
      { 1: "bcrypt" },
      { 2: "stripe" },
      { 3: "express" },
      { 4: "handlebars" },
      { 5: "mysql" },
      { 6: "sequelize" },
      { 7: "dotenv" },
      { 8: "JS" },
      { 9: "nodeJs" },
    ],
  },
  {
    name: "Movie Library",
    description: "Movie library that stores movies in a database.",
    pic: "movie-lib.png",
    github: "https://github.com/LardexTheLarge/MovieLibrary",
    link: "https://62b3793eedd09f2807a8dda0--brilliant-begonia-22bb67.netlify.app",
    technology: [{ 1: "C#" }, { 2: "blazor" }],
  },
  {
    name: "Note Taker",
    description: "Take notes and have them be saved by a database.",
    pic: "Note-Taker.PNG",
    github: "https://github.com/LardexTheLarge/Note-Taker",
    link: "https://shielded-fortress-29538.herokuapp.com",
    technology: [],
  },
  {
    name: "Social Media Back End",
    description:
      "A back end for a social media website using MongoDB and mongoose.",
    pic: "Social-media-api.PNG",
    github: "https://github.com/LardexTheLarge/Social-Network-API",
    technology: [],
  },
  {
    name: "Weather Forecast App",
    description: "Weather forecast using local storage and a weather API.",
    pic: "weather-app.PNG",
    github: "https://github.com/LardexTheLarge/Weather-Dashboard",
    link: "https://lardexthelarge.github.io/Weather-Dashboard/",
    technology: [],
  },
];

function Projects() {
  return (
    <div className="row row-cols-1 row-cols-md-2 m-3 g-4">
      {proj.map((projects) => (
        <div className="col">
          <div className="card">
            <img
              src={projects.pic}
              className="card-img-top"
              alt={projects.description}
            />
            <div className="card-body">
              <h5 className="card-title">{projects.name}</h5>
              <p className="card-text">{projects.description}</p>
              <a
                href={projects.github}
                target="_blank"
                className="btn btn-primary"
                rel="noreferrer"
              >
                GitHub Repo
              </a>
              {projects.link ? (
                <a
                  href={projects.link}
                  target="_blank"
                  className="btn btn-primary ms-1"
                  rel="noreferrer"
                >
                  Web Page
                </a>
              ) : (
                <a></a>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Projects;
